import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/page";
import { PodcastsDetailPage } from "../pages/podcats/page";
import { PodcastsEpisodePage } from "../pages/podcast-episode/page";
import { RouteDataHOC } from "../hocs/RouteDataHOC";

import { getPodcastList } from "../dataLoaders/fetchers/getPodcastList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouteDataHOC Component={HomePage} />,
    loader: async () => {
      const LIMIT = 100;
      const GENRE = 1303;

      const podcastList = await getPodcastList({
        limit: LIMIT.toString(),
        genre: GENRE.toString(),
      });
      return podcastList;
    },
  },
  {
    path: "/podcasts/:podcastId",
    element: <RouteDataHOC Component={PodcastsDetailPage} />,
  },
  {
    path: "/podcasts/:podcastId/episode/:episodeId",
    element: <RouteDataHOC Component={PodcastsEpisodePage} />,
  },
]);
