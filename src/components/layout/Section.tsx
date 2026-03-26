type SectionProps = {
    title: string;
    children: React.ReactNode;
    id?: string;
};

function Section({ title, children, id }: SectionProps) {
    return (
        <section className="section" id={id}>
            <div className="sectionLabel">
                <h2 className="sectionTitle">{title}</h2>
                <div className="sectionLabel-line" />
            </div>
            <div>{children}</div>
        </section>
    );
}

export default Section;
