import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);

  // This is how you can move people within your website without relying on an event, apparently
  const navigate = useNavigate();

  // Two ways to use the AdoptedPetContext here...
  // const setAdoptedPet = useContext(AdoptedPetContext)[1];
  // OR
  // eslint-disable-next-line no-unused-vars
  // const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  // You need that rule for the underscore. Brian mentioned something about the name of an underscore signifying that he doens't care to use it
  // I don't think I like that though. I'd rather just use the index of the array
  const setAdoptedPet = useContext(AdoptedPetContext)[1];

  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  // If you want to refresh the cache, you can call
  // results.refetch();
  // I wonder then if it's worth just having a refresh button on multi page tables
  // So that they can go back and forth was speed but you will need to hit refresh
  // if you think it's stale. Dunno...
  // Say like you have your next page key or something and a new post has come up
  // Because you have an old next page key, your page two won't magically have the
  // last post from page 1 again like many other sites. But you can just hit refresh
  // to see a new page 1

  // You can test this by turning off your internet connection in the browser console
  // It will try to refetch this three times, apparently
  if (results.isLoading) {
    return <h2>Ohno</h2>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? ( // Surely you can just have showModal && instead of a ternary?
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
