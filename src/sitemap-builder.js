import {generateSitemap} from "react-sitemap-generator"
import Routes from "./App"

generateSitemap({
    url: "https://example.org",
    routes: [Routes],
})