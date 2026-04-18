type SeparatorProps = {
  className: string;
};

export const Separator = ({ className }: SeparatorProps) => {
  return <span className={className}>:</span>;
};
