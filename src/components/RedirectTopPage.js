import React, {useEffect} from "react"
import gsap from "gsap"

const RedirectTopPage = ({anchor, displayNone}) => {
    useEffect(() => {
        gsap.fromTo(
            ".redirectTopPage",
            {
                opacity: 0,
                ease: "power3.out",
            },
            {
                opacity: 1,
                delay: 1.5,
            }
        )
    })

    return (
        <section className={displayNone}>
            <div className="redirectTopPage">
                {/* arrow */}
                <a className="redirectTopPage__svg" href={"#" + anchor}>
                    <img className="redirectTopPage__svg__arrowTop" src={process.env.PUBLIC_URL + "/assets/Arrow_Top.svg"} alt="arrow in up direction" loading="lazy"/>
                </a>
                {/* mail */}
                <a href="mailto:ziiemli@outlook.fr" className="redirectTopPage__svg">
                    <img className="redirectTopPage__svg__mail" src={process.env.PUBLIC_URL + "/assets/Mail.svg"} alt="mail logo" loading="lazy"/>
                </a>
            </div>
        </section>
    )
}

export default RedirectTopPage
