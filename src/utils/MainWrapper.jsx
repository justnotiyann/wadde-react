function MainWrapper({ children, className }) {
    return <div className={` ${className}`}>{children}</div>;
}

export default MainWrapper;
