import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

// Initialize GA4 once
ReactGA.initialize("G-HS2Y4SGF3E");

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null; // component kuch render nahi karega
}
