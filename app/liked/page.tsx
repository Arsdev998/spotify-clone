import Image from "next/image";

import getLikedSongs from "@/actions/getLikedSongs";
import Heder from "@/components/Heder";

import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        sm:w-[1180px] 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Heder>
        <div className="mt-20">
          <div
            className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
          >
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                priority
                fill
                sizes="(50vw, 100vw)"
                src="/images/liked.png"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1
                className="
                  text-white 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  font-bold
                "
              >
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Heder>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
