import { VITE_API_BASE_PATH } from "../../../utils/envVars";
import { Author, Entry } from "../types";

export interface PodcastFeed {
  feed: {
    author: Author;
    entry: Entry[];
  };
}

function parseUrlOptions(limit: string, genre: string) {
  return `/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;
}

export async function getPodcastList(options: {
  limit: string;
  genre: string;
}) {
  const requestUrl = new URL(
    `${VITE_API_BASE_PATH}${parseUrlOptions(options.limit, options.genre)}`,
  );

  const response = await fetch(requestUrl.toString());
  const data: PodcastFeed = await response.json();
  return data;
}
