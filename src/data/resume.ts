export type Resume = {
  name: string;
  headline: string;
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
  };
  highlights: string[];
  experience: Array<{
    company: string;
    title: string;
    start: string;
    end: string;
    location: string;
    bullets: string[];
  }>;
  projects: Array<{
    name: string;
    summary: string;
    domains: string[];
    tools?: string[];
    link?: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    start?: string;
    end?: string;
    notes?: string[];
  }>;
  skills: {
    languages: string[];
    tools: string[];
    domains: string[];
  };
};

export const resume: Resume = {
  name: "Amy (Sessions) Petersen",
  headline:
    "Information Security professional with experience designing compliance programs, supporting NIST-aligned assessments, and monitoring enterprise security controls in a 4.5K+ user environment",
  location: "Lehi, Utah",
  email: "amysessions16@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/amy-sessions",
    github: "",
  },

  highlights: [
    "Developed PCI DSS compliance program for a 4.5K+ user enterprise environment",
    "Participated in NIST CSF assessment planning, control scoping, and documentation",
    "Coordinated with IT, finance, and operational stakeholders to assign control ownership and track remediation",
    "Presented compliance progress and risk findings to leadership",
    "Redesigned IT support portal and knowledge base, improving employee self-service experience",
  ],

  experience: [
    {
      company: "Clyde Companies",
      title: "Cybersecurity Compliance Officer",
      start: "Aug 2025",
      end: "Present",
      location: "Lindon, UT",
      bullets: [
        "Developed PCI DSS compliance program (4.5K+ user environment), gap assessment, control mapping, remediation, audit prep",
        "Participated in NIST Cybersecurity Framework (CSF) assessment planning, control scoping, assignment, and documentation",
        "Coordinated with IT, finance, and operational stakeholders to assign control ownership and track remediation efforts",
        "Assessed organizational cybersecurity posture across NIST CSF domains to evaluate control maturity and prioritize risk remediation",
        "Presented compliance progress and risk findings to leadership; translated complex security requirements into actionable guidance",
      ],
    },
    {
      company: "Clyde Companies",
      title: "IT Support Intern",
      start: "Mar 2025",
      end: "Aug 2025",
      location: "Lindon, UT",
      bullets: [
        "Provided on-site and remote technical support for enterprise SaaS, cloud, networking, and identity systems supporting 4.5K+ users",
        "Diagnosed endpoint, application, and access-control issues and communicated clear solutions to technical and non-technical users",
        "Developed internal knowledge base documentation to improve consistency in issue resolution",
        "Redesigned IT support portal to improve usability and employee self-service, reducing friction in accessing technical resources",
      ],
    },
    {
      company: "Brigham Young University",
      title: "Information Systems Teaching Assistant",
      start: "Jan 2025",
      end: "Present",
      location: "Provo, UT",
      bullets: [
        "Instructed 3K+ students in database systems, analytics, automation, programming, advanced Excel (VBA), and SQL",
        "Mentored students through 1-on-1 office hours and technical troubleshooting to improve assignment completion and understanding",
        "Collaborated with professors to grade programming, analytics, and database assignments, ensuring consistent evaluation",
      ],
    },
  ],

  projects: [
    {
      name: "Penetration Testing",
      summary:
        "Performed penetration testing for real client, identifying system and network vulnerabilities and delivering remediation recommendations.",
      domains: ["Penetration Testing", "Vulnerability Assessment"],
      tools: ["Nmap", "Metasploit", "Nessus"],
    },
    {
      name: "IDS Alert Analysis",
      summary:
        "Built and analyzed IDS alerts using Suricata/Snort with log review and detection tuning.",
      domains: ["Network Security", "IDS/IPS", "Detection Engineering"],
      tools: ["Suricata", "Snort", "ELK Stack"],
    },
    {
      name: "Secure Web Application",
      summary:
        "Developed a secure web application using ASP.NET, React, and Azure implementing RBAC and secure coding practices.",
      domains: ["Secure Development", "Cloud", "Identity & Access"],
      tools: ["ASP.NET", "React", "Azure", "C#"],
    },
    {
      name: "AWS Cloud Infrastructure",
      summary:
        "Deployed cloud infrastructure on AWS (EC2), enabling secure hosting, database connectivity, and access control for a web application.",
      domains: ["Cloud Infrastructure", "AWS", "Secure Hosting"],
      tools: ["AWS EC2", "IAM", "RDS"],
    },
  ],

  education: [
    {
      school: "Brigham Young University – Marriott School of Business",
      degree: "B.S. Information Systems Management",
      end: "Apr 2026",
      notes: [
        "Cybersecurity Emphasis | STEM-Designated Technical Program",
        "GPA: 3.62",
        "First Place: Social Impact project for Organizational Effectiveness",
        "Coursework: Information Systems Security & Controls, Digital Forensics, Penetration Testing, Network Security, Database Systems",
      ],
    },
    {
      school: "University of Utah – David Eccles School of Business",
      degree: "M.S. Cybersecurity Management",
      start: "Fall 2026",
      notes: [],
    },
  ],

  skills: {
    domains: [
      "GRC & Compliance (PCI DSS, NIST CSF, NIST AI RMF)",
      "Risk Assessment & Control Mapping",
      "Network Security (IDS/IPS) & Traffic Analysis",
      "Identity & Access Management",
      "Cloud & Infrastructure Security",
      "Secure Web Development",
    ],
    tools: [
      "CrowdStrike",
      "Microsoft Defender",
      "Microsoft Purview",
      "Active Directory",
      "Wireshark",
      "Nmap",
      "Nessus",
      "Metasploit",
      "Suricata / Snort / Zeek",
      "ELK Stack",
      "pfSense",
      "Check Point",
      "Azure",
      "AWS (EC2, IAM, RDS)",
    ],
    languages: ["Python", "Bash", "SQL", "C#", "ASP.NET", "React"],
  },
};
