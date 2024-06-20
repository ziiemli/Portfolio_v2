import React from "react"
import {Link} from "react-router-dom"

const Logo = () => {
    return (
        <div>
            <Link to="/home">
                <picture className="HeaderLogo">
                  {/* <source
                    media="(min-width: 996px)"
                    srcSet={`${process.env.PUBLIC_URL}/assets/Logo_Desktop.svg`}
                  /> */}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/Logo.svg`}
                    alt="Logo of Ziiemli"
                    loading="lazy"
                  />
                </picture >
            </Link>
        </div>
    )
}

export default Logo
