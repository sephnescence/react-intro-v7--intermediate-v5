import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./adoptedPetSlice";
import { petApi } from "./petApiService";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    // petApi.reducerPath is just petApi, as defined in petApiService, but the docs do suggest you reference it by variable name
    [petApi.reducerPath]: petApi.reducer,
  },
  // Apparently need to have this here as it's advised by the docs. Something to do with retries and caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
