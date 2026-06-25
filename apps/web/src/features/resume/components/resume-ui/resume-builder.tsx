"use client"
import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import ResumePreview from "./ResumePreview";
import ResumeTempleteSelector from "./resume-templete-selector";

// const INIT = {
//   personal: {
//     name: "Nameet Mandwal",
//     phone: "+91 8319850260",
//     email: "thenameet0@gmail.com",
//     location: "Indore, M.P.",
//     linkedin: "LinkedIn",
//     linkedinUrl: "#",
//     github: "Github",
//     githubUrl: "#",
//     portfolio:"portfolio",
//     portfolioUrl:"#",
//     summary:
//       "Ambitious Full-Stack Developer with expertise in JavaScript, React, Redux, Node.js, and UI/UX design. Proven ability to create responsive interfaces and robust backend services. Skilled in enhancing web application performance and driving innovation. Strong collaborator in cross-functional teams, committed to continuous learning and staying current with industry trends.",
//   },
//   education: [
//     {
//       id: 1,
//       school: "ISBA Institute of Professional Studies ,Indore(M.P)",
//       degree: "Bachelor of Computer Application",
//       period: "July 2020 - May 2023",
//       grade: "CGPA :- 7.4/10",
//     },
//   ],
//   skills: [
//     { id: 1, label: "Programming Languages", value: "JavaScript" },
//     {
//       id: 2,
//       label: "Frontend",
//       value:
//         "React , Next js , Redux , HTML, CSS , Bootstrap , Tailwind CSS , Material UI, Shadcn.",
//     },
//     {
//       id: 3,
//       label: "Backend",
//       value: "Node.js, Express.js , ZOD , JWT , OAuth , websockets , EJs.",
//     },
//     { id: 4, label: "Databases", value: "MongoDB ." },
//     { id: 5, label: "Version Control", value: "Git , GitHub" },
//     { id: 6, label: "Tools", value: "VS Code , Postman , Figma" },
//   ],
//   experience: [
//     {
//       id: 1,
//       role: "Assistant Software Engineer",
//       company: "MINDCODERS , INDORE",
//       period: "March 2024 - present",
//       points: [
//         "Contributed in building software ecosystem includes CRM , LMS ,student management system .",
//         "Documented software specifications and user guides to facilitate knowledge sharing to the team",
//         "Researched and implemented new technologies and tools to improve development processes and project",
//         "Participated in code reviews and provided feedback to peers, promoting best practices in coding and design.",
//       ],
//     },
//     {
//       id: 2,
//       role: "MERN Developer (intern)",
//       company: "MINDCODERS , INDORE",
//       period: "January 2024 - March 2024",
//       points: [
//         "Developed intuitive, high-performance web interfaces using HTML, CSS, JavaScript, React, and Tailwind.",
//         "Contributed to the development of an eCommerce web app . worked with restful APIs",
//         "build and integrated Restful APIs and done testing using Postman",
//         "Stayed updated with industry trends to continuously enhance project outcomes.",
//       ],
//     },
//   ],
//   projects: [
//     {
//       id: 1,
//       name: "GPHbooks (gupta pulishing house)",
//       type: "e-commerce",
//       url: "https://gphbooks.com",
//       urlLabel: "https://gphbooks.com",
//       description:
//         "An eCommerce platform designed for online book sales with a fully dynamic admin panel for content management and offer control. The application provides a seamless shopping and management experience through advanced features like real-time pricing and referral systems.",
//       points: [
//         "Full Admin Control: All website content (books, banners, offers) is editable via an intuitive admin panel.",
//         "Selective Discount Management: Admin can post and manage discounts on selected books.",
//         "Shipping Management: Configurable minimum order value and automated shipping charge calculations.",
//         "Referral Code System: Custom referral codes offering user-specific discounts.",
//         "Auto Price Calculation: Dynamic computation of subtotal, discounts, referral discounts, and shipping charges at checkout.",
//         "OAuth Google Login: Secure and quick login experience using Google authentication.",
//         "Personalized emails for registration, order placement, and other events.",
//       ],
//     },
//     {
//       id: 2,
//       name: "E-lite Auction (scrap auction platform)",
//       type: "auction webApp",
//       url: "https://e-lite.co.in",
//       urlLabel: "https://e-lite.co.in",
//       description:
//         "A real-time bidding web application that delivers instant bid updates and automated auction management. The platform supports dedicated dashboards for Admin, Client, and Bidders, ensuring secure and transparent bidding experiences.",
//       points: [
//         "Real-Time Bidding: Live bid updates using Socket.IO for seamless synchronization across all users.",
//         "Role-Based Access: Separate dashboards for Admin, Client, and Bidders with strict authorization on bid placement.",
//         "Bid Authorization Control: Only verified bidders can participate in specific auctions.",
//         "Automated Auction Closure: Node-Cron jobs automatically end auctions when their timers expire — no page refresh required.",
//         "Sequential Time Extension: If a bid is placed within the last 5 minutes, the system extends the time for that item and remaining auction items sequentially.",
//         "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO, Node-Cron.",
//       ],
//     },
//   ],
// };

