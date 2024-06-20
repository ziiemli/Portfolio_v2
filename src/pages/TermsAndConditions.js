import React, {useEffect} from "react"
import {Helmet, HelmetProvider} from "react-helmet-async"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RedirectTopPage from "../components/RedirectTopPage"

const TermsAndConditions = () => {
    //reinitial position to the top page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="topTermsAndConditions">
            <HelmetProvider>
                <Helmet>
                    <title>Ziiemli - TermsAndConditions</title>
                    <meta name="description" content="Terms and Conditions" />
                    <link rel="canonical" href="/TermsAndConditions" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <main className="legalNotice">
                <h1>Conditions générales de vente et de prestation de services</h1>
                <div className="legalNotice__intro">
                    <h2>Introduction</h2>
                    <p>
                        Ces conditions générales de vente et de prestation de services s'appliquent à définir les modalités de vente et de prestation de services de l’entreprise de Zilin Moulin
                        (Ziiemli), immatriculée 948 041 876. Située 254 rue Vendome, 69003 Lyon.
                    </p>
                    <p>Mail : ziiemli@outlook.fr</p>
                    <p>En acceptant les prestations de services de Zilin Moulin, le client accepte les présentes CGV ainsi que le contrat et le devis en annexe.</p>
                </div>
                <div className="legalNotice__object">
                    <h2>Objets des prestations de services</h2>
                    <p>
                        Zilin Moulin fournit les services décrits dans le contrat en annexe. Le devis en annexe fournit une estimation détaillée des coûts associés à ces prestations de services. Toute
                        prestation s’accompagne d’un contrat et d’un devis détaillant toutes les modalités.
                    </p>
                </div>
                <div className="legalNotice__tarifs">
                    <h2>Tarifs et modalités de paiement</h2>
                    <p>
                        Les tarifs pour les prestations de services sont décrits dans le devis en annexe. Les modalités de paiement seront décrites dans le contrat en annexe. En cas de non-paiement ou
                        de retard de paiement, des intérêts de retard seront dus à compter de la date d'échéance de la facture. La facture devra être réglée sous 30 jour(s) à compter de sa date
                        d’émission. Passé ce délai, une pénalité de retard de 10 % sera appliquée, ainsi qu’une indemnité forfaitaire de 40 € due au titre des frais de recouvrement. Pas d’escompte
                        pour règlement anticipé. En cas de retard de paiement de plus de 40 jours, outre les pénalités de retard et l'indemnité forfaitaire de recouvrement mentionnées ci-dessus, une
                        somme équivalente à 0,5% de la facture par jour de retard supplémentaire sera exigée, sans préjudice de toute autre action que Zilin Moulin se réserve de mener à l'encontre du
                        client pour recouvrer les sommes dues.
                    </p>
                </div>
                <div className="legalNotice__donnees">
                    <h2>Traitement des données personnelles</h2>
                    <p>
                        Le client est informé que, dans le cadre de l'exécution de la prestation, Zilin Moulin est amené à collecter et traiter des données à caractère personnel le concernant. Ces
                        données sont collectées et traitées dans le respect des dispositions de la réglementation applicable en matière de protection des données à caractère personnel, notamment du
                        Règlement Général sur la Protection des Données (RGPD). Le responsable du traitement de ces données est Zilin Moulin, qui s'engage à ne collecter et à ne traiter que les
                        données strictement nécessaires à l'exécution de la prestation et à les traiter de manière confidentielle et sécurisée. Le client dispose d'un droit d'accès, de rectification,
                        d'opposition, de suppression et de portabilité de ses données à caractère personnel, qu'il peut exercer à tout moment en contactant Zilin Moulin par le biais des coordonnées
                        mentionnées dans les présentes CGV. Zilin Moulin s'engage à ne pas divulguer les données à caractère personnel du client à des tiers non autorisés, sauf en cas d'obligation
                        légale ou réglementaire. En acceptant les présentes CGV, le client consent expressément au traitement de ses données à caractère personnel par Zilin Moulin, dans les conditions
                        et pour les finalités mentionnées ci-dessus.
                    </p>
                </div>
                <div className="legalNotice__responsabilite">
                    <h2>Responsabilité et garantie</h2>
                    <p>
                        Pour le prestataire, Zilin Moulin : - Fournir les prestations de services ou les produits commandés par le client conformément aux termes du contrat. - Respecter les délais de
                        livraison ou d'exécution convenus. - Garantir que les prestations de services ou les produits fournis sont conformes aux normes de qualité en vigueur et à la description faite
                        sur le site internet. - Garantir la sécurité et la confidentialité des données personnelles du client conformément à la réglementation en vigueur.
                    </p>
                    <p>
                        Pour le client : - Payer le prix convenu dans les conditions prévues par le contrat. - Fournir à Zilin Moulin toutes les informations nécessaires à la réalisation des
                        prestations de services ou à la livraison des produits. - Respecter les conditions d'utilisation des prestations de services ou des produits fournies par Zilin Moulin. -
                        Garantir que toutes les informations fournies à Zilin Moulin sont véridiques et exactes.
                    </p>
                    <p>
                        Toute violation des obligations respectives des parties pourra entraîner la résiliation immédiate du contrat sans préjudice de tout dommage et intérêt que Zilin Moulin pourrait
                        réclamer en compensation des préjudices subis.
                    </p>
                </div>
                <div className="legalNotice__modification">
                    <h2>Modification et annulation</h2>
                    <p>
                        En cas d'annulation de la prestation de services par le client, celui-ci doit en informer Zilin Moulin par écrit dans les meilleurs délais. Tout acompte versé sera alors
                        conservé par Zilin Moulin en dédommagement des frais engagés. En cas de modification de la prestation de services, le client doit en informer Zilin Moulin par écrit dans les
                        meilleurs délais. Zilin Moulin s'efforcera d'accepter la modification si elle est techniquement possible. Toutefois, Zilin Moulin se réserve le droit de facturer au client les
                        frais supplémentaires liés à cette modification.
                    </p>
                </div>
                <div className="legalNotice__urgentes">
                    <h2>Tâches urgentes et/ou non prévues</h2>
                    <p>
                        Des frais supplémentaires peuvent être facturés pour les tâches urgentes et/ou non prévues. Les tâches considérées comme urgentes sont celles qui doivent être réalisées dans un
                        délai inférieur à ce qui était convenu ou pendant des heures en dehors des heures de travail habituelles mentionnées dans les présentes CGV. Toutefois, avant de facturer des
                        frais supplémentaires, Zilin Moulin informera le client de ces coûts supplémentaires et obtiendra l'accord du client avant de procéder à tout travail supplémentaire.
                    </p>
                </div>
                <div className="legalNotice__contact">
                    <h2>Contact</h2>
                    <p>
                        Les clients peuvent contacter Zilin Moulin pour toute demande de renseignements ou de support technique du lundi au vendredi de 13h00 à 00h00, sauf les jours fériés. Les
                        demandes reçues en dehors de ces horaires seront traitées dès le jour ouvrable suivant.
                    </p>
                </div>
                <div className="legalNotice__litiges">
                    <h2>Résolution des litiges</h2>
                    <p>
                        Tout litige découlant des prestations de service sera régi par les lois françaises et les parties conviennent de soumettre tout litige à la juridiction des tribunaux français
                        compétents.
                    </p>
                </div>
                <div className="legalNotice__annexes">
                    <h2>Annexes</h2>
                    <p>Les annexes, incluant le contrat et le devis, font partie intégrante des présentes CGV et sont soumises aux mêmes dispositions en matière de validité et d'exécution.</p>
                </div>
            </main>
            <RedirectTopPage anchor="topTermsAndConditions" />
            <Footer />
        </div>
    )
}

export default TermsAndConditions
