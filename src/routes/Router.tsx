import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../views/home/HomeView"));
const Property = React.lazy(() => import("../views/property/PropertyView"));
const Create = React.lazy(() => import("../views/create/CreateView"));

export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Suspense>
  );
}
