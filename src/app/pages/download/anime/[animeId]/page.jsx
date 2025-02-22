// app/Anime.js
import Dropdown from "../../../../component/dropdown/Dropdown";
import AnimeCard from "./AnimeCard";
import EpisodeCard from "./EpisodeCard";
import animeEpisodeData from "../../../../data/animeEpisodedata"; // Adjust path as needed

const Anime = () => {
  const dropdownItems = [
    { label: "Season 1", href: "#" },
    { label: "Season 2", href: "#" },
    { label: "Season 3", href: "#" },
  ];

  return (
    <div className="">
      <div className="pb-10 border-b-2 border-white/10">
        <AnimeCard />
      </div>
      <div className="relative z-40">
        <Dropdown buttonText="Season" items={dropdownItems} />
      </div>
      <div className=" z-10 mt-4 mx-5 grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {animeEpisodeData.map((episode) => (
          <EpisodeCard
            key={episode.id}
            thumbnail={episode.thumbnail}
            animeTitle={episode.animeTitle}
            title={episode.title}
            duration={episode.duration}
            type={episode.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Anime;