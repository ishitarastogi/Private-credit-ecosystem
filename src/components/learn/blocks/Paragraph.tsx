type ParagraphProps = {
  text: string;
  lead?: boolean;
};

export function Paragraph({ text, lead }: ParagraphProps) {
  return (
    <p
      className={
        lead
          ? "text-base leading-7 text-foreground"
          : "text-sm leading-7 text-muted"
      }
    >
      {text}
    </p>
  );
}
