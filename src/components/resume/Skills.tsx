import { resume } from '../../data/resume';
import Section from '../layout/Section';

export default function Skills() {
    const { domains, tools, languages } = resume.skills;

    // Deduplicate tools
    const uniqueTools = [...new Set(tools)];

    return (
        <Section title="Skills" id="skills">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 14,
            }}>
                <article className="card fade-up fade-up-1">
                    <h3 style={cardTitleStyle}>Security Domains</h3>
                    <ul style={listStyle}>
                        {domains.map(d => (
                            <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.5 }}>
                                <span style={{ color: 'var(--rose)', fontSize: 9, marginTop: 5, flexShrink: 0 }}>◆</span>
                                {d}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="card fade-up fade-up-2">
                    <h3 style={cardTitleStyle}>Tools & Platforms</h3>
                    <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                        {uniqueTools.map(t => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                </article>

                <article className="card fade-up fade-up-3">
                    <h3 style={cardTitleStyle}>Languages</h3>
                    <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                        {languages.map(l => (
                            <span key={l} className="tag tag-rose">{l}</span>
                        ))}
                    </div>
                </article>
            </div>
        </Section>
    );
}

const cardTitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    fontFamily: "'DM Sans', sans-serif",
};

const listStyle: React.CSSProperties = {
    margin: '10px 0 0',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
};
