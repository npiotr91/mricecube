import type { ComponentType, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "cta" | "outline-dark";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  // Opcjonalna ikona z lucide-react jako komponent
  icon?: ComponentType<{ className?: string }>;
  // external=true → otwiera w nowej karcie z rel security
  external?: boolean;
  // Mobile compact variant — mniejszy padding, krótszy tekst (dla Navbara mobile)
  compact?: boolean;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-navy border-2 border-white hover:bg-light-blue hover:border-light-blue",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white/15",
  cta: "bg-navy text-white border-2 border-navy hover:bg-blue hover:border-blue",
  "outline-dark":
    "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon: Icon,
  external = false,
  compact = false,
  className = "",
}: ButtonProps) {
  const sizeClasses = compact
    ? "px-3 py-2 text-xs"
    : "px-8 py-4 text-base";

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-wide transition ${sizeClasses} ${variantStyles[variant]} ${className}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
      <span>{children}</span>
    </a>
  );
}
