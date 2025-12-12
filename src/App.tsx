import './App.css'
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Connection from "@/pages/calibration/cctv-connection";
import Adjustment from "@/pages/calibration/data-adjustment";
import Parameters from "@/pages/calibration/gauge-parameters";
import Synchronization from "@/pages/calibration/data-synchronization";
import Monitoring from "@/pages/gauge-detection/data-monitoring";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/login" element={<Login />} /> {/* go to login if has no token, go to dashboard if has */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* calibration */}
        <Route path="/cctv-connection" element={<Connection />} />
        <Route path="/data-adjustment" element={<Adjustment />} />
        <Route path="/gauge-calibration" element={<Parameters />} />
        <Route path="/data-synchronization" element={<Synchronization />} />

        {/* gauge detection */}
        <Route path="/data-histories" element={<Monitoring />} />
        <Route path="/data-monitoring" element={<Monitoring />} />
      </Routes>
    </ThemeProvider>
  );
}