import { createBrowserRouter } from "react-router-dom";
import { MainLanding } from "../landingPage/mainLanding";
import { LayoutGaleris } from "../landingPage/components/galeri/layoutGaleri";
import { LayoutLokasi } from "../landingPage/components/lokasi/layoutLokasi";

const router = createBrowserRouter([
    {
      path: "*",
      element: <MainLanding />,
    },
    {
      path: "/lokasi",
      element: <LayoutLokasi />,
    },
    {
      path: "/galeri",
      element: <LayoutGaleris />,
    },
]);

export default router;