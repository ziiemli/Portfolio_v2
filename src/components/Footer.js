import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
                <Link to="/LegalNotice">
                    Legal Notice
                </Link>
                <Link to="/PrivacyPolicy">
                    Privacy Policy
                </Link>
                <Link to="/TermsAndConditions">
                    Terms and Conditions
                </Link>
        </footer>
    )
}

export default Footer
