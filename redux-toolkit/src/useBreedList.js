import { useGetBreedsQuery } from "./petApiService";

export default function useBreedList(animal) {
  const { isLoading, data: breeds } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}

// This is what it looked like before
// import { useQuery } from "@tanstack/react-query";
// import fetchBreedList from "./fetchBreedList";

// export default function useBreedList(animal) {
//   const results = useQuery(["breeds", animal], fetchBreedList);

//   return [results?.data?.breeds ?? [], results.status];
// }
