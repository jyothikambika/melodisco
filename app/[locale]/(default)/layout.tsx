import Header from "./_components/header";
import Player from "./_components/player";
import { ReactNode } from "react";
import Sidenav from "./_components/sidenav";
import Sidepanel from "./_components/sidepanel";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r border-base-300 md:block">
        <div className="flex h-full max-h-screen fixed flex-col gap-2">
          <div className="flex h-16 items-center border-b border-base-300 px-4 lg:h-[80px] lg:px-6"></div>
          <div className="flex-1">
            <Sidenav />
          </div>
          <div className="mt-auto mb-24 p-4">
            <Sidepanel />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 h-[10vh] mt-20 mb-20 overflow-x-hidden overflow-y-auto px-8 py-8">
          {children}
          <Player />
        </main>
      </div>
    </div>
  );
}