const INIT = {
    personal: {
        name: "Nameet Mandwal",
        phone: "+91 8319850260",
        email: "thenameet0@gmail.com",
        location: "Indore, M.P.",
        linkedin: "LinkedIn",
        linkedinUrl: "https://www.linkedin.com/in/nameet-mandwal-601b201b3/",
        github: "GitHub",
        githubUrl: "https://github.com/ThenamXe0n",
        portfolio: "Portfolio",
        portfolioUrl: "https://portfolio-beta-sandy.vercel.app/",
        summary:
            "MERN Stack Developer with 2+ years of experience building scalable web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Skilled in developing RESTful APIs, authentication systems, real-time applications, admin dashboards, and responsive user interfaces. Experienced with Redux Toolkit, Socket.IO, JWT, OAuth, Tailwind CSS, and Agile development practices.",
    },

    education: [
        {
            id: 1,
            school: "ISBA Institute of Professional Studies, Indore (M.P.)",
            degree: "Bachelor of Computer Applications (BCA)",
            period: "2020 - 2023",
            grade: "CGPA: 7.4/10",
        },
    ],

    skills: [
        {
            id: 1,
            label: "Languages",
            value: "JavaScript (ES6+), TypeScript (Basic)",
        },
        {
            id: 2,
            label: "Frontend",
            value:
                "React.js, Next.js, Redux Toolkit, Context API, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI",
        },
        {
            id: 3,
            label: "Backend",
            value:
                "Node.js, Express.js, REST APIs, JWT Authentication, OAuth 2.0, Socket.IO, WebSockets, Zod Validation",
        },
        {
            id: 4,
            label: "Database",
            value:
                "MongoDB, Mongoose ODM, Aggregation Pipeline, Schema Design",
        },
        {
            id: 5,
            label: "Tools",
            value:
                "Git, GitHub, Postman, VS Code, Linux, Docker (Basic), Vercel, Netlify",
        },
        {
            id: 6,
            label: "Concepts",
            value:
                "Authentication & Authorization, RBAC, API Integration, Performance Optimization, Agile/Scrum",
        },
    ],

    experience: [
        {
            id: 1,
            role: "Assistant Software Engineer",
            company: "MINDCODERS, Indore",
            period: "March 2024 - Present",
            points: [
                "Developed and maintained CRM, LMS, and Student Management Systems using the MERN stack.",
                "Built scalable RESTful APIs and integrated frontend-backend modules.",
                "Created responsive dashboards using React.js, Redux Toolkit, Tailwind CSS, and Material UI.",
                "Implemented JWT/OAuth authentication and role-based access control (RBAC).",
                "Collaborated with cross-functional teams for development, testing, deployment, and performance optimization.",
                "Participated in code reviews and improved application scalability through reusable component architecture.",
            ],
        }
    ],

    projects: [
        {
            id: 1,
            name: "E-Lite Auction",
            type: "Real-Time Auction Platform",
            url: "https://e-lite.co.in",
            urlLabel: "https://e-lite.co.in",
            description:
                "Real-time industrial auction platform with instant bidding and role-based access management.",
            points: [
                "Developed real-time bidding functionality using Socket.IO.",
                "Implemented role-based dashboards for Admin, Client, and Bidder management.",
                "Built automated auction closure, bid synchronization, and timer extension mechanisms.",
            ],
        },
        {
            id: 2,
            name: "GPHBooks",
            type: "Full Stack eCommerce Platform",
            url: "https://gphbooks.com",
            urlLabel: "https://gphbooks.com",
            description:
                "Production-ready eCommerce platform with dynamic admin management, authentication, referral system, and order processing.",
            points: [
                "Developed a dynamic admin dashboard for managing products, orders, offers, and website content.",
                "Implemented Google OAuth, JWT authentication, referral system, and automated email workflows.",
                "Built scalable APIs for product, order, offer, and user management.",
            ],
        },

        // {
        //   id: 3,
        //   name: "SaaS CRM Management System",
        //   type: "Enterprise CRM Application",
        //   url: "#",
        //   urlLabel: "Private Project",
        //   description:
        //     "CRM platform for lead management, task tracking, follow-up scheduling, and business analytics.",
        //   points: [
        //     "Implemented lead assignment, follow-up scheduling, and workflow automation.",
        //     "Designed scalable MongoDB schemas and optimized backend queries.",
        //     "Developed secure role-based authentication and reporting modules.",
        //   ],
        // },
    ],
};
const uid = () => Math.random().toString(36).slice(2, 9);

