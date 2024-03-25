import SectionWrapper from "../utils/SectionWrapper";
import { NotificationBadge, notificationBadgesItem } from "../components/NoficationBadge";

function Embark() {
    return (
        <SectionWrapper>
            <div className="relative py-10 px-2 m-10  flex gap-5 flex-col lg:flex-row lg:justify-center lg:items-center ">
                <div className="lg:relative w-full lg:w-1/2 mb-10">
                    <img src="./assets/image/computer.png" alt="computer" className="w-max h-max lg:w-2/3 mx-auto" />
                    {notificationBadgesItem.map((badge, index) => (
                        <NotificationBadge key={index} imgSrc={badge.imgSrc} text={badge.text} className={badge.className} />
                    ))}
                </div>

                <div className="w-full lg:w-1/3">
                    <p className="text-primary-brand lg:text-2xl mb-2">About Us</p>
                    <h3 className="mb-10">
                        Embark on Your <br />
                        Digital
                    </h3>
                    <p className="text-gray-400 mb-10 lg:my-10">FramerBite offers the key components to build a professional-grade website for your SaaS, a fact well-known to readers familiar with the industry.</p>
                    <a href="/" className="w-max py-4 px-6 bg-transparent hover:bg-primary-brand hover:text-white transition-all border rounded-full border-primary-brand text-primary-brand">
                        More About Us
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Embark;
