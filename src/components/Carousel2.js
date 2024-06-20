import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const responsive = {
    0: {items: 1, itemsFit: "contain"},
    568: {items: 1, itemsFit: "contain"},
    1024: {items: 1.4, itemsFit: "contain"},
}

const Carousel2 = ({screens, title}) => {
    const items = screens && screens.map((image, index) => <img key={index} src={image.screen} alt={image.description} className="carousel-image" loading="lazy"/>)

    return (
        <div className="Carousel2">
            <h3>{title}</h3>
            <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />
        </div>
    )
}

export default Carousel2
