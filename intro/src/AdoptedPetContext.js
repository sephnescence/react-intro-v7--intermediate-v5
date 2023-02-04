import { createContext } from "react";

/**
 * Brian mentions that you can provide a default, like an empty array for a cart, but cautions that you "shouldn't". Not sure why, and does also
 * mention that TypeScript will "make you" provide a default. Not sure what the go is there
 */
const AdoptedPetContext = createContext();

export default AdoptedPetContext;
