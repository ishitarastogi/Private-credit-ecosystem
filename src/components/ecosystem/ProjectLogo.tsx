type ProjectLogoProps = {
  name: string;
  logo?: string;
  size?: number;
};

export function ProjectLogo({ name, logo, size = 22 }: ProjectLogoProps) {
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logo} alt="" width={size} height={size} />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="text-xs font-semibold text-zinc-400"
      style={{ fontSize: size * 0.5 }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
