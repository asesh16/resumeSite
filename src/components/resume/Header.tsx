import { resume } from '../../data/resume';

function Header() {
    return (
        <header style={{ paddingBottom: 32 }} className="fade-up">
            {/* Eyebrow */}
            <p style={{
                margin: '0 0 10px',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--rose)',
            }}>
                Cybersecurity Professional
            </p>

            {/* Name */}
            <h1 style={{
                margin: '0 0 12px',
                fontSize: 'clamp(36px, 6vw, 52px)',
                color: 'var(--ink)',
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
            }}>
                {resume.name}
            </h1>

            {/* Headline */}
            <p style={{
                margin: '0 0 18px',
                fontSize: 16,
                color: 'var(--ink-2)',
                maxWidth: '56ch',
                lineHeight: 1.55,
                fontWeight: 300,
            }}>
                {resume.headline}
            </p>

            {/* Meta row */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px 18px',
                fontSize: 13,
                color: 'var(--ink-3)',
                alignItems: 'center',
            }}>
                {resume.location && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {resume.location}
                    </span>
                )}
                {resume.email && (
                    <a href={`mailto:${resume.email}`} style={{ color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        {resume.email}
                    </a>
                )}
                {resume.links.linkedin && (
                    <a href={resume.links.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        LinkedIn
                    </a>
                )}
                {resume.links.github && (
                    <a href={resume.links.github} target="_blank" rel="noreferrer" style={{ color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        GitHub
                    </a>
                )}
            </div>
        </header>
    );
}

export default Header;
