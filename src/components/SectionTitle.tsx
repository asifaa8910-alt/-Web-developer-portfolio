type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  const words = title.trim().split(/\s+/);
  const lastWord = words.pop() || '';
  const leading = words.join(' ');

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      {leading && <span>{leading} </span>}
      <span className="text-cyan-400">{lastWord}</span>
    </h2>
  );
}


