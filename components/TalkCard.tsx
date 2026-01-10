interface Author {
  name: string;
  title: string;
}

interface TalkCardProps {
  talk: {
    title: string;
    authors: Author[];
    youtubeUrl: string | null;
  };
}

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <div className="border-l-2 border-accent/30 pl-6 py-4 space-y-3 hover:border-accent/60 transition-colors">
      <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
        {talk.title}
      </h2>

      <div className="space-y-1">
        {talk.authors.map((author) => (
          <div
            key={author.name}
            className="font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary-foreground">{author.name}</span>
            {" // "}
            <span>{author.title}</span>
          </div>
        ))}
      </div>

      {talk.youtubeUrl ? (
        <a
          href={talk.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          {"[▶ WATCH ON YOUTUBE]"}
        </a>
      ) : (
        <div className="font-mono text-sm text-muted-foreground/50">
          {"// Recording not available"}
        </div>
      )}
    </div>
  );
}
