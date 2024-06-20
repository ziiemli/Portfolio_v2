import React from 'react';
import {Link} from "react-router-dom"

const ProjectOther = ({data}) => {
    //name of project link with _
    const urlName = data.nameProject.split(" ").join("_")
    //url
    const url = `projects/${urlName}`
    const urlNameNoAccents = url.normalize("NFD").replace(/[\u0300-\u036f']/g, "")
    return (
        <article className="projectOther" id={urlName.normalize("NFD").replace(/[\u0300-\u036f']/g, "")}>
            <Link to={urlNameNoAccents}>
                <h3 className="projectOther__title">{data.nameProject}</h3>
                <div className="projectOther__thumbnail">
                    <picture>
                        <source media="(min-width: 996px)" srcSet={data.imageDesktop} />
                        <img className="projectOther__thumbnail__img" src={data.imageMobile} alt={"Thumbnail to represent " + data.nameProject + " website"} loading="lazy"/>
                    </picture>
                </div>
            </Link>
        </article>
    )
};

export default ProjectOther;