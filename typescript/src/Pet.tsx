import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

// You might be tempted to just type const Pet = (props) => { with const Pet = (props: Pet) => {, but we don't refer to everything in a pet
interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

export const PetAlt: FunctionComponent<IProps> = (props: IProps) => {
  const { animal } = props;

  return <h1>{animal}</h1>;
};

// I think we currently do it this way internally at intelli, but we don't need to anymore
export const PetAltAlt: React.FC<IProps> = (props: IProps) => {
  const { animal } = props;

  return <h1>{animal}</h1>;
};

const Pet = (props: IProps) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
