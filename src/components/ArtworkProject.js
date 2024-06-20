import React from "react"
import {Link} from "react-router-dom"

const ArtworkProject = ({data, nameProject}) => {
    const projectUrl = `/Others/projects/${nameProject}`
    return (
        <article className={data.className + " digitalArtwork"} id={data.className}>
            <Link to={projectUrl}>
                <img src={data.img} alt={data.alt} loading="lazy"/>
                <div className="digitalArtwork__description">
                    <p className="digitalArtwork__description__project">SEE THE PROJECT</p>
                </div>
            </Link>
            <h2 className="digitalArtwork__title__desktop">{data.titleArtwork}</h2>
        </article>
    )
}

export default ArtworkProject
