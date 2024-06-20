import React from "react"
import Screen from "../components/Screen"
import Video from "../components/Video"

const ProjectDevContent = ({data}) => {
    //recover url
    const querystring = window.location.pathname.split("/Design_and_Development/projects/").join("")
    //recover name
    const name = querystring.split("_").join(" ")
    //find good data of project
    const dataContent = data && data.find((el) => el.nameProject.normalize("NFD").replace(/[\u0300-\u036f']/g, "") === name)
    return (
        <section className="projectDevContent">
            {/* HOME PAGE */}
            {dataContent && dataContent.home && <Screen title={"HOME"} img={dataContent.home} projectName={dataContent.nameProject} />}
            {/* ARTICLE PAGE */}
            {dataContent && dataContent.article && <Screen title={"ARTICLE"} img={dataContent.article} projectName={dataContent.nameProject} />}
            {/* ABOUT PAGE */}
            {dataContent && dataContent.about && <Screen title={"ABOUT"} img={dataContent.about} projectName={dataContent.nameProject} />}
            {/* CART PAGE (kanap) */}
            {dataContent && dataContent.cart && <Screen title={"CART"} img={dataContent.cart} projectName={dataContent.nameProject} />}
            {/* CONTACT PAGE (LaPanthere) */}
            {dataContent && dataContent.contact && <Screen title={"CONTACT"} img={dataContent.contact} projectName={dataContent.nameProject} />}
            {/* MENU PAGE (OhMyFood) */}
            {dataContent && dataContent.menu && <Screen title={"MENU"} img={dataContent.menu} projectName={dataContent.nameProject} />}
            {/* STREAMERS */}
            {dataContent && dataContent.streamers && dataContent.streamers2 && <Video Webm={dataContent.streamers} Mp4={dataContent.streamers2}/>}
            {/* SCHEDULE */}
            {dataContent && dataContent.schedule && dataContent.schedule2 && <Video Webm={dataContent.schedule} Mp4={dataContent.schedule2}/>}
        </section>
    )
}

export default ProjectDevContent
