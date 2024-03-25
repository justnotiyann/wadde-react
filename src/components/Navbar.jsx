import { useState } from "react";

const itemsMenu = ["About", "Services", "Pricing", "Contact"];

function ListItem({ children, active = false }) {
    return (
        <li className="mr-3">
            <a href="/" className={`${active ? "text-white" : "inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"} py-2 px-4 `}>
                {children}
            </a>
        </li>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav
                className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0 bg-primary-dark-300"
                onKeyDown={(e) => {
                    if (e.key === "Escape") return setIsOpen(false);
                }}
            >
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="/" className="text-white no-underline hover:text-white hover:no-underline">
                        <img src="./assets/header/ipsum.png" alt="logo" className="w-max h-max" />
                    </a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} type="button" className={`block lg:hidden transition-all px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white ${isOpen ? "transform rotate-180" : ""}`}>
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path style={{ display: isOpen ? "block" : "none" }} fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        <path style={{ display: !isOpen ? "block" : "none" }} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>

                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)}>
                    <ul className="pt-6 lg:pt-0 list-reset lg:flex justify-center flex-1 items-center">
                        <ListItem active={true}>Home</ListItem>
                        {itemsMenu.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </ul>

                    <a href="/" className="mx-5 inline-block text-primary-brand rounded-full border border-primary-brand hover:bg-primary-brand hover:text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" onClick={() => setIsOpen(false)}>
                        Sign In
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
