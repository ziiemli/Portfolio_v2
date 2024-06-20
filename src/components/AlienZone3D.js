import React from "react"

const AlienZone3D = ({title, screens, id}) => {
    return (
        <div className="screenOtherProject">
            <h3>{title}</h3>
            <div className="threeD">{screens && screens.map((el, index) => <img id="threeD__screenshot" src={el.screen} alt={el.description} key={index} loading="lazy"/>)}</div>
        </div>
    )
}

export default AlienZone3D
