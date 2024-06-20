import React from "react"

const ScreenOtherProject = ({title, screens, id}) => {
    return (
        <div className="screenOtherProject">
            <h3>{title}</h3>
            <div className="screenOtherProject__screens">
                {screens && screens.map((el, index) => <img id={"screenOtherProject__screens__" + id + "__" + index} src={el.screen} alt={el.description} key={index} loading="lazy" />)}
            </div>
        </div>
    )
}

export default ScreenOtherProject
