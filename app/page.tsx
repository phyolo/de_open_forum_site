import Image from "next/image";
import Link from "next/link";

const sponsorTiers = [
  {
    tier: "PREMIUM",
    sponsors: [
      {
        name: "Databricks",
        href: "https://www.databricks.com/",
        logoSrc: "/sponsors/databricks.svg",
      },
      {
        name: "StreamNative",
        href: "https://streamnative.io/",
        logoSrc: "/sponsors/streamnative.svg",
      },
      {
        name: "CelerData",
        href: "https://celerdata.com/",
        logoSrc: "/sponsors/celerdata.svg",
      },
      {
        name: "PuppyGraphy",
        href: "https://www.puppygraph.com/",
        logoSrc: "/sponsors/puppygraphy.svg",
      },
    ],
  },
  {
    tier: "GOLD",
    sponsors: [
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
    ],
  },
  {
    tier: "SILVER",
    sponsors: [
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
      { name: "Your Logo", href: "#", logoSrc: "/sponsors/placeholder.svg" },
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      {/* Top bar with retro feel */}
      <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{"// DATA ENGINEERING OPEN FORUM"}</span>
          <span>{"[SAN FRANCISCO, CA]"}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-10 lg:gap-10">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-6 mx-1 md:mx-8 lg:mx-0">
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> AGENDA_COMING_SOON_ "}
              </div>
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl whitespace-pre-line">
                Data Engineering Open Forum
              </h1>
              <div className="font-mono text-lg text-muted-foreground sm:text-xl">
                {"// San Francisco: April 16th, 2026"}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-pretty text-lg leading-relaxed">
                The most anticipated and respected conference in the data
                engineering community.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                World-class content. Meaningful connections. Open dialogue.
                We&apos;re building an event that practitioners, leaders, and
                enthusiasts actively seek out — not just for the technical
                depth, but for the experience it delivers.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono font-extrabold text-2xl text-accent">
                {">>"} Agenda coming soon!{" "}
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                {"// Stay tuned for updates on speakers, sessions, and more."}
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm">
                <span className="text-accent text-base">
                  {"> BE_THE_FIRST_TO_KNOW:"}
                </span>
                {" Join our Google group "}
                <br />
                {" > "}
                <a
                  rel="noopener noreferrer"
                  href="https://groups.google.com/g/data-engineering-open-forum"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  data-engineering-open-forum
                </a>
                {" for updates & announcements."}
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-accent/30 pl-4 font-mono text-sm text-muted-foreground">
              <p>{"// Technically deep, globally relevant"}</p>
              <p>{"// Community-driven content"}</p>
              <p>{"// Open dialogue & collaboration"}</p>
              <p>{"// Connections that outlive the event"}</p>
            </div>

            {/* Previous editions */}
            <div className="flex flex-col flex-wrap items-start gap-2">
              <p className="font-mono">
                <span className="italic">{"Previous editions: "}</span>
                <Link
                  href="/past/2024"
                  className="hover:text-accent hover:underline"
                >
                  [2024]
                </Link>
                {", "}
                <Link
                  href="/past/2025"
                  className="hover:text-accent hover:underline"
                >
                  [2025]
                </Link>
              </p>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="flex items-center justify-center lg:col-span-4">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/de_open_forum_goldengate.png"
                alt="Data Engineering Open Forum - Golden Gate Bridge representing San Francisco"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-4">
          <p className="font-mono font-extrabold text-2xl text-accent">
            {">>"} Sponsors
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            {"// Thanks to our partners for supporting the community."}
          </p>
        </div>

        <section className="mt-6 rounded-sm bg-primary/70 px-5 py-8 sm:px-8 sm:py-10">
          <div className="space-y-10">
            {sponsorTiers.map((group) => (
              <div key={group.tier} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-accent/35" />
                  <p className="font-mono text-lg font-semibold text-accent">
                    {group.tier}
                  </p>
                  <div className="h-px flex-1 bg-accent/35" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {group.sponsors.map((sponsor, index) => (
                    <a
                      key={`${group.tier}-${sponsor.name}-${index}`}
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-link group flex h-20 items-center justify-center rounded-sm bg-primary/20 px-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={sponsor.name}
                    >
                      <Image
                        src={sponsor.logoSrc}
                        alt={`${sponsor.name} logo`}
                        width={220}
                        height={56}
                        className="sponsor-logo h-10 w-auto object-contain sm:h-11"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom decorative element */}
        <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>{"// Excellence in content & community"}</div>
            <div className="flex gap-6">
              <span>{"[OPEN]"}</span>
              <span>{"[INCLUSIVE]"}</span>
              <span>{"[INSPIRING]"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
