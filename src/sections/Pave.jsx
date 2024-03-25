import { NotificationBadge } from "../components/NoficationBadge";
import ListItem, { ListParent } from "../components/ListItem";
import SectionWrapper from "../utils/SectionWrapper";

const notificationBadgesItem = [
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Easily Manage and Access with Our Mobile App",
        className: "top-8 right-[-100px] lg:top-14 lg:right-[-20px] mb-10",
    },
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Enhanced Security Infrastructure",
        className: "top-20 right-[-80px] lg:top-40 lg:right-[-10px] mb-10",
    },
];

function Pave() {
    return (
        <SectionWrapper>
            <div className="bg-primary-dark-300">
                <div className="py-10 px-2 mx-10 flex flex-col gap-5 lg:flex-row lg:justify-center lg:items-center">
                    <div className="relative w-full lg:w-1/2">
                        <img src="./assets/image/person.png" alt="person" className="p-5 mb-5 mx-auto w-max lg:w-2/3 h-max" />

                        {notificationBadgesItem.map((badge, index) => (
                            <NotificationBadge key={index} imgSrc={badge.imgSrc} text={badge.text} className={badge.className} />
                        ))}
                    </div>

                    <div className="px-2 w-full lg:w-1/3">
                        <h3>
                            Pave your path to <br className="lg:hidden" />
                            triumph with XB <br className="lg:hidden" />
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

                        <a href="/" className="py-4 px-6 bg-transparent hover:bg-primary-brand hover:text-white transition-all border rounded-full border-primary-brand text-primary-brand">
                            More About Us
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Pave;
