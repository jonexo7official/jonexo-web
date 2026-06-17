"use client";

import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function GameCard({
  title,
  description,
  href,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "24px",
          padding: "28px",
          minHeight: "220px",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          transition: "0.25s",
        }}
      >
        <div
          style={{
            fontSize: "58px",
            marginBottom: "18px",
          }}
        >
          {icon}
        </div>

        <h2
          style={{
            marginBottom: "10px",
            fontSize: "1.6rem",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            opacity: 0.85,
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}