import {useEffect, useState} from "react"
import Fetch from "../components/Fetch"

const RecoverDataPageCategory = () => {
    const [dataCategory, setDataCategory] = useState(null)
    const [errorCategory, setErrorCategory] = useState(null)

    //querystring
    const querystring = window.location.pathname.split("/").join("")

    //data
    const {data, error} = Fetch()
    useEffect(() => {
        if (error) {
            setErrorCategory(error)
        }
    }, [error])

    //data Home
    const homeData = data && data.home

    //find good Data for CategoriesTitle
    const recoverData = homeData && querystring && homeData.find((el) => el.nav === querystring)

    useEffect(() => {
        if (recoverData) {
            setDataCategory(recoverData)
        }
    }, [recoverData])

    return {dataCategory, errorCategory}
}

export default RecoverDataPageCategory
