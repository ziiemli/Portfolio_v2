import React, {useEffect} from "react"
import Fetch from "../components/Fetch"
import Header from "../components/Header"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import ProjectsNext from "../components/ProjectsNext"
import TopOtherProject from "../components/TopOtherProject"
import ProjectOtherContent from "../components/ProjectOtherContent"
import {Helmet, HelmetProvider} from "react-helmet-async"

const ProjectOtherPage = () => {
    //recover url
    const querystring = window.location.pathname.split("/Others/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")

    //data
    const {data, error} = Fetch()
    if (error) console.log(error)

    //data Dev
    const dataProjects = data && data.others
    //find data of good project > Project Top
    const dataProject = dataProjects && dataProjects.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f']/g, "") === name)
    //data Projects > ProjectDevContent
    const dataProjectContent = data && data.othersProjects

    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="project" id="topProject">
            <HelmetProvider>
                <Helmet>
                    <title>{dataProject && "Ziiemli - " + dataProject.nameProject}</title>
                    <meta name="description" content={dataProject && "Others, " + dataProject.nameProject + " project."} />
                    <link rel="canonical" href={querystring && "/Others/projects/" + querystring} />
                </Helmet>
            </HelmetProvider>
            <Header fixed="positionFixed" />
            <main>
                <TopOtherProject data={dataProject} dataProjects={dataProjects} />
                <ProjectOtherContent data={dataProjectContent} />
            </main>
            <RedirectTopPage anchor="topProject" />
            <Footer />
            <ProjectsNext projects={"/Others"} data={dataProject} dataProjects={dataProjects} category="Others" />
        </div>
    )
}

export default ProjectOtherPage
