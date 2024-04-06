"use client";

import Image from "next/image";
import { Song } from "@/types/song";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ({ songs }: { songs: Song[] }) {
  const t = useTranslations("nav");

  const router = useRouter();
  return (
    <div>
      <h2 className="text-lg font-medium">{t("roaming")}</h2>

      {songs.map((song: Song) => {
        return (
          <div
            key={song.uuid}
            onClick={() => router.push(`/song/${song.uuid}`)}
            className="flex items-start gap-x-2 my-2 py-2 border-b border-base-200 overflow-hidden cursor-pointer"
          >
            <Image
              src={song.image_url}
              width={60}
              height={60}
              alt={song.title}
              className="rounded-md"
            />
            <div>
              <h3 className="font-medium">{song.title}</h3>
              <p className="truncate">{song.tags}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
