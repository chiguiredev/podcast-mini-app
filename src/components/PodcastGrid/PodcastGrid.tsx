interface PodcastGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PodcastsGrid({ children }: PodcastGridProps) {
  return <div>{children}</div>;
}
