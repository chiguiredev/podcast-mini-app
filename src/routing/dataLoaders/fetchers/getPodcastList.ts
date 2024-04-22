import { VITE_API_BASE_PATH } from "../../../utils/envVars";

export async function getPodcastList(limit: string, genre: string) {
  const requestUrl = new URL(
    `${VITE_API_BASE_PATH}/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`,
  );

  const response = await fetch(requestUrl.toString());
  const data = await response.json();
  return data;
}
