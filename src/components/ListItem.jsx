import React from "react";

function ListParent({ children, className }) {
    return <ul className={`text-white my-10 flex flex-col gap-5 lg:text-lg ${className}`}>{children}</ul>;
}

function ListItem({ text, iconSrc = "./assets/icon/check.png" }) {
    return (
        <li className="flex items-center gap-x-2">
            <img src={iconSrc} alt="check-icon" className="w-max h-max" />
            {text}
        </li>
    );
}

export default ListItem;
export { ListParent };
