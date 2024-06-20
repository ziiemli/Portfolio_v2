import DigitalArtworks from "./DigitalArtworks"
import ProjectDev from "./ProjectDev"
import ProjectOther from "./ProjectOther"
import TraditionalArtworks from "./TraditionalArtworks"

const Projects = ({webData, digitalArtworks, traditionalArtworks, othersData}) => {
    const webDevData = webData && "projects"
    const artData = (digitalArtworks && "projectsArt") || (traditionalArtworks && "projectsArt") || (othersData && "projectsOther")
    return (
        <section>
            <div className={(webDevData && webDevData) || (artData && artData)}>
                {webData && (
                    <div className="backgroundLinesProjects linesDev">
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                        <div className="backgroundLinesProjects__line"></div>
                    </div>
                )}
                {(digitalArtworks || traditionalArtworks) && (
                    <div className="backgroundLinesProjects linesArt">
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                        <div className="backgroundLinesProjects__line lineArt"></div>
                    </div>
                )}
                {othersData && (
                    <div className="backgroundLinesProjects linesOther">
                        <div className="backgroundLinesProjects__line lineOther"></div>
                        <div className="backgroundLinesProjects__line lineOther"></div>
                        <div className="backgroundLinesProjects__line lineOther"></div>
                    </div>
                )}
                <h2 className="projects__title">Projects</h2>
                {webData && webData.map((el, index) => <ProjectDev data={el} key={index} />)}
                {digitalArtworks && <DigitalArtworks data={digitalArtworks} />}
                {traditionalArtworks && <TraditionalArtworks data={traditionalArtworks} />}
                {othersData && othersData.map((el, index) => <ProjectOther data={el} key={index} />)}

            </div>
        </section>
    )
}

export default Projects
