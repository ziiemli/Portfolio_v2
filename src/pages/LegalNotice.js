import React, {useEffect} from "react"
import {Helmet, HelmetProvider} from "react-helmet-async"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RedirectTopPage from "../components/RedirectTopPage"

const LegalNotice = () => {
    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="topLegalNotice">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Legal Notice</title>
                    <meta name="description" content="Legal Notice" />
                    <link rel="canonical" href="/LegalNotice" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <main className="legalNotice">
                <h1>Mentions Légales</h1>
                <div className="legalNotice__editeur">
                    <h2>Éditeur</h2>
                    <p>Le site ziiemli.com est la propriété de Zilin Moulin, entreprise immatriculée sous le numéro 948 041 876, et situé 254 rue Vendôme, 69003 Lyon. Mail : ziiemli@outlook.fr</p>
                </div>
                <div className="legalNotice__directeur">
                    <h2>Directeur de la publication</h2>
                    <p>Le directeur de la publication du site web ziiemli.com est Zilin Moulin.</p>
                </div>
                <div className="legalNotice__hebergement">
                    <h2>Hébergement</h2>
                    <p>
                        Le site web ziiemli.com est hébergé par OVH, immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro 424 761 419 00045, dont le siège social est
                        situé au 2 rue Kellermann - 59100 Roubaix - France.
                    </p>
                </div>
                <div className="legalNotice__modif">
                    <h2>Modification des mentions légales</h2>
                    <p>Zilin Moulin se réserve le droit de modifier à tout moment les présentes mentions légales. Nous vous invitons à les consulter régulièrement.</p>
                </div>
                <div className="legalNotice__conditions">
                    <h2>Conditions d'utilisation</h2>
                    <p>
                        L'utilisation du site web ziiemli.com implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-dessous. Zilin Moulin se réserve le droit de
                        modifier le contenu de ce site web à tout moment, sans préavis. Zilin Moulin ne peut garantir que ce site web sera exempt d'erreurs ou d'interruptions, et n'est pas responsable
                        des pertes ou dommages découlant de l'utilisation de ce site web ou de son contenu. Des liens vers des sites tiers peuvent être proposés sur le site web ziiemli.com. Zilin
                        Moulin n'est pas responsable du contenu de ces sites et ne peut garantir leur exactitude, leur fiabilité ou leur pertinence. L'utilisation de ce site web ou de son contenu à
                        des fins non autorisées peut constituer une violation des lois applicables en matière de propriété intellectuelle, de confidentialité ou de publicité. Zilin Moulin se réserve
                        le droit de prendre les mesures nécessaires en cas d'utilisation non autorisée de ce site web ou de son contenu. En utilisant ce site web, vous acceptez de ne pas tenter
                        d'accéder au site web de manière non autorisée ou de perturber son fonctionnement.
                    </p>
                </div>
                <div className="legalNotice__proprietes">
                    <h2>Propriété intellectuelle</h2>
                    <p>
                        Tous les contenus présents sur ce site web, y compris, mais sans s'y limiter, les textes, images, graphismes, logos, icônes, audio et vidéos, ainsi que leur mise en page, sont
                        la propriété exclusive de Zilin Moulin ou de ses partenaires, et sont protégés par les lois nationales et internationales en matière de propriété intellectuelle. Toute
                        reproduction, représentation, modification, publication, adaptation de tout contenu présent sur ce site web, quel que soit le moyen ou le procédé utilisé, est strictement
                        interdite sans l’autorisation écrite au préalable de Zilin Moulin ou de ses partenaires.
                    </p>
                </div>
                <div className="legalNotice__donnees">
                    <h2>Données personnelles</h2>
                    <p>
                        Ce site utilise Google Analytics, un service d'analyse de site internet fourni par Google Inc. ("Google"). Google Analytics utilise des cookies, qui sont des fichiers texte
                        placés sur votre ordinateur, pour aider le site internet à analyser l'utilisation du site par ses utilisateurs. Les données générées par les cookies concernant votre
                        utilisation du site internet (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux États-Unis. Google utilisera ces informations
                        dans le but d'évaluer votre utilisation du site internet, de compiler des rapports sur l'activité du site internet à destination des exploitants du site internet et de fournir
                        d'autres services relatifs à l'activité du site internet et à l'utilisation d'internet. Google est susceptible de communiquer ces données à des tiers en cas d'obligation légale
                        ou lorsque ces tiers traitent ces données pour le compte de Google, y compris notamment l'éditeur de ce site. Google ne recoupera pas votre adresse IP avec toute autre donnée
                        détenue par Google. Vous pouvez désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur. Cependant, une telle désactivation pourrait
                        empêcher l'utilisation de certaines fonctionnalités de ce site. En utilisant ce site internet, vous consentez expressément au traitement de vos données nominatives par Google
                        dans les conditions et pour les finalités décrites ci-dessus.
                    </p>
                </div>
            </main>
            <RedirectTopPage anchor="topLegalNotice" />
            <Footer />
        </div>
    )
}

export default LegalNotice
