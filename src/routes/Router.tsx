import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Skeleton } from "../components";

const Home = React.lazy(() => import("../views/home/HomeView"));
const Property = React.lazy(() => import("../views/property/PropertyView"));
const Create = React.lazy(() => import("../views/create/CreateView"));
const NotFound = React.lazy(() => import("../views/notfound/NotFoundView"));
const Error = React.lazy(() => import("../views/error/ErrorView"));

export function Router() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/create" element={<Create />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
