import { resume } from '../../data/resume';
import Section from '../layout/Section';

export default function Education() {
    return (
        <Section title="Education" id="education">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {resume.education.map((e, idx) => (
                    <article className={`card fade-up fade-up-${idx + 1}`} key={`${e.school}-${idx}`}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                            <h3 style={{ margin: 0, fontSize: 16, fontFamily: "'DM Serif Display', serif", fontWeight: 400, color: 'var(--ink)' }}>
                                {e.school}
                            </h3>
                            {e.end && (
                                <span style={{ fontSize: 13, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
                                    Expected {e.end}
                                </span>
                            )}
                        </div>
                        <div style={{ fontSize: 14, color: 'var(--rose)', fontWeight: 500, marginTop: 4 }}>
                            {e.degree}
                        </div>
                        {e.notes?.length ? (
                            <ul style={{ margin: '10px 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, lineHeight: 1.5, color: 'var(--ink-2)' }}>
                                {e.notes.map((n, i) => <li key={i}>{n}</li>)}
                            </ul>
                        ) : null}
                    </article>
                ))}
            </div>
        </Section>
    );
}
