import "./PodcastGrid.scss";

interface PodcastGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PodcastsGrid({ children }: PodcastGridProps) {
  return <div className="podcast_grid">{children}</div>;
}
