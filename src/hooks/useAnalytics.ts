import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
const UAParser = require("ua-parser-js");

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageview = async () => {
      // Don't track admin page views
      if (location.pathname.startsWith("/admin")) return;

      try {
        // Fetch country from free IPAPI
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const country = data.country_name || "Unknown";

        // Parse User Agent for Browser and OS info
        const parser = new UAParser();
        const result = parser.getResult();
        const browser = result.browser.name || "Unknown";
        const os = result.os.name || "Unknown";

        // Insert into Supabase
        const { error } = await supabase.from("page_views").insert([
          {
            path: location.pathname,
            country: country,
            browser: browser,
            os: os,
          },
        ]);

        if (error) {
          console.error("Error logging page view:", error);
        }
      } catch (err) {
        console.error("Failed to track analytics:", err);
      }
    };

    trackPageview();
  }, [location.pathname]);
};
