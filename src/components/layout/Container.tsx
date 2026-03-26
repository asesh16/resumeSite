type ContainerProps = { children: React.ReactNode };

function Container({ children }: ContainerProps) {
    return (
        <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 40 }}>
            <div className="container">{children}</div>
        </div>
    );
}

export default Container;
