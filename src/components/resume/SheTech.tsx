import Section from '../layout/Section';
import landingPage from '../../assets/sheTech/landingPage.png';
import profilePage from '../../assets/sheTech/profilePage.png';
import postCaption from '../../assets/sheTech/postCaption.png';
import passwordGuesser from '../../assets/sheTech/passwordGuesser.png';

const screenshots = [
    { label: 'Challenge Landing', src: landingPage },
    { label: 'Fake Social Media Profile', src: profilePage },
    { label: 'OSINT Clues', src: postCaption },
    { label: 'Password Guesser', src: passwordGuesser, objectPosition: 'center' },
];

export default function SheTech() {
    return (
        <Section title="SheTech Hacking Challenge" id="shetech">
            {/* Description card */}
            <article className="card fade-up fade-up-1" style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                        <h3 style={{
                            margin: 0,
                            fontSize: 16,
                            fontFamily: "'DM Serif Display', serif",
                            fontWeight: 400,
                            color: 'var(--ink)',
                        }}>
                            SheTech Hacking Challenge
                        </h3>
                        <div style={{ fontSize: 14, color: 'var(--rose)', fontWeight: 500, marginTop: 3 }}>
                            Challenge Designer
                        </div>
                    </div>
                    <span className="tag tag-rose" style={{ marginTop: 2 }}>CTF / Competition</span>
                </div>

                <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '68ch' }}>
                    Designed and built a hands-on hacking challenge for SheTech, a program focused on encouraging
                    women in technology. The challenge introduced participants to core cybersecurity concepts through
                    realistic, guided scenarios — combining technical depth with an accessible, beginner-friendly experience.
                </p>
            </article>

            {/* Screenshots */}
            <div className="shetech-grid">
                {screenshots.map((s) => (
                    <figure key={s.label} className="shetech-screenshot fade-up fade-up-2">
                        <img src={s.src} alt={s.label} style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined} />
                        <figcaption>{s.label}</figcaption>
                    </figure>
                ))}
            </div>
        </Section>
    );
}
