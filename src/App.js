import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import { Vans } from "./pages/Vans/Vans";
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
function App() {
  return (
    <>
      {/* if '/' is present than it will consider absolute path otherwise it will consider it relative route of his parent   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
