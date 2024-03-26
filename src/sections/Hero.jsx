import MarqueeWrapper from "../utils/Marquee.jsx";

// Image Data
const companyImages = ["./assets/company/company-1.png", "./assets/company/company-2.png", "./assets/company/company-3.png", "./assets/company/company-4.png", "./assets/company/company-5.png", "./assets/company/company-6.png", "./assets/company/company-1.png", "./assets/company/company-2.png", "./assets/company/company-3.png", "./assets/company/company-4.png", "./assets/company/company-5.png", "./assets/company/company-6.png"];

function CompanyListItem({ image }) {
    return (
        <li className="flex-shrink-0 mx-2 bg-white rounded-md py-5 px-6 hover:outline hover:cursor-pointer hover:outline-primary-brand">
            <img src={image} className="w-max h-max lg:h-8 mx-auto" alt="Company Logo" />
        </li>
    );
}

function Hero() {
    return (
        <div className="relative overflow-hidden">
            <div className="mt-24 lg:pt-30 min-h-screen">
                <div className="max-w-7xl mx-auto py-16 px-4 min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
                    <img src="./assets/hero/hero-image.png" alt="hero-image" className="w-full lg:hidden mx-auto" />

                    <h1 className="hidden lg:block text-center text-white font-bold lg:text-8xl">
                        Intelligent Tools <br />
                        for Savvy Businesses
                    </h1>

                    <p className="text-primary-gray my-5 text-center lg:text-2xl">
                        FramerBite provides the essential elements <br />
                        for crafting a top-tier website for your SaaS platform.
                    </p>

                    <div className="mx-auto w-max my-10">
                        <div className="flex justify-center items-center mb-3">
                            <img src="./assets/person/photo-1.png" alt="image" className="lg:w-1/3 " />
                            <img src="./assets/person/photo.png" alt="image" className="lg:w-1/3 mx-[-10px]" />
                            <img src="./assets/icon/plus-icon.png" alt="image" className="lg:w-1/3 " />
                        </div>
                        <p className="text-gray-600 my-3">
                            <span className="text-primary-gray mx-1">3.2m</span>Success clients
                        </p>
                        <a className="block py-4 px-5 rounded-full bg-primary-brand opacity-90 hover:opacity-100 transition-all hover:cursor-pointer text-white my-2">Get Started Now</a>
                    </div>
                </div>
                <div className="w-full">
                    <h4 className="mx-10 font-semibold text-white text-center text-xl lg:text-3xl mb-5">
                        Join over 55,000 <br className="hidden lg:hidden" />
                        businesses that have <br className="block " />
                        achieved their goals.
                    </h4>

                    <MarqueeWrapper>
                        <div className="overflow-hidden w-full mx-auto py-5">
                            <ul className="py-3 inline-flex space-x-4 max-w-full items-center">
                                {companyImages.map((image, key) => {
                                    return <CompanyListItem key={key} image={image} />;
                                })}
                            </ul>
                        </div>
                    </MarqueeWrapper>

                    <MarqueeWrapper direction="right">
                        <div className="overflow-hidden w-full mx-auto py-5">
                            <ul className="py-3 inline-flex space-x-4 max-w-full items-center">
                                {companyImages.map((image, index) => {
                                    return <CompanyListItem key={index} image={image} />;
                                })}
                            </ul>
                        </div>
                    </MarqueeWrapper>
                </div>
                <img src="./assets/image/background.png" alt="well" className="absolute w-full h-96 lg:h-auto lg:w-2/3 opacity-25 top-0 right-[-200px] lg:top-[-160px] lg:right-[-300px]  lg:opacity-50 z-[-1]" />
            </div>
        </div>
    );
}

export default Hero;
