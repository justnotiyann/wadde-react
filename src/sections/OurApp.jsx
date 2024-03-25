import ListItem, { ListParent } from "../components/ListItem";

function OurApp() {
    return (
        <div>
            <div className="bg-primary-dark-400">
                <div className="py-10 px-2 mx-10 flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <img src="./assets/image/iphone.png" alt="iphone" className="p-5 mb-5 mx-auto w-max lg:w-2/3 h-max" />
                    </div>

                    <div className="w-full lg:w-1/3 order-2 lg:order-1">
                        <h3 className="mb-5">
                            Download our <br className="lg:hidden" />
                            mobile app
                        </h3>

                        <p className="text-primary-gray lg:my-5">X equips you with the essential tools to craft a genuinely professional SaaS website.</p>

                        <ListParent>
                            <ListItem text="Effortless Browsing" />
                            <ListItem text=" Secure Top 5% Industry Experts" />
                            <ListItem text="Secure Transaction Platform" />
                        </ListParent>

                        <div className="w-max lg:w-full mx-auto lg:mx-0 flex lg:justify-start items-center gap-5">
                            <a href="/" className="lg:w-1/4 ">
                                <img src="./assets/google-play/app-store.png" alt="app-store" className="w-full" />
                            </a>
                            <a href="/" className="lg:w-1/4 ">
                                <img src="./assets/google-play/google-play.png" alt="google-play" className="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurApp;
