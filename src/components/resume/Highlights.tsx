import { resume } from '../../data/resume';

export default function Highlights() {
    return (
        <div className="highlights fade-up fade-up-1">
            <p className="highlights-title">Key Highlights</p>
            <ul className="highlights-list">
                {resume.highlights.map((h, i) => (
                    <li key={i} className="highlights-item">{h}</li>
                ))}
            </ul>
        </div>
    );
}
