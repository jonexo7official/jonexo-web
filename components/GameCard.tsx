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
          background: "rgba(15,23,42,0.85)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "24px",
          minHeight: "180px",
          transition: "0.3s",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "12px",
          }}
        >
          {icon}
        </div>

        <h2>{title}</h2>

        <p
          style={{
            opacity: 0.8,
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}