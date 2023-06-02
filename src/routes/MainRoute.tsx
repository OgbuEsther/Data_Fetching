import { createBrowserRouter } from "react-router-dom";
import ReadFiles from "../pages/ReadFiles";
import LayOut from "../components/common/LayOut";
import UseEffect from "../pages/UseEffect";
import TanStack from "../pages/TanStack";
import Swr from "../pages/Swr";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: (
          <ReadFiles>
            <UseEffect />
          </ReadFiles>
        ),
      },
      {
        path: "/tanstack",
        element: (
          <ReadFiles>
            <TanStack />
          </ReadFiles>
        ),
      },
      {
        path: "/swr",
        element: (
          <ReadFiles>
            <Swr />
          </ReadFiles>
        ),
      },
    ],
  },
]);
