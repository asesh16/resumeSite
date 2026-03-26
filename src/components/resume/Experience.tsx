import { resume } from '../../data/resume';
import Section from '../layout/Section';

function formatDateRange(start: string, end: string) {
    return `${start} — ${end?.trim() || 'Present'}`;
}

export default function Experience() {
    return (
        <Section title="Experience" id="experience">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {resume.experience.map((role, idx) => (
                    <article
                        className={`card fade-up fade-up-${Math.min(idx + 1, 5)}`}
                        key={`${role.company}-${idx}`}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: 8,
                            marginBottom: 4,
                        }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: 16, color: 'var(--ink)', fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                                    {role.company}
                                </h3>
                                <div style={{ fontSize: 14, color: 'var(--rose)', fontWeight: 500, marginTop: 2 }}>
                                    {role.title}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 13, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
                                    {formatDateRange(role.start, role.end)}
                                </div>
                                {role.location && (
                                    <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>
                                        {role.location}
                                    </div>
                                )}
                            </div>
                        </div>

                        {role.bullets?.length ? (
                            <ul style={{
                                margin: '12px 0 0',
                                paddingLeft: 18,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 7,
                                fontSize: 14,
                                lineHeight: 1.6,
                                color: 'var(--ink-2)',
                            }}>
                                {role.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        ) : null}
                    </article>
                ))}
            </div>
        </Section>
    );
}
