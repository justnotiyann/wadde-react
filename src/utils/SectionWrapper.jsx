function SectionWrapper({ children, ...props }) {
    return (
        <div className="my-32" {...props}>
            {children}
        </div>
    );
}

export default SectionWrapper;
