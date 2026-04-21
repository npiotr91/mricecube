type ContactCardProps = {
  label: string;
  value: string;
  note: string;
  // Opcjonalny link — jeśli podany, value staje się klikalnym <a>.
  // Bez href — value renderuje się jako plain text (z zachowaniem line breaks).
  href?: string;
  // external=true otwiera href w nowej karcie (dla map, websites).
  external?: boolean;
};

export function ContactCard({
  label,
  value,
  note,
  href,
  external = false,
}: ContactCardProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  // whitespace-pre-line renderuje \n ze stringu jako line break w HTML
  // (potrzebne dla adresu "228 NW 32 Ave\nMiami, FL 33125").
  const valueClasses = "block text-lg font-bold text-navy whitespace-pre-line transition hover:text-blue";

  return (
    <div className="rounded-md border-t-4 border-blue bg-white p-6">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue">
        {label}
      </div>
      {href ? (
        <a href={href} {...externalProps} className={valueClasses}>
          {value}
        </a>
      ) : (
        <div className={valueClasses.replace(" hover:text-blue", "")}>
          {value}
        </div>
      )}
      <div className="mt-2 text-sm text-gray-600">{note}</div>
    </div>
  );
}
