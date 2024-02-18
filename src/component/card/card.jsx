import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

function Card({ link, image, text, pagesMenu }) {
  const items = Object.entries(image).map(([key, src]) => ({
    original: src,
    key: key,
  }));
  const imageGalleryConfig = {
    home: {
      items: image,
      showNav: false,
      autoPlay: true,
      slideDuration: 1000,
      slideInterval: 3000,
      showPlayButton: false,
      showThumbnails: false,
      showFullscreenButton: false,
    },
    standard: {
      items: items,
      showNav: false,
      autoPlay: true,
      slideDuration: 1000,
      slideInterval: 4000,
      showPlayButton: false,
      showThumbnails: false,
      showFullscreenButton: false,
    },
  };

  return (
    <>
      <div className="card__container">
        <div className="card__body">
          <div className="card__image">
            {link ? (
              <ImageGallery {...imageGalleryConfig.home} />
            ) : (
              <ImageGallery {...imageGalleryConfig.standard} />
            )}
          </div>
          {pagesMenu ? (
            <div className="card__item">
              <h2> {text} </h2>
            </div>
          ) : (
            <div className="card__item">
              <Link to={link}>
                <button> VER MÁS </button>
              </Link>
              <h2> {text} </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
