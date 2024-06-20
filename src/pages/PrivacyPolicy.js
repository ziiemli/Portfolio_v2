import React, {useEffect} from "react"
import {Helmet} from "react-helmet"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RedirectTopPage from "../components/RedirectTopPage"
import {HelmetProvider} from "react-helmet-async"

const PrivacyPolicy = () => {
    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="topPrivacyPolicy">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - Privacy Policy</title>
                    <meta name="description" content="Privacy Policy" />
                    <link rel="canonical" href="/PrivacyPolicy" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <main className="legalNotice">
                <h1>Politique de confidentialité</h1>
                <p>
                    Zilin Moulin, (Ziiemli), prend très au sérieux la confidentialité des informations personnelles. Les présentes politiques de confidentialité décrivent les pratiques de collecte,
                    d'utilisation, de stockage et de protection des informations personnelles lors de l’utilisation du site web ziiemli.com.
                </p>
                <p>Zilin Moulin se réserve le droit de modifier la présente politique de confidentialité. Il convient à l’utilisateur de les consulter régulièrement. </p>
                <div className="privacyPolicy__infos">
                    <h2>Informations collectées</h2>
                    <p>
                        Lorsque vous visitez le site ziiemli.com, nous collectons automatiquement certaines informations, y compris des informations sur votre appareil, votre navigateur, votre adresse
                        IP, ainsi que des données de suivi sur votre utilisation de notre site. Ces informations sont collectées via Google Analytics, qui utilise des cookies pour suivre les
                        interactions des utilisateurs sur notre site.
                    </p>
                </div>
                <div className="privacyPolicy__utilisation">
                    <h2>Stockage des informations</h2>
                    <p>
                        Nous prenons des mesures de sécurité raisonnables pour protéger vos informations personnelles contre la perte, l'utilisation abusive et l'accès non autorisé, la divulgation,
                        l'altération et la destruction. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne
                        pouvons pas garantir une sécurité absolue de vos informations.
                    </p>
                </div>
                <div className="privacyPolicy__partage">
                    <h2>Partage des informations</h2>
                    <p>Zilin Moulin ne partagera les informations personnelles des clients avec des tiers que si cela est requis par la loi ou si le client a donné son consentement.</p>
                </div>
                <div className="privacyPolicy__partage">
                    <h2>Cookies</h2>
                    <p>
                        Vous pouvez désactiver les cookies de Google Analytics en utilisant les paramètres de votre navigateur, mais veuillez noter que cela peut affecter votre expérience de
                        navigation sur notre site portfolio. Vous pouvez également vous opposer à l'utilisation de vos données par Google Analytics en installant le module complémentaire de navigateur
                        pour la désactivation de Google Analytics.
                    </p>
                </div>
                <div className="privacyPolicy__partage">
                    <h2>Questions ou préoccupations</h2>
                    <p>
                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou la manière dont Zilin Moulin utilise vos informations personnelles, veuillez
                        contacter Zilin Moulin à l'adresse ziiemli.com.
                    </p>
                </div>
            </main>
            <RedirectTopPage anchor="topPrivacyPolicy" />
            <Footer />
        </div>
    )
}

export default PrivacyPolicy
