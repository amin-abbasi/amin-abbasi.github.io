import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that resets the scroll position to the top of the page
 * whenever the route changes. This is critical for preventing the 
 * "short content footer" glitch during SPA navigation.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the document immediately
    window.scrollTo(0, 0);
    
    // For browsers with smooth scroll behavior on body/html,
    // we also try to force the scroll to the top to avoid 
    // visual jitters during transition.
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
