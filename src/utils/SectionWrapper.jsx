function SectionWrapper({ children, ...props }) {
    return (
        <div className="p-10 my-14 overflow-hidden lg:overflow-visible max-w-screen-2xl mx-auto" {...props}>
            {children}
        </div>
    );
}

export default SectionWrapper;
