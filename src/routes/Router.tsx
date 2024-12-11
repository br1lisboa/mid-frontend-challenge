import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const Home = React.lazy(() => import("../views/home/Home"));
// const About = React.lazy(() => import("./pages/About"));
// const NotFound = React.lazy(() => import("./pages/NotFound"));

export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
