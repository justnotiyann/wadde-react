import Navbar from "./components/Navbar";
import { Cards, ContactUs, Embark, Footer, Hero, Numbers, OurApp, Pave, Testimonials } from "./sections";
import MainWrapper from "./utils/MainWrapper";

function App() {
    return (
        <>
            <Navbar />

            <MainWrapper>
                <Hero />
                <Cards />
                <Embark />
                <Testimonials />
                <Numbers />
                <Pave />
                <OurApp />
                <ContactUs />
            </MainWrapper>

            <Footer />
        </>
    );
}

export default App;
