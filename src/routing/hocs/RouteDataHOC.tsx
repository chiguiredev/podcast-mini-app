import { useLoaderData, useParams } from "react-router-dom";

interface IRouteDataHOCProps {
  Component: React.ComponentType<any>;
}

export function RouteDataHOC({ Component }: IRouteDataHOCProps) {
  const loaderData = useLoaderData();
  const params = useParams();

  return <Component loaderData={loaderData} params={params} />;
}
