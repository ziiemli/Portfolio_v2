import React from "react"
import {Link} from "react-router-dom"

const ProjectDev = ({data}) => {
    //name of project link with _
    const urlName = data.nameProject.split(" ").join("_")
    //url
    const url = `projects/${urlName}`
    const urlNameNoAccents = url.normalize("NFD").replace(/[\u0300-\u036f']/g, "")

    return (
        <article className="projectDev" id={urlName.normalize("NFD").replace(/[\u0300-\u036f']/g, "")}>
            <Link to={urlNameNoAccents}>
                <h3 className="projectDev__title">{data.nameProject}</h3>
                <div className="projectDev__thumbnail">
                    {data.logo && <img className="projectDev__thumbnail__logo" src={data.logo} alt={data.nameProject + " Logo"} loading="lazy"/>}
                    <picture>
                        <source media="(min-width: 996px)" srcSet={data.imageDesktop} />
                        <img className="projectDev__thumbnail__img" src={data.imageMobile} alt={"Thumbnail to represent " + data.nameProject + " website"} loading="lazy"/>
                    </picture>
                </div>
            </Link>
        </article>
    )
}

export default ProjectDev
