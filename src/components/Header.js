import React from "react"
import Logo from "./Logo"
import Menu from "./Menu"

const Header = ({fixed}) => {
    return (
        <header className={fixed}>
            <Logo/>
            <Menu />
        </header>
    )
}

export default Header
