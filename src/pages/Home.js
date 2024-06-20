import React, {useEffect} from "react"
import {NavLink} from "react-router-dom"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import {Helmet, HelmetProvider} from "react-helmet-async"
import gsap from "gsap"

const Home = () => {
    //data Home Page
    const {data, error} = Fetch()
    if (error) console.log(error)

    const categories = data.home

    //Animation gsap for Navlinks
    useEffect(() => {
        //mobile
        const isMobile = window.innerWidth <= 768

        //desktop
        if (categories) {
            categories.forEach((category, index) => {
                gsap.fromTo(
                    `.article-${category.id}`,
                    {
                        y: isMobile ? 200 : 750,
                        opacity: isMobile ? 0 : 1,
                    },
                    {y: 0, opacity: 1, ease: "power3.out", duration: 1, delay: 0.2 * index}
                )
            })
        }
    }, [categories]) //categories to wait data

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Home</title>
                    <meta name="description" content="Home page, select Web Development and Design, Digital Art, Traditional Art or Others." />
                    <link rel="canonical" href="/home" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <main className="homeCategories" id="homeCategoriesHeight">
                {/* display Categories */}
                {categories &&
                    categories.map((category) => (
                        <NavLink to={"/" + category.nav} className={`nav article-${category.id}`} key={category.id}>
                            <article className={`homeCategories__article`}>
                                <h2 className="homeCategories__article__title">{category.category}</h2>
                                <div className="homeCategories__article__gradient"></div>
                                <picture>
                                    <source media="(min-width: 996px)" srcSet={category.imageDesktop} />
                                    <img src={category.imageMobile} alt={"image to illustrate the " + category.category + " category"} loading="lazy" />
                                </picture>
                            </article>
                        </NavLink>
                    ))}
            </main>
            <div className="backgroundHome">
                <div className="backgroundLines">
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                    <div className="backgroundLines__line"></div>
                </div>
                <picture>
                    <source media="(min-width: 996px)" srcSet={`${process.env.PUBLIC_URL}/assets/img/home/Background_Desktop.png`} />
                    <img src={`${process.env.PUBLIC_URL}/assets/img/home/Background_Mobile.webp`} alt="Gray background with soft forms in translucent" loading="lazy" />
                </picture>
            </div>
        </div>
    )
}

export default Home