/* ── small form controls ── */
function FInput({ label, value, onChange, multi }) {
    const base = {
        width: "100%",
        background: "#f9f9ff",
        border: "1px solid #dde",
        borderRadius: 6,
        padding: "6px 9px",
        fontSize: 12.5,
        color: "#111",
        outline: "none",
        boxSizing: "border-box",
        resize: "vertical",
        fontFamily: "inherit",
    };
    return (
        <div style={{ marginBottom: 8 }}>
            {label && (
                <div
                    style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: "#777",
                        marginBottom: 3,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                    }}
                >
                    {label}
                </div>
            )}
            {multi ? (
                <textarea
                    rows={3}
                    style={base}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            ) : (
                <input
                    style={base}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
}

function BulletEditor({ points, onChange }) {
    const add = () => onChange([...points, ""]);
    const del = (i) => onChange(points.filter((_, j) => j !== i));
    const upd = (i, v) => onChange(points.map((p, j) => (j === i ? v : p)));
    return (
        <div>
            {points.map((p, i) => (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        gap: 5,
                        marginBottom: 5,
                        alignItems: "flex-start",
                    }}
                >
                    <span style={{ marginTop: 7, color: "#777", fontSize: 11 }}>•</span>
                    <input
                        value={p}
                        onChange={(e) => upd(i, e.target.value)}
                        placeholder="bullet point…"
                        style={{
                            flex: 1,
                            background: "#f9f9ff",
                            border: "1px solid #dde",
                            borderRadius: 5,
                            padding: "5px 8px",
                            fontSize: 12,
                            fontFamily: "inherit",
                            outline: "none",
                        }}
                    />
                    <button
                        onClick={() => del(i)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#e05555",
                            fontSize: 16,
                            padding: "1px 4px",
                        }}
                    >
                        ×
                    </button>
                </div>
            ))}
            <button
                onClick={add}
                style={{
                    fontSize: 11.5,
                    color: "#2563eb",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px 0",
                    marginTop: 1,
                }}
            >
                + Add point
            </button>
        </div>
    );
}

function Card({ children, onRemove, title }) {
    const [open, setOpen] = useState(true);
    return (
        <div
            style={{
                border: "1px solid #e0e0f0",
                borderRadius: 8,
                marginBottom: 10,
                overflow: "hidden",
            }}
        >
            <div
                onClick={() => setOpen((o) => !o)}
                style={{
                    background: "#f3f3fc",
                    padding: "7px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                }}
            >
                <span
                    style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#333",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: 260,
                    }}
                >
                    {title}
                </span>
                <div
                    style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        flexShrink: 0,
                    }}
                >
                    <span style={{ fontSize: 12, color: "#888" }}>
                        {open ? "▴" : "▾"}
                    </span>
                    {onRemove && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove();
                            }}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#e05555",
                                cursor: "pointer",
                                fontSize: 14,
                                padding: 0,
                            }}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            {open && (
                <div style={{ padding: "10px 12px", background: "#fff" }}>
                    {children}
                </div>
            )}
        </div>
    );
}

