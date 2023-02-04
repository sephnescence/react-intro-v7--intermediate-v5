import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // Note that we're not doing something like [adoptedPet, setAdoptedPet]. We're using the "whole hook" in the app, meaning we can access the adopted pet and set it from anywhere in the app
  // In Q&A, it seemed like people were confused by this naming, so Brian offered calling it adoptedPetHook instead if it's less confusing
  const adoptedPet = useState(null);

  // Note that QueryClientProvider and BrowserRouter also use context as well
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            {/* I don't know why I don't have to import DetailsErrorBoundary... */}
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// Apparently some people like to wrap their App in an Error Boundary here instead of how we did it
root.render(<App />);
