import { resume } from "../../data/resume";
import Section from "../layout/Section";

function TagRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-4)",
          paddingTop: 4,
          minWidth: 58,
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {resume.projects.map((p, idx) => (
          <article
            className={`card fade-up fade-up-${Math.min(idx + 1, 5)}`}
            key={p.name}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.name}
              </h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--rose)",
                    border: "1px solid var(--rose-border)",
                    borderRadius: 999,
                    padding: "4px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    whiteSpace: "nowrap",
                  }}
                >
                  View →
                </a>
              )}
            </div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--ink-2)",
              }}
            >
              {p.summary}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <TagRow label="Domains" items={p.domains} />
              {p.tools?.length ? (
                <TagRow label="Tools" items={p.tools} />
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
