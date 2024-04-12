import Crumb from "../../_components/crumb";
import { Metadata } from "next";
import { Nav } from "@/types/nav";
import Playlist from "../../_components/playlist";
import Tab from "../../_components/tab";
import { getProviderTrendingSongs } from "@/models/song";
import { getTranslations } from "next-intl/server";

export const maxDuration = 120;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: `Trending Suno AI Songs | ${t("trending_title")}`,
    description: `Trending Suno AI Songs | ${t("trending_description")}`,
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/${
        params.locale !== "en" ? params.locale + "/" : ""
      }trending/suno-ai-songs`,
    },
  };
}

export default async function ({}) {
  const t = await getTranslations("nav");
  const songs = await getProviderTrendingSongs("suno", 1, 50);
  const loading = false;

  const crumbNavs: Nav[] = [
    {
      title: t("home"),
      url: "/",
    },
    {
      title: t("trending"),
      url: "/trending",
    },
    {
      title: "Suno AI Songs",
      active: true,
    },
  ];

  return (
    <div>
      <Crumb navs={crumbNavs} />

      <div className="flex items-center justify-between mb-4">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Suno AI Songs
          </h1>
          <p className="text-sm text-muted-foreground"></p>
          <Tab type="trending" />
        </div>
      </div>

      <Playlist loading={loading} songs={songs || []} />
    </div>
  );
}