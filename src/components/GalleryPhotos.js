import React, {useState} from "react"

const GalleryPhotos = ({photos}) => {
    //data photos
    const images = photos && [...photos].reverse()

    const rightArrow = process.env.PUBLIC_URL + "/assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "/assets/Left_Arrow.svg"

    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState()

    const openPhoto = (index) => {
        setSelectedPhotoIndex(index)
    }

    const closePhoto = () => {
        setSelectedPhotoIndex()
    }

    const navigatePhotos = (direction) => {
        const newIndex = (selectedPhotoIndex + direction + photos.length) % photos.length
        setSelectedPhotoIndex(newIndex)
    }

    return (
        <div className="gallery">
            {images &&
                images.map((image, index) => (
                    <div className="gallery__img" key={index} onClick={() => openPhoto(index)}>
                        <img src={image.src} alt={image.description} loading="lazy"/>
                        <div className="gallery__img__infos">
                            <h3>{image.serie}</h3>
                            <p>{image.description}</p>
                            <div className="gallery__img__infos__date">
                                <strong className="gallery__img__infos__date__h">DATE</strong>
                                <p>{image.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            {selectedPhotoIndex !== undefined && images && (
                <div className="galleryPhotoModal">
                    <img className="galleryPhotoModal__arrow" src={leftArrow} alt="left Arrow" onClick={() => navigatePhotos(-1)} loading="lazy"/>
                    <img className="galleryPhotoModal__img" src={images[selectedPhotoIndex].src} alt="Selected" loading="lazy"/>
                    <img className="galleryPhotoModal__arrow" src={rightArrow} alt="right Arrow" onClick={() => navigatePhotos(1)} loading="lazy"/>
                    <div className="galleryPhotoModal__background" onClick={() => closePhoto()}></div>
                </div>
            )}
        </div>
    )
}

export default GalleryPhotos
