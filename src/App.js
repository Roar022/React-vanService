import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import { Vans, loader as vansLoader } from "./pages/Vans/Vans";
import { Main } from "./pages/Main";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { VanDetail, loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans, loader as hostVanLoader } from "./pages/Host/HostVans";
import {
  HostVanDetail,
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
import { NotFound } from "./components/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import "./server";
import Error from "./components/Error";
import { requireAuth } from "./utils";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        // if will all the error in child route also
        // errorElement={<Error />}
      >
        {/* if others route not matching than this route will run */}
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route
          path="vans"
          element={<Vans />}

          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await requireAuth()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVanLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => await requireAuth()}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => await requireAuth()}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => await requireAuth()}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      {/* if '/' is present than it will consider absolute path otherwise it will consider it relative route of his parent   */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
