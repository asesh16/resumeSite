import { useEffect, useState } from 'react';

const links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Education',  href: '#education'  },
    { label: 'Skills',     href: '#skills'     },
    { label: 'SheTech',    href: '#shetech'    },
    { label: 'Beyond Work',href: '#beyond-work'},
];

function Navbar() {
    const [active, setActive] = useState('');

    useEffect(() => {
        const ids = links.map(l => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-30% 0px -60% 0px' }
        );
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav">
            <div className="navInner">
                <span className="navName">Amy Sessions</span>
                {links.map((l) => (
                    <a
                        key={l.href}
                        className={`navLink${active === l.href.slice(1) ? ' active' : ''}`}
                        href={l.href}
                    >
                        {l.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
