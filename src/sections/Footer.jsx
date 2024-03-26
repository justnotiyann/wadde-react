function Footer() {
    return (
        <div>
            <div>
                <div className="bg-primary-dark-400">
                    <div className="p-10">
                        <ul className="flex flex-col lg:flex-row lg:justify-evenly gap-10 text-primary-gray mb-20">
                            <li>
                                <img src="./assets/header/Logo.png" alt="logo" className="w-max h-max mb-5" />
                                <p className="my-5">
                                    XB gives you the blocks needed to create
                                    <br className="hidden lg:block" />a truly professional website for your SaaS.
                                </p>
                            </li>

                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <p className="text-lg text-white">Solutions</p>
                                    </li>
                                    <li>Freelancer</li>
                                    <li>Data Analytics</li>
                                    <li>Small Business</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <p className="text-lg text-white">Company</p>
                                    </li>
                                    <li>About</li>
                                    <li>Career</li>
                                    <li>Contact</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <p className="text-lg text-white">Resources</p>
                                    </li>
                                    <li>Customers</li>
                                    <li>Strategic Finance</li>
                                    <li>Ebooks & Guides</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <p className="text-lg text-white">Features</p>
                                    </li>
                                    <li>Freelancer</li>
                                    <li>Data Analytics</li>
                                    <li>Small Business</li>
                                </ul>
                            </li>
                        </ul>

                        <p className="text-sm lg:text-md text-primary-gray lg:text-start">Copyright © 2023 All Rights Reserved by XB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
