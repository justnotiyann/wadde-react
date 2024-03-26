import { useState } from "react";
import SectionWrapper from "../utils/SectionWrapper";

const PersonCard = ({ name, role, image, onClick, active }) => {
    return (
        <div className={`w-full lg:w-[312px] flex items-center gap-x-2 rounded-full hover:cursor-pointer px-5 py-2 ${active ? "bg-primary-dark-100" : ""}`} onClick={onClick}>
            <img src={image} alt={name} className="w-max h-max" />
            <div>
                <p className="text-white lg:text-lg">{name}</p>
                <p className="text-primary-gray lg:text-md">{role}</p>
            </div>
        </div>
    );
};

function Testimonials() {
    const [activeTab, setActiveTab] = useState(0);

    const data = [
        {
            active: activeTab === 0,
            onClick: () => setActiveTab(0),
            name: "Catherine Bennett",
            role: "Founder, Creative",
            image: "./assets/person/catherine.png",
        },
        {
            active: activeTab === 1,
            onClick: () => setActiveTab(1),
            name: "Tony Danza",
            role: "Founder, Creative",
            image: "./assets/person/tony.png",
        },
        {
            active: activeTab === 2,
            onClick: () => setActiveTab(2),
            name: "Mike Torello",
            role: "Founder, Creative",
            image: "./assets/person/mike.png",
        },
    ];

    const testimonialsContent = ["Dolor, outsome. The powerful analytics and reporting features offered crucial perspectives on our business metrics,", "Dolor, the outcome siamt all ss anticipations. Poerfull analytics and reporting features offered crucial perspectives on our business metrics,", "Dolor, the outcome siamt all ss anticipations. The powerful reporting features offered crucial perspectives on our business metrics,"];

    return (
        <SectionWrapper>
            <div className="overflow-hidden flex flex-col lg:flex-row gap-5 justify-between items-start">
                <div className="overflow-scroll lg:overflow-auto w-full lg:w-1/3 flex flex-col gap-5 mb-10 ">
                    {data.map((person, index) => (
                        <PersonCard key={index} name={person.name} role={person.role} active={person.active} onClick={person.onClick} image={person.image} />
                    ))}
                </div>

                <div className="w-full lg:w-2/3">
                    <h5 className="font-bold text-xl lg:text-5xl text-white  leading-relaxed">
                        <span>"</span>
                        {testimonialsContent[activeTab]}
                        <span className="text-primary-gray">enabling us to implement informed</span>
                        <span>"</span>
                    </h5>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Testimonials;
