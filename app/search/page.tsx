import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Heder";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div
      className="
  bg-neutral-800 
  rounded-lg 
  h-full 
  w-full 
  overflow-hidden 
  overflow-y-auto
"
    >
      <Header className="bg-gradient-to-b from-emerald-800 sticky top-0 z-10 xl:w-[1170px]">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
