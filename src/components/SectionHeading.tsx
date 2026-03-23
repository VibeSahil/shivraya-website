interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: Props) => (
  <div className={centered ? "text-center mb-12" : "mb-10"}>
    <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
    <div className={`h-1 w-16 bg-primary rounded-full mt-4 ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