function AddBtn({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                width: "100%",
                padding: "9px",
                background: "#f5f5ff",
                border: "2px dashed #c7c7ef",
                borderRadius: 8,
                color: "#2563eb",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );
}

/* ── FONT TOKENS ── */
const BITTER = "'Bitter', Georgia, serif";
const OPENSANS = "'Open Sans', 'Segoe UI', sans-serif";

// inject Google Fonts once into the page
if (
    typeof document !== "undefined" &&
    !document.getElementById("resume-gfonts")
) {
    const l = document.createElement("link");
    l.id = "resume-gfonts";
    l.rel = "stylesheet";
    l.href =
        "https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(l);
}





/* ── MAIN ── */
export default function ResumeBuilderThree() {
    const [selectedTemplete, setSelectedTemplete] = useState(null)
    const [data, setData] = useState(INIT);
    const [tab, setTab] = useState("personal");

    const setP = (f, v) =>
        setData((d) => ({ ...d, personal: { ...d.personal, [f]: v } }));

    const addEdu = () =>
        setData((d) => ({
            ...d,
            education: [
                ...d.education,
                { id: uid(), school: "", degree: "", period: "", grade: "" },
            ],
        }));
    const delEdu = (id) =>
        setData((d) => ({
            ...d,
            education: d.education.filter((e) => e.id !== id),
        }));
    const updEdu = (id, f, v) =>
        setData((d) => ({
            ...d,
            education: d.education.map((e) => (e.id === id ? { ...e, [f]: v } : e)),
        }));

    const addSkill = () =>
        setData((d) => ({
            ...d,
            skills: [...d.skills, { id: uid(), label: "", value: "" }],
        }));
    const delSkill = (id) =>
        setData((d) => ({ ...d, skills: d.skills.filter((s) => s.id !== id) }));
    const updSkill = (id, f, v) =>
        setData((d) => ({
            ...d,
            skills: d.skills.map((s) => (s.id === id ? { ...s, [f]: v } : s)),
        }));

    const addExp = () =>
        setData((d) => ({
            ...d,
            experience: [
                ...d.experience,
                { id: uid(), role: "", company: "", period: "", points: [""] },
            ],
        }));
    const delExp = (id) =>
        setData((d) => ({
            ...d,
            experience: d.experience.filter((e) => e.id !== id),
        }));
    const updExp = (id, f, v) =>
        setData((d) => ({
            ...d,
            experience: d.experience.map((e) => (e.id === id ? { ...e, [f]: v } : e)),
        }));

    const addProj = () =>
        setData((d) => ({
            ...d,
            projects: [
                ...d.projects,
                {
                    id: uid(),
                    name: "",
                    type: "",
                    url: "",
                    urlLabel: "",
                    description: "",
                    points: [""],
                },
            ],
        }));
    const delProj = (id) =>
        setData((d) => ({ ...d, projects: d.projects.filter((p) => p.id !== id) }));
    const updProj = (id, f, v) =>
        setData((d) => ({
            ...d,
            projects: d.projects.map((p) => (p.id === id ? { ...p, [f]: v } : p)),
        }));

    const handlePrint = () => {
        const el = document.getElementById("resume-preview");
        if (!el) return;
        const w = window.open("", "_blank");
        w.document.write(`<html><head><title>${data.personal.name} - Resume</title>
    <style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#fff;}@page{margin:14mm;size:A4;}</style>
    </head><body>${el.outerHTML}</body></html>`);
        w.document.close();
        setTimeout(() => {
            w.print();
            w.close();
        }, 300);
    };

    const TABS = ["personal", "education", "skills", "experience", "projects"];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                background: "#eef0f6",
                fontFamily: "'Segoe UI', sans-serif",
            }}
        >
            {/* Topbar */}
            <div
                style={{
                    background: "#1c1c2e",
                    padding: "10px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexShrink: 0,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                }}
            >
                <span
                    style={{
                        color: "#e8eaf6",
                        fontWeight: 700,
                        fontSize: 15,
                        letterSpacing: "0.02em",
                    }}
                >
                    📄 Resume Builder
                </span>
                <button
                    onClick={handlePrint}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "7px 16px",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(37,99,235,0.4)",
                    }}
                >
                    ⬇ Export / Print PDF
                </button>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "400px 1fr",
                    flex: 1,
                    overflow: "hidden",
                }}
            >
                {/* FORM */}
                <div
                    style={{
                        background: "#fff",
                        borderRight: "1px solid #dde0f0",
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* tab row */}
                    <div
                        style={{
                            display: "flex",
                            background: "#f0f1f9",
                            padding: "8px 8px 0",
                            borderBottom: "1px solid #dde0f0",
                            flexShrink: 0,
                        }}
                    >
                        {TABS.map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                style={{
                                    flex: 1,
                                    padding: "7px 4px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    textTransform: "capitalize",
                                    borderRadius: "6px 6px 0 0",
                                    transition: "all .12s",
                                    background: tab === t ? "#fff" : "transparent",
                                    color: tab === t ? "#2563eb" : "#888",
                                    borderBottom:
                                        tab === t ? "2px solid #2563eb" : "2px solid transparent",
                                }}
                            >
                                {t === "personal"
                                    ? "Info"
                                    : t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: "14px 14px", flex: 1 }}>
                        {/* PERSONAL */}
                        {tab === "personal" && (
                            <>
                                <FInput
                                    label="Full Name"
                                    value={data.personal.name}
                                    onChange={(v) => setP("name", v)}
                                />
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 8,
                                    }}
                                >
                                    <FInput
                                        label="Phone"
                                        value={data.personal.phone}
                                        onChange={(v) => setP("phone", v)}
                                    />
                                    <FInput
                                        label="Email"
                                        value={data.personal.email}
                                        onChange={(v) => setP("email", v)}
                                    />
                                </div>
                                <FInput
                                    label="Location"
                                    value={data.personal.location}
                                    onChange={(v) => setP("location", v)}
                                />
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 8,
                                    }}
                                >
                                    <FInput
                                        label="LinkedIn Text"
                                        value={data.personal.linkedin}
                                        onChange={(v) => setP("linkedin", v)}
                                    />
                                    <FInput
                                        label="LinkedIn URL"
                                        value={data.personal.linkedinUrl}
                                        onChange={(v) => setP("linkedinUrl", v)}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 8,
                                    }}
                                >
                                    <FInput
                                        label="GitHub Text"
                                        value={data.personal.github}
                                        onChange={(v) => setP("github", v)}
                                    />
                                    <FInput
                                        label="GitHub URL"
                                        value={data.personal.githubUrl}
                                        onChange={(v) => setP("githubUrl", v)}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 8,
                                    }}
                                >
                                    <FInput
                                        label="Portfolio"
                                        value={data.personal.portfolio}
                                        onChange={(v) => setP("portfolio", v)}
                                    />
                                    <FInput
                                        label="Portfolio URL"
                                        value={data.personal.portfolioUrl}
                                        onChange={(v) => setP("portfolioUrl", v)}
                                    />
                                </div>
                                <FInput
                                    label="Summary / Objective"
                                    value={data.personal.summary}
                                    onChange={(v) => setP("summary", v)}
                                    multi
                                />
                            </>
                        )}

                        {tab === "education" && (
                            <>
                                {data.education.map((edu, i) => (
                                    <Card
                                        key={edu.id}
                                        title={edu.school || `Education ${i + 1}`}
                                        onRemove={() => delEdu(edu.id)}
                                    >
                                        <FInput
                                            label="School / University"
                                            value={edu.school}
                                            onChange={(v) => updEdu(edu.id, "school", v)}
                                        />
                                        <FInput
                                            label="Degree"
                                            value={edu.degree}
                                            onChange={(v) => updEdu(edu.id, "degree", v)}
                                        />
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                                gap: 8,
                                            }}
                                        >
                                            <FInput
                                                label="Period"
                                                value={edu.period}
                                                onChange={(v) => updEdu(edu.id, "period", v)}
                                            />
                                            <FInput
                                                label="Grade / CGPA"
                                                value={edu.grade}
                                                onChange={(v) => updEdu(edu.id, "grade", v)}
                                            />
                                        </div>
                                    </Card>
                                ))}
                                <AddBtn label="+ Add Education" onClick={addEdu} />
                            </>
                        )}

                        {tab === "skills" && (
                            <>
                                {data.skills.map((sk, i) => (
                                    <Card
                                        key={sk.id}
                                        title={sk.label || `Skill ${i + 1}`}
                                        onRemove={() => delSkill(sk.id)}
                                    >
                                        <FInput
                                            label="Category (e.g. Frontend)"
                                            value={sk.label}
                                            onChange={(v) => updSkill(sk.id, "label", v)}
                                        />
                                        <FInput
                                            label="Values"
                                            value={sk.value}
                                            onChange={(v) => updSkill(sk.id, "value", v)}
                                        />
                                    </Card>
                                ))}
                                <AddBtn label="+ Add Skill Category" onClick={addSkill} />
                            </>
                        )}

                        {tab === "experience" && (
                            <>
                                {data.experience.map((exp, i) => (
                                    <Card
                                        key={exp.id}
                                        title={exp.role || `Experience ${i + 1}`}
                                        onRemove={() => delExp(exp.id)}
                                    >
                                        <FInput
                                            label="Role / Title"
                                            value={exp.role}
                                            onChange={(v) => updExp(exp.id, "role", v)}
                                        />
                                        <FInput
                                            label="Company"
                                            value={exp.company}
                                            onChange={(v) => updExp(exp.id, "company", v)}
                                        />
                                        <FInput
                                            label="Period"
                                            value={exp.period}
                                            onChange={(v) => updExp(exp.id, "period", v)}
                                        />
                                        <div
                                            style={{
                                                fontSize: 10.5,
                                                fontWeight: 700,
                                                color: "#777",
                                                marginBottom: 5,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                            }}
                                        >
                                            Bullet Points
                                        </div>
                                        <BulletEditor
                                            points={exp.points}
                                            onChange={(pts) => updExp(exp.id, "points", pts)}
                                        />
                                    </Card>
                                ))}
                                <AddBtn label="+ Add Experience" onClick={addExp} />
                            </>
                        )}

                        {tab === "projects" && (
                            <>
                                {data.projects.map((proj, i) => (
                                    <Card
                                        key={proj.id}
                                        title={proj.name || `Project ${i + 1}`}
                                        onRemove={() => delProj(proj.id)}
                                    >
                                        <FInput
                                            label="Project Name"
                                            value={proj.name}
                                            onChange={(v) => updProj(proj.id, "name", v)}
                                        />
                                        <FInput
                                            label="Type (e.g. e-commerce)"
                                            value={proj.type}
                                            onChange={(v) => updProj(proj.id, "type", v)}
                                        />
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                                gap: 8,
                                            }}
                                        >
                                            <FInput
                                                label="URL"
                                                value={proj.url}
                                                onChange={(v) => updProj(proj.id, "url", v)}
                                            />
                                            <FInput
                                                label="URL Display Text"
                                                value={proj.urlLabel}
                                                onChange={(v) => updProj(proj.id, "urlLabel", v)}
                                            />
                                        </div>
                                        <FInput
                                            label="Description"
                                            value={proj.description}
                                            onChange={(v) => updProj(proj.id, "description", v)}
                                            multi
                                        />
                                        <div
                                            style={{
                                                fontSize: 10.5,
                                                fontWeight: 700,
                                                color: "#777",
                                                marginBottom: 5,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                            }}
                                        >
                                            Key Feature Points
                                        </div>
                                        <BulletEditor
                                            points={proj.points}
                                            onChange={(pts) => updProj(proj.id, "points", pts)}
                                        />
                                    </Card>
                                ))}
                                <AddBtn label="+ Add Project" onClick={addProj} />
                            </>
                        )}
                    </div>
                </div>

                {/* PREVIEW */}
                <div
                    style={{
                        overflowY: "auto",
                        background: "#dde0ea",
                        padding: "22px 20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 14,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                color: "#666",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Live Preview
                        </span>
                        <span
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#22c55e",
                                display: "inline-block",
                                boxShadow: "0 0 5px #22c55e",
                            }}
                        />
                    </div>
                    {selectedTemplete ? <div
                        style={{
                            maxWidth: 800,
                            margin: "0 auto",
                            boxShadow: "0 6px 40px rgba(0,0,0,0.2)",
                        }}
                    >
                        <ResumePreview d={data} />
                    </div>
                        :
                        <ResumeTempleteSelector setSelectedTemplete={setSelectedTemplete} />}
                </div>
            </div>
        </div>
    );
}