import getSongs from "@/actions/getSongs";
import Header from "@/components/Heder";
import ListItem from "@/components/ListItem";
import { Song } from "@/type";
import PageContent from "./components/PageContent";

export const revalidate = 0;
export default async function Home() {
  const songs = await getSongs();
  return (
    <div
      className="
     h-full w-full rounded-lg overflow-hidden overflow-y-auto"
    >
      <Header className="sticky bg-gradient-to-b from-emerald-800 to-black top-0 z-10">
        <div className=""></div>
      </Header>
      <div className="mb-2 px-6">
        <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
        </div>
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">News Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
