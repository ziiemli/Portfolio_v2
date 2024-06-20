import React, {useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({data, id, classDescription}) => {
    const [current, setCurrent] = useState(0)
    const [showDescription, setShowDescription] = useState(false)
    const pictures = data
    const rightArrow = process.env.PUBLIC_URL + "assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "assets/Left_Arrow.svg"

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        beforeChange: (current, next) => setCurrent(next),
    }

    const CustomArrow = ({classArrow, onClick, arrow}) => <img className={classArrow} src={arrow} alt="arrow" onClick={onClick} loading="lazy"/>

    return (
        <section className="carousel" id={id}>
            <Slider {...settings} prevArrow={<CustomArrow classArrow="carousel__leftArrow" onClick={settings.onClick} arrow={leftArrow} />} nextArrow={<CustomArrow classArrow="carousel__rightArrow" onClick={settings.onClick} arrow={rightArrow} />}>
                {pictures &&
                    pictures.map((picture, index) => (
                        <div className={`${showDescription ? "slide_active" : ""}`} key={index}>
                            <img
                                className={`carousel__slide`}
                                src={picture.img}
                                alt={"image " + picture.className}
                                onMouseEnter={() => setShowDescription(true)}
                                onMouseLeave={() => setShowDescription(false)}
                                loading="lazy"
                            />
                        </div>
                    ))}
            </Slider>
            <div className={`carousel__description ${showDescription ? 'show ' : ''}` + classDescription} >
                    <h2 className="digitalArtwork__title">{pictures[current].titleArtwork}</h2>
                    <p>{pictures[current].description}</p>
                    <h3>Date</h3>
                    <p>{pictures[current].date}</p>
            </div>
        </section>
    )
}

export default Carousel
