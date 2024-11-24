import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function createRoute(route) {
  const SectionComponent = React.lazy(() => import('./components/' + route.component));
  return (
    <Route
      key={route.headerTitle}
      path={route.path}
      component={() => <SectionComponent header={route.headerTitle} />}
    />
  );
};

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  // Memoize the routes to avoid creating components on every render
  const routes = useMemo(() => {
    return data ? data.sections.map(createRoute) : null;
  }, [data]);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {routes}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
