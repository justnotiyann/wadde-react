const notificationBadgesItem = [
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Easily Manage and Access with Our Mobile App",
        className: "top-24 right-[-70px] lg:top-14 lg:right-[-40px] mb-10",
    },
    {
        imgSrc: "./assets/icon/check-full.png",
        text: "Enhanced Security Infrastructure",
        className: "top-36 right-[-80px] lg:top-[150px] lg:right-[-50px] mb-10",
    },
];

function NotificationBadge({ imgSrc, text, className }) {
    return (
        <div className={`w-max py-2 px-6 lg:py-5 lg:px-6 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex items-center gap-x-2 text-white text-xs lg:text-lg absolute ${className}`}>
            <img src={imgSrc} alt="checked-blue" />
            <p>{text}</p>
        </div>
    );
}

function LoopNotification() {
    return (
        <>
            {notificationBadgesItem.map((badge, index) => (
                <NotificationBadge key={index} imgSrc={badge.imgSrc} text={badge.text} styles={badge.styles} className={badge.className} />
            ))}
        </>
    );
}

export { NotificationBadge, LoopNotification, notificationBadgesItem };
