import { NotificationBadge } from "../components/NoficationBadge";
import ListItem, { ListParent } from "../components/ListItem";
import SectionWrapper from "../utils/SectionWrapper";

const notificationBadgesItem = [
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Easily Manage and Access with Our Mobile App",
        className: "top-8 right-[-100px] lg:top-2 lg:right-[-20px] mb-10",
    },
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Enhanced Security Infrastructure",
        className: "top-20 right-[-80px] lg:top-24 lg:right-[-10px] mb-10",
    },
];

function Pave() {
    return (
        <SectionWrapper>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
                <div className="relative w-full lg:w-1/2">
                    <img src="./assets/image/person.png" alt="person" className="w-max h-max lg:w-[472px] mx-auto" />

                    {notificationBadgesItem.map((badge, index) => (
                        <NotificationBadge key={index} imgSrc={badge.imgSrc} text={badge.text} className={badge.className} />
                    ))}
                </div>

                <div className="w-full lg:w-1/3">
                    <h3>
                        Pave your path to <br />
                        triumph with XB <br />
                        innovation.
                    </h3>

                    <p className="text-gray-400 my-5 lg:my-10">
                        X equips you with the essential tools to craft a <br />
                        genuinely professional SaaS website.
                    </p>

                    <ListParent>
                        <ListItem text="Effortless Browsing" />
                        <ListItem text=" Secure Top 5% Industry Experts" />
                        <ListItem text="Secure Transaction Platform" />
                    </ListParent>

                    <a href="/" className="py-4 px-6 bg-primary-brand text-white border rounded-full border-primary-brand ">
                        More About Us
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Pave;
