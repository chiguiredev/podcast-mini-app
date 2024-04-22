import { Entry } from "../../routing/dataLoaders/types";
import { Link } from "react-router-dom";
import "./PodcastCard.scss";

interface PodcastCardProps {
  podcast: Entry;
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  const title = podcast.title.label.split("-")[0].trim();
  const artist = `Author: ${podcast["im:artist"].label}`;
  const image = podcast["im:image"][2].label;

  return (
    <Link to={`/podcasts/${podcast.id.attributes["im:id"]}`}>
      <article className="podcast_card__container">
        <img
          className="podcast_card__container_image"
          src={image}
          alt={title}
        />
        <h2 className="podcast_card__container_title">{title}</h2>
        <p className="podcast_card__container_author">{artist}</p>
      </article>
    </Link>
  );
}
