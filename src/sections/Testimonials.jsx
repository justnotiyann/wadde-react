import React, { useState } from "react";
import SectionWrapper from "../utils/SectionWrapper";

// Tabs Item
function TabItem({ active, onClick, imgSrc, name, position }) {
    return (
        <div className={`lg:w-1/2 h-14 lg:h-16 flex justify-evenly items-center gap-x-2 hover:cursor-pointer rounded-full py-2 px-5 text-md ${active ? "active-tab bg-primary-dark-100" : ""}`} onClick={onClick}>
            <img src={imgSrc} alt={name} className="w-max h-max" />
            <div>
                <p className="text-white lg:text-lg">{name}</p>
                <p className="text-primary-gray lg:text-md">{position}</p>
            </div>
        </div>
    );
}

// Tabs
function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabItemsData = [
        {
            active: activeTab === 0,
            onClick: () => setActiveTab(0),
            imgSrc: "./assets/person/Male04.png",
            name: "Catherine Bennett",
            position: "Founder, Creative",
        },
        {
            active: activeTab === 1,
            onClick: () => setActiveTab(1),
            imgSrc: "./assets/person/Female03.png",
            name: "Tony Danza",
            position: "Designer at Google",
        },
        {
            active: activeTab === 3,
            onClick: () => setActiveTab(3),
            imgSrc: "./assets/person/photo-1.png",
            name: "Marza Danza",
            position: "Designer at Figma",
        },
    ];

    return (
        <div>
            {/* Tab List */}
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:items-center ">
                {tabItemsData.map((tab, index) => (
                    <TabItem key={index} active={tab.active} onClick={tab.onClick} imgSrc={tab.imgSrc} name={tab.name} position={tab.position} />
                ))}
            </div>

            <div className="mt-24">
                {/* Tab Content */}
                {activeTab === 0 && (
                    <h5 className="font-bold text-xl lg:text-5xl lg:text-center text-white mt-10 leading-loose">
                        <span>"</span>
                        Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics,
                        <span className="text-primary-gray">enabling us to implement informed</span>
                        <span>"</span>
                    </h5>
                )}

                {activeTab === 1 && (
                    <h5 className="font-bold text-xl lg:text-5xl lg:text-center text-white mt-10 leading-loose">
                        <span>"</span>
                        Dolor, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics,
                        <span className="text-primary-gray">enabling us to implement informed</span>
                        <span>"</span>
                    </h5>
                )}
                {activeTab === 3 && (
                    <h5 className="font-bold text-xl lg:text-5xl lg:text-center text-white mt-10 leading-loose">
                        <span>"</span>
                        Dolor, the outcome siamt all ss anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics,
                        <span className="text-primary-gray">enabling us to implement informed</span>
                        <span>"</span>
                    </h5>
                )}
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <SectionWrapper>
            <div className="py-10 px-2 m-10 lg:my-14 overflow-hidden">
                <Tabs />
            </div>
        </SectionWrapper>
    );
}

export default Testimonials;
