import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/page";
import { PodcastsDetailPage } from "../pages/podcats/page";
import { PodcastsEpisodePage } from "../pages/podcast-episode/page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/podcasts/:podcastId",
    element: <PodcastsDetailPage />,
  },
  {
    path: "/podcasts/:podcastId/episode/:episodeId",
    element: <PodcastsEpisodePage />,
  },
]);
