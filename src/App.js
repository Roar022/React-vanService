import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import { Vans, loader as vansLoader } from "./pages/Vans/Vans";
import { Main } from "./pages/Main";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { VanDetail } from "./pages/Vans/VanDetail";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans } from "./components/HostVans";
import { HostVanDetail } from "./components/HostVanDetail";
import { HostVanInfo } from "./components/HostVanInfo";
import { HostVanPricing } from "./components/HostVanPricing";
import { HostVanPhotos } from "./components/HostVanPhotos";
import { NotFound } from "./components/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import "./server";
import Error from "./components/Error";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}
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
          error={<Error />}
          loader={vansLoader}
          errorElement={<Error/>}
        />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
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
