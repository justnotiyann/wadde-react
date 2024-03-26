import SectionWrapper from "../utils/SectionWrapper";

const cardsItem = [
    {
        title: "Investment Fund",
        iconSrc: "./assets/icon/calc.png",
        description: "FramerBite delivers the essential components to build a polished and professional website for your SaaS business.",
        imageSrc: "./assets/image-card/image-card-2.png",
    },
    {
        title: "Retirement Plan",
        iconSrc: "./assets/icon/layer.png",
        description: "FramerBite offers the essential building blocks for developing a sophisticated website for your SaaS, a well-established fact recognized by numerous desktop publishing packages and web page editors.",
        imageSrc: "./assets/image-card/image-card-1.png",
    },
    // {
    //     title: "Global Visa and Mastecard",
    //     iconSrc: "./assets/icon/card.png",
    //     description: "FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools",
    //     imageSrc: "./assets/image-card/image-card-3.png",
    // },
];

function CardItem({ title, iconSrc, description, imageSrc }) {
    return (
        <div className="w-full lg:w-1/3 h-62 flex flex-col justify-between bg-primary-dark-100 text-white rounded-lg">
            <div className="p-6 mb-5">
                <div className="flex justify-between items-center mb-10 border-b pb-8 border-dashed border-primary-gray">
                    <h5 className="text-white font-bold text-xl lg:text-3xl">{title}</h5>
                    <img src={iconSrc} alt={title} />
                </div>
                <p className="my-5 text-primary-gray lg:text-lg">{description}</p>
            </div>
            <img src={imageSrc} alt="image-card" className="mx-auto w-max lg:w-2/3 lg:h-36" />
        </div>
    );
}

function Cards() {
    return (
        <SectionWrapper>
            <h2 className="font-bold text-3xl lg:text-6xl text-white text-start  mb-16">
                We're here to <span className="text-primary-brand">assist</span> <br className="" />
                you in creating, managing
            </h2>

            <div className="flex flex-col gap-5">
                {/* {cardsItem.map((card, index) => (
                        <CardItem key={index} title={card.title} iconSrc={card.iconSrc} description={card.description} imageSrc={card.imageSrc} />
                    ))} */}

                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                    <div className="w-full lg:w-1/2 h-max lg:h-[458px] overflow-hidden flex flex-col bg-primary-dark-100 text-white rounded-lg">
                        <div className="p-6 mb-10 grow">
                            <div className="flex justify-between items-center mb-5 border-b pb-8 border-dashed border-primary-gray">
                                <h5 className="text-white font-bold text-2xl lg:text-3xl">Investment Fund</h5>
                                <img src="./assets/icon/card/calc.png" alt="Global Icon" className="w-10 lg:w-max" />
                            </div>
                            <p className="text-primary-gray lg:text-lg">FramerBite delivers the essential components to build a polished and professional website for your SaaS business.</p>
                        </div>
                        <div className="px-6">
                            <img src="./assets/image-card/image-card-1.png" alt="image-card" className="mx-auto w-max/ " />
                        </div>
                    </div>
                    ``
                    <div className="w-full lg:w-1/2 h-max lg:h-[458px] overflow-hidden flex flex-col justify-between bg-primary-dark-100 text-white rounded-lg">
                        <div className="p-6 mb-5">
                            <div className="flex justify-between items-center mb-10 border-b pb-8 border-dashed border-primary-gray">
                                <h5 className="text-white font-bold text-2xl lg:text-3xl">Retirement Plan</h5>
                                <img src="./assets/icon/card/layer.png" alt="Global Icon" className="w-10 lg:w-max" />
                            </div>
                            <p className="my-5 text-primary-gray lg:text-lg">FramerBite offers the essential building blocks for developing a sophisticated website for your SaaS, a well-established fact recognized by numerous desktop publishing packages and web page editors.</p>
                        </div>
                        <div className="px-6 flex">
                            <img src="./assets/image-card/image-card-2.png" alt="image-card" className="mx-auto w-max " />
                            <img src="./assets/image-card/image-card-3.png" alt="image-card" className="mx-auto w-max hidden lg:block" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-max lg:w-full mx-auto p-6 mb-5 h-62 flex flex-col gap-10 lg:flex-row justify-between bg-primary-dark-100 text-white rounded-lg">
                    <div className="w-full lg:w-1/2">
                        <img src="./assets/icon/card/card.png" alt="image-card-3" className="w-10 lg:w-max" />
                        <h5 className="text-white font-bold text-2xl lg:text-3xl my-5 lg:my-10">
                            Global Visa and Mastercard <br /> with Multi-Currency <br /> Support
                        </h5>
                        <p className="my-5 text-primary-gray lg:text-lg">FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-6">
                        <img src="./assets/image-card/image-card-4.png" alt="image-card" className="mx-auto w-max lg:mt-10" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Cards;
