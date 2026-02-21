import React, { useState, useEffect, Suspense, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import FallbackSpinner from "./components/FallbackSpinner";
import NavBarWithRouter from "./components/NavBar";
import Home from "./components/Home";
import endpoints from "./constants/endpoints";
import { RoutesData, RouteSection } from "./types/profile.types";
import { useAnalytics } from "./hooks/useAnalytics";
import Admin from "./pages/Admin";

import Footer from "./components/Footer";

function createRoute(route: RouteSection) {
  const SectionComponent = React.lazy(
    () => import("./components/" + route.component),
  );
  return (
    <Route
      key={route.headerTitle}
      path={route.path}
      element={<SectionComponent header={route.headerTitle} />}
    />
  );
}

function MainApp() {
  useAnalytics();
  const [data, setData] = useState<RoutesData | null>(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: RoutesData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  // Memoize the routes to avoid creating components on every render
  const routes = useMemo(() => {
    return data ? data.sections.map(createRoute) : null;
  }, [data]);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Suspense fallback={<FallbackSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            {routes}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;
