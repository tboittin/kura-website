import Contact from "../components/elements/Contact";
import Home from "../components/elements/Home";
import News from "../components/elements/News";
import Portfolio from "../components/elements/Portfolio";
import Price from "../components/elements/Price";
import Skills from "../components/elements/Skills";
import Timeline from "../components/elements/Timeline";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Index() {
    return (
        <div id="opened">
            <div
                class="kura_tm_all_wrap"
                data-color="orange"
            >
                <div id="preloader">
                    <div class="loader_line"></div>
                </div>

                <Header />

                <Home />

                <Portfolio />

                <Skills />

                <Timeline />

                <Price />

                <News />

                <Contact />

                <Footer />

                <audio id="audio1">
                    <source src="/audio/1.mp3" />
                </audio>
                <audio id="audio2">
                    <source src="/audio/2.mp3" />
                </audio>

                <div class="mouse-cursor cursor-outer"></div>
                <div class="mouse-cursor cursor-inner"></div>
            </div>
        </div>
    );
}
