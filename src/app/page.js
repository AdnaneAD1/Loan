import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Calculator from "@/components/sections/home1/Calculator"
import Video from "@/components/sections/home1/Video"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import App from "@/components/sections/home1/App"
import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Calculator />
                <Video />
                <Funfacts />
                <App />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}
