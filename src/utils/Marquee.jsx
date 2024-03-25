import Marquee from "react-fast-marquee";

function MarqueeWrapper({ children, ...props }) {
    return (
        <Marquee pauseOnHover={true} {...props}>
            {children}
        </Marquee>
    );
}

export default MarqueeWrapper;
