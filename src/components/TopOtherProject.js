import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"

const TopOtherProject = ({data, dataProjects}) => {
    const image = data && process.env.PUBLIC_URL + data.imageMobile
    const imageDesktop = data && process.env.PUBLIC_URL + data.backgroundDesktop
    const arrowBack = process.env.PUBLIC_URL + "/assets/ArrowBack.svg"
    const arrowRight = process.env.PUBLIC_URL + "/assets/Next_Arrow.svg"

    //name of Actual Project
    const nameOfProject = data && data.nameProject
    //index of Actuel Project
    const indexActualProject = dataProjects && dataProjects.findIndex((project) => project.nameProject === nameOfProject)

    const nextProject = () => {
        //next Index of Array
        const indexNextArray = dataProjects[indexActualProject + 1]
        //find the number of actual array
        const numberOfArray = indexNextArray && dataProjects.indexOf(indexNextArray)
        //if length of table data > actual number of array = next page
        if (dataProjects.length > numberOfArray) {
            //find name of next Project
            const nextName = indexNextArray && indexNextArray.nameProject
            //delete space of nameProject
            const urlName = nextName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
            //redirection to the next Project
            window.location.href = "/Others/projects/" + urlNameNoAccents
        }
        //else return to first project
        else {
            const indexFirstArray = dataProjects[0]
            const indexFirstArrayName = indexFirstArray && indexFirstArray.nameProject
            //delete space of nameProject
            const urlNameFirstArray = indexFirstArrayName.split(" ").join("_")
            //delete accents
            const urlNameFirstArrayNoAccents = urlNameFirstArray.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
            //redirection to the next Project
            window.location.href = "/Others/projects/" + urlNameFirstArrayNoAccents
        }
    }

    //gsap
    useEffect(() => {
        //global
        gsap.fromTo(
            ".topOtherProject",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
                duration: 1,
            }
        )
        //title
        gsap.fromTo(
            ".topOtherProject__img__title",
            {
                opacity: 0,
                x: -50,
                ease: "power3.out",
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
            }
        )
        //img
        gsap.fromTo(
            ".topOtherProject__img__background",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 0.2,
                duration: 1,
            }
        )
        //description
        gsap.fromTo(
            ".topOtherProject__infos__description",
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
        //date techs roles
        gsap.fromTo(
            ".topOtherProject__infos__group",
            {
                opacity: 0,
                x: -50,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.4,
            }
        )
        //back next project
        gsap.fromTo(
            ".projectNextOther",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.4,
            }
        )
        //line
        gsap.fromTo(
            ".topOtherProject__line",
            {
                opacity: 0,
                x: -100,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
            }
        )
    })

    return (
        <section className="topOtherProject">
            {/* img */}
            <div className="topOtherProject__img">
                <h1 className="topOtherProject__img__title">{data && data.nameProject}</h1>
                <picture className="topOtherProject__img">
                    <source media="(min-width: 996px)" srcSet={imageDesktop} />
                    <img className="topOtherProject__img__background" src={image} alt="Background in relation to the project" loading="lazy"/>
                </picture>
            </div>
            {/* infos */}
            <div className="topOtherProject__infos">
                <p className="topOtherProject__infos__description">{data && data.description}</p>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Date</h2>
                    <p>{data && data.date}</p>
                </div>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Techs</h2>
                    <p>{data && data.techs}</p>
                </div>
                <div className="topOtherProject__infos__group">
                    <h2 className="topOtherProject__infos__group__title">Roles</h2>
                    <p>{data && data.roles}</p>
                </div>
                {/* projects next */}
                <div className="projectNextOther">
                    <Link to={"/Others"}>
                        <img src={arrowBack && arrowBack} alt="arrow to the left" loading="lazy"/>
                        <p>Projects</p>
                    </Link>
                    <Link to={nextProject} onClick={nextProject}>
                        <p>Next</p>
                        <img src={arrowRight} alt="arrow to the right" loading="lazy"/>
                    </Link>
                </div>
            </div>
            {/* separation */}
            <div className="topOtherProject__line"></div>
            <div className="backgroundLinesProjects linesProjectDev linesOther">
                <div className="backgroundLinesProjects__line"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
                <div className="backgroundLinesProjects__line middleLineProjectDev"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
                <div className="backgroundLinesProjects__line lastLineProjectDev"></div>
            </div>
        </section>
    )
}

export default TopOtherProject
