import React from "react"
import gsap from "gsap"
import {useEffect} from "react"

const CategoriesTitle = ({image, imageDesktop, title, paragraphe}) => {
    //gsap animation
    useEffect(() => {
        //group of informations
        gsap.fromTo(
            ".categoriesTitle",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
            }
        )

        //title
        gsap.fromTo(
            ".categoriesTitle__informations__title",
            {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
            }
        )

        //paragraphe
        gsap.fromTo(
            ".categoriesTitle__informations__paragraphe",
            {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                delay: 0.2,
            }
        )

        // which size window
        const isMobile = window.innerWidth <= 768
        //line
        gsap.fromTo(
            ".categoriesTitle__line",
            {
                opacity: 0,
                //mobile anim
                x: isMobile ? -100 : 0,
                //desktop anim
                y: isMobile ? 0 : -600,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                delay: 0.1,
            }
        )
    }, [])

    return (
        <section className="categoriesTitle" id="test">
            <picture className="categoriesTitle__img">
                <source media="(min-width: 996px)" srcSet={imageDesktop} />
                <img src={image} alt={title + " category"} loading="lazy"/>
            </picture>
            <div className="categoriesTitle__informations">
                <h1 className="categoriesTitle__informations__title">{title}</h1>
                <p className="categoriesTitle__informations__paragraphe">{paragraphe}</p>
            </div>
            <div className="categoriesTitle__line"></div>
        </section>
    )
}

export default CategoriesTitle
