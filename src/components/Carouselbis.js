import React, {useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carouselbis = ({title, data, id}) => {
    const [current, setCurrent] = useState(0)
    const rightArrow = process.env.PUBLIC_URL + "/assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "/assets/Left_Arrow.svg"

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
        <div className="Carouselbis_OthersContent">
            <h3>{title}</h3>
            <section className="carousel carouselbis" id={id}>
                <Slider
                    {...settings}
                    prevArrow={<CustomArrow classArrow="carousel__leftArrow" onClick={settings.onClick} arrow={leftArrow} />}
                    nextArrow={<CustomArrow classArrow="carousel__rightArrow" onClick={settings.onClick} arrow={rightArrow} />}>
                    {data &&
                        data.map((picture, index) => (
                            <div key={index}>
                                <img className="carousel__slide carouselbis__img" src={picture.screen} alt={picture.description} loading="lazy"/>
                            </div>
                        ))}
                </Slider>
            </section>
        </div>
    )
}

export default Carouselbis
