import PageNavBar from "@/components/PageNavBar";
import PageFooter from "@/components/PageFooter";
import TalksList from "@/components/TalksList";
import eventData from "@/data/past/2025.json";

export const metadata = {
  title: "Talks 2025 - Data Engineering Open Forum",
  description:
    "Watch all the talks from Data Engineering Open Forum 2025 in San Francisco.",
};

export default function Talks2025Page() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      <PageNavBar />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        {/* Header section with metadata */}
        <div className="space-y-4 mb-12">
          <div className="font-mono text-sm text-accent">
            {`> TALKS_${eventData.year}_ `}
          </div>
          <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {eventData.title}
          </h1>

          {/* Description */}
          <p className="text-pretty leading-relaxed text-muted-foreground max-w-3xl">
            {eventData.description}
          </p>

          {/* Event date and talk count */}
          <div className="font-mono text-lg text-muted-foreground space-y-1">
            <div>{`// Event date: ${new Date(eventData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</div>
            <div>{`// ${eventData.talks.length} talks`}</div>
          </div>

          {/* Playlist link */}
          <div className="pt-2">
            <a
              href={eventData.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
            >
              {"[▶ VIEW FULL PLAYLIST ON YOUTUBE]"}
            </a>
          </div>
        </div>

        {/* Talks list */}
        <TalksList talks={eventData.talks} />

        <PageFooter />
      </div>
    </main>
  );
}
