import AllFavouritesImages from "../../components/all-favourites-images/favourites-images";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import ImageDetailsOverlay from "../../components/image-details-overlay/ImageDetailsOverlay";
const Favourites = () => {
  return (
    <>
      <div className="container-title">
        <p className="container-title-up">OpenAI Image Generator</p>
        <p className="container-title-down">Favourites</p>
      </div>
      <AllFavouritesImages></AllFavouritesImages>
      <ImageDetailsOverlay></ImageDetailsOverlay>
    </>
  );
};

export default Favourites;
