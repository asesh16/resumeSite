import hiking    from '../../assets/beyondWork/backpacking.jpg';
import trout     from '../../assets/beyondWork/golden_trout.jpg';
import golf      from '../../assets/beyondWork/golf_florida.jpg';
import archery   from '../../assets/beyondWork/mountain_archery.jpg';
import flyfish   from '../../assets/beyondWork/alpine_flyfish.jpg';
import Section   from '../layout/Section';

const photos = [
    { src: archery,  alt: 'Bow hunting in the mountains' },
    { src: hiking,   alt: 'Backpacking in the backcountry' },
    { src: flyfish,  alt: 'Alpine fly fishing' },
    { src: trout,    alt: 'Golden trout catch' },
    { src: golf,     alt: 'Golfing in Florida at sunset' },
];

export default function BeyondWork() {
    return (
        <Section title="Beyond Work" id="beyond-work">
            <p style={{
                margin: '0 0 4px',
                fontSize: 14,
                color: 'var(--ink-2)',
                lineHeight: 1.6,
                maxWidth: '60ch',
            }}>
                When I'm not in front of a terminal, I am outside. I love bow hunting, shed hunting,
                fly fishing alpine lakes, ice fishing, backpacking, golfing, and chasing new adventures.   
            </p>

            <div className="photoGrid">
                {photos.map((p, i) => (
                    <img
                        key={p.src}
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className={`photoTile fade-up fade-up-${Math.min(i + 1, 5)}`}
                        title={p.alt}
                    />
                ))}
            </div>
        </Section>
    );
}
