// src/hooks/usePageTracking.js
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Initialize once with your GA ID
ReactGA.initialize("G-HS2Y4SGF3E"); // <-- replace with your GA4 ID


export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
}
