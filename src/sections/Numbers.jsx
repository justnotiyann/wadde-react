import SectionWrapper from "../utils/SectionWrapper";

const cardNumberItems = [
    [
        {
            number: "300+",
            icon: "./assets/icon/UsersThree.png",
            description: "partner with us",
        },
        {
            number: "$3.2b+",
            icon: "./assets/icon/Money.png",
            description: "Cumulative trending",
        },
        {
            number: "860k",
            icon: "./assets/icon/ProjectorScreenChart.png",
            description: "Successful projects",
        },
        {
            number: "1.6%",
            icon: "./assets/icon/Kanban.png",
            description: "Low Interest Rate",
        },
    ],
];

function CardNumber({ number, iconSrc, description }) {
    return (
        <div className="w-full text-center my-5">
            <h5 className="text-primary-blue font-bold text-6xl">{number}</h5>
            <div className="flex justify-center items-center gap-x-2">
                <img src={iconSrc} alt={description} />
                <p className="text-primary-gray lg:text-lg">{description}</p>
            </div>
        </div>
    );
}

function Numbers() {
    return (
        <SectionWrapper>
            <div className="">
                {cardNumberItems.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        {row.map((item, itemIndex) => (
                            <CardNumber key={itemIndex} number={item.number} iconSrc={item.icon} description={item.description} />
                        ))}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default Numbers;
