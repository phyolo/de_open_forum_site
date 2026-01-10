import TalkCard from "./TalkCard";

interface Author {
  name: string;
  title: string;
}

export interface Talk {
  title: string;
  authors: Author[];
  youtubeUrl: string | null;
}

interface TalksListProps {
  talks: Talk[];
}

export default function TalksList({ talks }: TalksListProps) {
  return (
    <div className="space-y-8">
      {talks.map((talk) => (
        <TalkCard key={talk.title} talk={talk} />
      ))}
    </div>
  );
}
