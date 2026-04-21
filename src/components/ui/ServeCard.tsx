import type { ComponentType } from "react";

type ServeCardProps = {
  // Ikona jako komponent z lucide-react (Snowflake, Store, itp.)
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export function ServeCard({ icon: Icon, title, description }: ServeCardProps) {
  return (
    <div className="group rounded-md border-t-4 border-blue bg-bg-light p-6 text-center transition hover:-translate-y-1">
      <Icon className="mx-auto mb-3 h-10 w-10 text-blue" aria-hidden />
      <h3 className="font-display text-xl font-bold uppercase text-navy">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
}
