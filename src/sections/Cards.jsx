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
    {
        title: "Global Visa and Mastecard",
        iconSrc: "./assets/icon/card.png",
        description: "FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools",
        imageSrc: "./assets/image-card/image-card-3.png",
    },
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
            <div className="p-2 lg:px-10 m-10">
                <h2 className="font-bold text-3xl lg:text-4xl text-white text-start">
                    We're here to <span className="text-primary-brand">assist</span> <br className="" />
                    you in creating, managing
                </h2>

                <div className="my-10 flex flex-col lg:flex-row lg:justify-center gap-10">
                    {cardsItem.map((card, index) => (
                        <CardItem key={index} title={card.title} iconSrc={card.iconSrc} description={card.description} imageSrc={card.imageSrc} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Cards;
