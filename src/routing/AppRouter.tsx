import { RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";

export function AppRouter() {
  return <RouterProvider router={routes} />;
}
