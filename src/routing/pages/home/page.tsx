import { PodcastsGrid } from "../../../components/PodcastGrid/PodcastGrid";
import { PodcastCard } from "../../../components/PodcastCard/PodcastCard";
import { Author, Entry } from "../../dataLoaders/types";

interface HomePageProps {
  loaderData: {
    feed: {
      author: Author;
      entry: Entry[];
    };
  };
  params: Record<string, string>;
}

export function HomePage({ loaderData }: HomePageProps) {
  const {
    feed: { entry },
  } = loaderData;

  return (
    <>
      <PodcastsGrid>
        {entry?.map((podcast) => (
          <PodcastCard key={podcast.id.attributes["im:id"]} podcast={podcast} />
        ))}
      </PodcastsGrid>
    </>
  );
}
