
type ProgressCardProps = {
  title: string;
  value: string;
  description: string;
};

function ProgressCard({
  title,
  value,
  description,
}: ProgressCardProps) {
  return (
    <article className="progress-card">
      <h3>{title}</h3>
      <p className="progress-value">{value}</p>
      <p>{description}</p>
    </article>
  );
}

export default ProgressCard;
