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
        <div className="w-full lg:w-1/2 p-5  text-center">
            <h5 className="text-primary-blue font-bold text-6xl mb-5">{number}</h5>
            <div className="flex justify-center items-center gap-x-2">
                <img src={iconSrc} alt={description} />
                <p className="text-primary-gray">{description}</p>
            </div>
        </div>
    );
}

function Numbers() {
    return (
        <div>
            <div className="py-10 px-2 lg:p-10 lg:my-14 m-10">
                <div>
                    {cardNumberItems.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col lg:flex-row justify-center items-center gap-5">
                            {row.map((item, itemIndex) => (
                                <CardNumber key={itemIndex} number={item.number} iconSrc={item.icon} description={item.description} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Numbers;
