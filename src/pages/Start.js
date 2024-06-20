import React, {useEffect} from "react"
import {Helmet, HelmetProvider} from "react-helmet-async"
import {Link} from "react-router-dom"
import gsap from "gsap"

const Start = () => {
    //gsap
    useEffect(() => {
        //background
        gsap.fromTo(
            ".start__background",
            {
                opacity: 0,
                duration: 10,
                ease: "power3.out",
            },
            {
                opacity: 1,
            }
        )
        //line
        gsap.fromTo(
            ".start__line",
            {
                opacity: 0,
                y: -1300,
                duration: 1.5,
                ease: "power3.out",
            },
            {
                opacity: 0.2,
                y: 0,
            }
        )
        //line2
        gsap.fromTo(
            ".start__line2",
            {
                opacity: 0,
                y: -1300,
                duration: 1.5,
                ease: "power3.out",
            },
            {
                opacity: 0.2,
                y: 0,
                delay: 0.2,
            }
        )

        //ZIIEMLI
        gsap.fromTo(
            ".start__content__h1",
            {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
            }
        )
        //Zilin M.
        gsap.fromTo(
            ".start__content__h2",
            {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
            }
        )
        //job
        gsap.fromTo(
            ".start__content__ul",
            {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                x: 0,
                delay: 0.2,
            }
        )
        //start
        gsap.fromTo(
            ".start__button",
            {
                opacity: 0,
                scale: 2,
                duration: 1,
                ease: "power3.out",
            },
            {
                opacity: 1,
                scale: 1,
                delay: 0.8,
            }
        )
    }, [])

    return (
        <main className="start">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Start</title>
                    <meta name="description" content="Zilin Moulin, alias Ziiemli is a freelancer illustrator, concept artit and visual designer based in Lyon." />
                    <link rel="canonical" href="/" />
                </Helmet>
            </HelmetProvider>
            {/* <div className="start__logo">
                <img src={`${process.env.PUBLIC_URL}/assets/Logo.svg`} alt="Logo of Ziiemli" loading="lazy" />
            </div> */}
            <div className="start__content">
                <h1 className="start__content__h1"><img src={`${process.env.PUBLIC_URL}/assets/Main_logo.svg`} alt="Logo of Ziiemli" loading="lazy" /></h1>
                <h2 className="start__content__h2">Zilin Moulin</h2>
                <ul className="start__content__ul">
                    <li>Illustrator</li>
                    <li>Concept Artist</li>
                    <li>Visual Designer</li>
                </ul>
            </div>
            <div className="start__button">
                <div className="start__button__line start__line1"></div>
                <Link to={"home"}>
                    <h2 className="start__button__start">START</h2>
                </Link>
                <div className="start__button__line"></div>
            </div>
            <div className="start__background">
                <img
                    className="start_photography_background"
                    src={process.env.PUBLIC_URL + "assets/img/start/Photography_Background.png"}
                    alt="Photography of Zilin Moulin, alias Ziiemli"
                    loading="lazy"
                />
            </div>
            <div className="start__line"></div>
            <div className="start__line2"></div>
        </main>
    )
}

export default Start
