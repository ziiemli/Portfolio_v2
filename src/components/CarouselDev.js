import React, {useEffect} from "react"
import gsap from "gsap"

const CarouselDev = ({dataProjects, data}) => {
    // const pictures = dataProjects
    const rightArrow = process.env.PUBLIC_URL + "/assets/Right_Arrow.svg"
    const leftArrow = process.env.PUBLIC_URL + "/assets/Left_Arrow.svg"

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
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Design_and_Development/projects/" + urlNameNoAccents
        }
        //else return to first project
        else {
            const indexFirstArray = dataProjects[0]
            const indexFirstArrayName = indexFirstArray && indexFirstArray.nameProject
            //delete space of nameProject
            const urlNameFirstArray = indexFirstArrayName.split(" ").join("_")
            //delete accents
            const urlNameFirstArrayNoAccents = urlNameFirstArray.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Design_and_Development/projects/" + urlNameFirstArrayNoAccents
        }
    }

    const prevProject = () => {
        //next Index of Array
        const indexPrevArray = dataProjects[indexActualProject - 1]
        // find the number of actual array
        const numberOfArray = indexPrevArray && dataProjects.indexOf(indexPrevArray)
        //if length of table data > actual number of array = next page
        if (dataProjects.length > numberOfArray) {
            //find name of next Project
            const prevName = indexPrevArray && indexPrevArray.nameProject
            //delete space of nameProject
            const urlName = prevName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Design_and_Development/projects/" + urlNameNoAccents
        }
        // //else return to first project
        else {
            const indexLastArray = dataProjects[dataProjects.length - 1]
            const indexLastArrayName = indexLastArray && indexLastArray.nameProject
            //delete space of nameProject
            const urlNameLastArray = indexLastArrayName.split(" ").join("_")
            //delete accents
            const urlNameLastArrayNoAccents = urlNameLastArray.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            //redirection to the next Project
            window.location.href = "/Design_and_Development/projects/" + urlNameLastArrayNoAccents
        }
    }

    const arrowBack = process.env.PUBLIC_URL + "/assets/ArrowBack.svg"
    const projectNumber = indexActualProject && indexActualProject === 0 ? 1 : indexActualProject + 1
    const currentProjectIndicate = dataProjects && projectNumber && ` 0${projectNumber} / 0${dataProjects.length} `

    //gsap
    useEffect(() => {
        //title
        gsap.fromTo(
            ".carouselDev__title",
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
        //carousel
        gsap.fromTo(
            ".carouselDev__slide",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
                duration: 1.2,
            }
        )
        //back next
        gsap.fromTo(
            ".carouselDev__back",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
            }
        )
        
    })

    return (
        <section className="carouselDev">
            <div>
                <h1 className="carouselDev__title">{data && data.nameProject}</h1>
                <div className="carouselDev__slide">
                    <img className="carouselDev__slide__img" src={data && data.thumbnail} alt={data && "Thumbnail of " + data.nameProject + " project"} loading="lazy"/>
                    <img className="carouselDev__slide__leftArrow" src={leftArrow} alt="arrow to the left" onClick={prevProject} loading="lazy"/>
                    <img className="carouselDev__slide__rightArrow" src={rightArrow} alt="arrow to the right" onClick={nextProject} loading="lazy"/>
                </div>
                <img className="thumbnailDesktopBackground" src={data && data.thumbnailBackground} alt={data && "Background of " + data.nameProject + " project"} loading="lazy"/>
                <div className="carouselDev__back">
                    <a href="/Design_and_Development">
                        <img src={arrowBack && arrowBack} alt="arrow to the left" loading="lazy"/>
                        <p>Projects</p>
                    </a>
                    <p>{currentProjectIndicate}</p>
                </div>
            </div>
        </section>
    )
}

export default CarouselDev
