import React, {useEffect} from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import ProjectDevContent from "../components/ProjectDevContent"
import ProjectTop from "../components/ProjectTop"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"
import {Helmet, HelmetProvider} from "react-helmet-async"

const ProjectDevDesign = () => {
    //recover url
    const querystring = window.location.pathname.split("/Design_and_Development/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")

    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    //data Dev
    const dataProjects = data.dev
    //find data of good project > Project Top
    const dataProject = dataProjects && dataProjects.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === name)

    //data Projects Dev > ProjectDevContent
    const dataProjectContent = data && data.devProject

    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="project" id="topProject">
            <HelmetProvider>
                <Helmet>
                    <title>{dataProject && "Ziiemli - " + dataProject.nameProject}</title>
                    <meta name="description" content={dataProject && "Web development and design, " + dataProject.nameProject + " project. Front-end Development"} />
                    <link rel="canonical" href={querystring && "/Design_and_Development/projects/" + querystring} />
                </Helmet>
            </HelmetProvider>
            <Header fixed="positionFixed" />
            <main className="projectDevDesign">
                <ProjectTop data={dataProject} dataProjects={dataProjects} />
                <ProjectDevContent data={dataProjectContent} />
            </main>
            <RedirectTopPage anchor="topProject" />
            <Footer />
            <ProjectsNext projects={"/Design_and_Development"} data={dataProject} dataProjects={dataProjects} category="Design_and_Development" />
        </div>
    )
}

export default ProjectDevDesign
