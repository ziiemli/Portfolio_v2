import React, {useEffect} from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import {Helmet, HelmetProvider} from "react-helmet-async"

const Others = () => {
    const {data} = Fetch()

    //recoverData
    const {dataCategory} = RecoverDataPageCategory()

    const imageBackground = dataCategory && dataCategory.categoryBackground
    const imageBackgroundDesktop = dataCategory && dataCategory.categoryBackgroundDesktop
    const title = dataCategory && dataCategory.category
    const paragraphe = dataCategory && dataCategory.description

    //data Projects
    const projects = data.others

    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="topOthers">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Others</title>
                    <meta
                        name="description"
                        content="Others, discover all projects by Ziiemli. UI and UX, Graphic Design, Object Design, Photography, Experiments, Video Game creation, and some others creations."
                    />
                    <link rel="canonical" href="/Others" />
                </Helmet>
            </HelmetProvider>
            <Header fixed="positionFixed" />
            <main className="others">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
                <Projects othersData={projects} />
            </main>
            <RedirectTopPage anchor="topOthers" />
            <Footer />
        </div>
    )
}

export default Others
