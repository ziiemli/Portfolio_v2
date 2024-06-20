import React, {useEffect} from "react"
import CarouselDev from "./CarouselDev"
import gsap from "gsap"

const ProjectTop = ({data, dataProjects}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const logo = data && process.env.PUBLIC_URL + data.logo

    //gsap
    useEffect(() => {
        //global
        gsap.fromTo(
            ".projectTop",
            {opacity: 0},
            {
                opacity: 1,
            }
        )
        //description
        gsap.fromTo(
            ".projectTop__infos__description",
            {
                opacity: 0,
                x: -50,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
            }
        )
        //link
        gsap.fromTo(
            ".projectTop__infos__link",
            {
                opacity: 0,
                x: -50,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
            }
        )
        //date techs roles
        gsap.fromTo(
            ".projectTop__infos__group",
            {
                opacity: 0,
                x: -50,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
            }
        )
        //lines
        gsap.fromTo(
            ".linesProjectDev",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 0.2,
                duration: 1.4,
                delay: 0.3,
            }
        )
        //mobile line
        gsap.fromTo(
            ".projectTop__line",
            {
                opacity: 0,
                x: -100,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
            }
        )
    })

    return (
        <section className="projectTop">
            {/* logo */}
            <div className="projectTop__img">
                <img className="projectTop__img__logo" src={logo} alt={data && data.nameProject + " logo"} loading="lazy"/>
                <img className="projectTop__img__background" src={image} alt={data && "Image of " + data.nameProject + " project"} loading="lazy"/>
            </div>
            <CarouselDev dataProjects={dataProjects} data={data && data} />
            {/* infos */}
            <div className="projectTop__infos">
                <p className="projectTop__infos__description">{data && data.description}</p>
                <a className="projectTop__infos__link" href={data && data.link} target="_blank" rel="noreferrer">
                    LINK
                </a>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Date</h2>
                    <p>{data && data.date}</p>
                </div>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Techs</h2>
                    <p>{data && data.techs}</p>
                </div>
                <div className="projectTop__infos__group">
                    <h2 className="projectTop__infos__group__title">Roles</h2>
                    <p>{data && data.roles}</p>
                </div>
            </div>
            {/* separation */}
            <div className="projectTop__line"></div>
            <div className="backgroundLinesProjects linesProjectDev">
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
            </div>
        </section>
    )
}

export default ProjectTop
