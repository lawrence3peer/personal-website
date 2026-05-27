interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold mb-6 pb-2 border-b-2 border-sage/30">
        {title}
      </h2>
      {children}
    </section>
  );
}
