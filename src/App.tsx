import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Router } from "./routes/Router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
