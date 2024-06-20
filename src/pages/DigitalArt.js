import React from "react"
import CategoriesTitle from "../components/CategoriesTitle"
import Header from "../components/Header"
import Fetch from "../components/Fetch"
import RecoverDataPageCategory from "../components/RecoverDataPageCategory"
import Projects from "../components/Projects"
import RedirectTopPage from "../components/RedirectTopPage"
import Footer from "../components/Footer"
import {Helmet, HelmetProvider} from "react-helmet-async"

const DigitalArt = () => {
    //data
    const {data} = Fetch()

    //recoverData
    const {dataCategory} = RecoverDataPageCategory()

    const imageBackground = dataCategory && dataCategory.categoryBackground
    const imageBackgroundDesktop = dataCategory && dataCategory.categoryBackgroundDesktop
    const title = dataCategory && dataCategory.category
    const paragraphe = dataCategory && dataCategory.description

    //data Projects
    // const projects = data.digital

    //data Digita Artworks
    const digitalArtworks = data.digital

    return (
        <div id="topDigital">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Digital Art</title>
                    <meta name="description" content="Digital Art, discover all artworks (illustrations, concept art, sketches) by Ziiemli" />
                    <link rel="canonical" href="/Digital_Art" />
                </Helmet>
            </HelmetProvider>
            <Header fixed="positionFixed" />
            <main className="digitalArt">
                <CategoriesTitle image={imageBackground} imageDesktop={imageBackgroundDesktop} title={title} paragraphe={paragraphe} />
                <Projects digitalArtworks={digitalArtworks} />
            </main>
            <RedirectTopPage anchor="topDigital" />
            <Footer />
        </div>
    )
}

export default DigitalArt
