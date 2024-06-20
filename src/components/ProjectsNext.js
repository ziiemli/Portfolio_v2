import React from "react"
import {Link} from "react-router-dom"

const ProjectsNext = ({data, dataProjects, category, projects}) => {
    //name of Actual Project
    const nameOfProject = data && data.nameProject
    //index of Actuel Project
    const indexActualProject = dataProjects && dataProjects.findIndex((project) => project.nameProject === nameOfProject)

    const nextProject = () => {
        //next Index of Array
        const indexNextArray = dataProjects[indexActualProject + 1 ]
        console.log(indexNextArray);
        //find the number of actual array
        const numberOfArray = indexNextArray && dataProjects.indexOf(indexNextArray)
        console.log(numberOfArray);
        //if length of table data > actual number of array = next page
        if (dataProjects.length > numberOfArray) {
            //find name of next Project
            const nextName = indexNextArray && indexNextArray.nameProject
            //delete space of nameProject
            const urlName = nextName.split(" ").join("_")
            //delete accents
            const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
            //redirection to the next Project
            window.location.href = "/" + category + "/projects/" + urlNameNoAccents
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
            window.location.href = "/" + category + "/projects/" + urlNameFirstArrayNoAccents
        }
    }

    return (
        <section className="projectsNext">
            <Link to={projects}>PROJECTS</Link>
            <Link to="#" onClick={nextProject}>NEXT</Link>
        </section>
    )
}

export default ProjectsNext
