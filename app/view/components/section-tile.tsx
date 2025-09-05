type Props = { eyebrow?: string; title: string; center?: boolean; className?: string };

export default function SectionTitle({ eyebrow, title, center, className = "" }: Props) {
  return (
    <div className={center ? `text-center ${className}` : className}>
      {eyebrow && (
        <div className="mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold text-sky-700 border-sky-200 bg-sky-50">
          {eyebrow.toUpperCase()}
        </div>
      )}
      <h2 className="text-xl md:text-6xl font-bold text-sky-700">{title}</h2>
    </div>
  );
}
