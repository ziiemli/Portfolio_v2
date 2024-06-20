import React, {useEffect} from "react"
import {useState} from "react"
import {NavLink} from "react-router-dom"
import gsap from "gsap"

const Menu = () => {
    //menu is active ?
    const [menu, setMenu] = useState(false)

    const openCloseMenu = () => {
        if (menu) {
            setTimeout(() => {
                setMenu(!menu)
            }, 500)
            //gsap menu disapear
            gsap.fromTo(".menu__active", {opacity: 1}, {opacity: 0})
        } else {
            setMenu(!menu)
            //gsap
            gsap.fromTo(".menu__active", {opacity: 0}, {opacity: 1})
        }
    }
    //menu apparition
    useEffect(() => {
        if (menu) {
            gsap.fromTo(".menu__active", {opacity: 0}, {opacity: 1})
        }
    }, [menu])

    //no scroll when menu is open
    //select body tag
    const bodyContent = document.querySelector("body")
    //select body tag
    const htmlContent = document.querySelector("html")
    //if menu false > remove overflow = hidden to body tag
    if (!menu) {
        bodyContent && bodyContent.classList.remove("bodyOverflow")
        htmlContent && htmlContent.classList.remove("bodyOverflow")
    }
    //if menu true > add overflow = hidden to body tag
    else {
        bodyContent && bodyContent.classList.add("bodyOverflow")
        htmlContent && htmlContent.classList.add("bodyOverflow")
    }

    //diamond selected page active?
    const querystring = window.location.pathname.split("/").join("")

    //contact mail
    function sendEmail() {
        window.location.href = "mailto:ziiemli@outlook.fr"
    }

    return (
        <div>
            <div className="menu" onClick={(e) => openCloseMenu()}>
                <img src={process.env.PUBLIC_URL + "/assets/Menu_logo.svg"} alt="diamond indicating selection" loading="lazy" />
            </div>
            {menu && (
                <section className="menu__active">
                    <div className="menu__active__nav">
                        <a href="https://shop.ziiemli.com/" className="menu__active__nav__shop" target="_blank" rel="noreferrer">
                            <p>Shop</p>
                            <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                        </a>
                        <NavLink to="/home" className="menu__active__nav__page">
                            <p>Home</p>
                            {querystring && querystring === "home" ? (
                                <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                            ) : (
                                <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                            )}
                        </NavLink>
                        <NavLink to="/About" className="menu__active__nav__page">
                            <p>About</p>
                            {querystring && querystring === "About" ? (
                                <img className="menu__active__nav__diamond" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                            ) : (
                                <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                            )}
                        </NavLink>
                        <NavLink className="menu__active__nav__page" onClick={sendEmail}>
                            <p>Contact</p>
                            <img className="menu__active__nav__diamond diamondOpacity" src={process.env.PUBLIC_URL + "/assets/diamond.svg"} alt="diamond indicating selection" loading="lazy" />
                        </NavLink>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Menu
