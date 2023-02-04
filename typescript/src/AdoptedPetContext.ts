import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

// Because typescript, we must provide a default animal here
// Apparently this can be advantageous as we can test the AdoptedPetContext
//   as it has its own defaults it can refer to
const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 0,
    name: "Example",
    state: "Example",
    images: [],
    animal: "cat",
    breed: "Example",
    city: "Example",
    description: "Example",
  },
  () => {},
]);

// This alternative here also works if we want
// But Brian doesn't suggest doing it as it can't be null
// const AdoptedPetContextAlt = createContext<
//   [Pet, (adoptedPet: Pet) => void] | null
// >(null);

export default AdoptedPetContext;
