import Contact from "../components/elements/Contact";
import Home from "../components/elements/Home";
import Portfolio from "../components/elements/Portfolio";
import Skills from "../components/elements/Skills";
import Timeline from "../components/elements/Timeline";
// import News from "../components/elements/News";
// import Price from "../components/elements/Price";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Index() {
    return (
        <div id="opened">
            <div
                className="kura_tm_all_wrap"
                data-color="orange"
            >
                <div id="preloader">
                    <div className="loader_line"></div>
                </div>

                <Header />

                <Home />

                <Portfolio />

                <Skills />

                <Timeline />

                {/* <Price />

                <News /> */}

                <Contact />

                <Footer />

                <audio id="audio1">
                    <source src="/audio/1.mp3" />
                </audio>
                <audio id="audio2">
                    <source src="/audio/2.mp3" />
                </audio>

                <div className="mouse-cursor cursor-outer"></div>
                <div className="mouse-cursor cursor-inner"></div>
            </div>
        </div>
    );
}
