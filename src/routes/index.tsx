import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, ScrollText, Award } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BOOK, THEMES } from "@/lib/book-data";
import { ExcerptDialog } from "@/components/site/ExcerptDialog";
import heroBackdrop from "@/assets/hero-backdrop.jpg";
import bookCover from "@/assets/book-cover.jpg";
import goldMedal from "@/assets/gold-medal.png";
import authorPortrait from "@/assets/author-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prince Adam's Quest — A Novella by Terrence W. Walsh" },
      {
        name: "description",
        content:
          "Gold Medal winner, Literary Titan Book Awards 2026. A satirical dark fantasy novella where a vain prince spends the whole book disproving his own opening sentence.",
      },
      { property: "og:title", content: "Prince Adam's Quest — Terrence W. Walsh" },
      {
        property: "og:description",
        content:
          "\"Prince Adam always won.\" A gold-medal satirical fantasy novella from Bent Nail Press® LLC.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [email, setEmail] = useState("");

  // Newsletter capture is front-end only for now.
  // Integration point: post to Substack's embed endpoint or a server function.
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Please enter a valid email address.");
    toast.success("Thank you — confirm your subscription on Substack to start reading.");
    setEmail("");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBackdrop}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Award className="size-3.5" /> Gold Medal · Literary Titan 2026
            </div>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Prince Adam's <span className="text-gradient-gold">Quest</span>
            </h1>
            <p className="mt-6 font-display text-2xl italic text-gold md:text-3xl">
              &ldquo;{BOOK.hook}&rdquo;
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              Four words open the book, and Adam spends the rest of it proving them false. A
              satirical dark fantasy novella of propaganda and Truth, in which a troll takes a
              prince to the cleaners, a dragon holds unappealable court, and an apprentice bard
              named Minnow keeps the only honest record.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={BOOK.amazonUrl} target="_blank" rel="noreferrer noopener">
                  <BookOpen className="size-4" /> Buy on Amazon
                </a>
              </Button>
              <ExcerptDialog
                trigger={
                  <Button size="lg" variant="outline">
                    Read Sample
                  </Button>
                }
              />
              <Button asChild size="lg" variant="ghost">
                <Link to="/discussion-guide">
                  <ScrollText className="size-4" /> Discussion Guide
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <img
              src={bookCover}
              alt="Cover of Prince Adam's Quest by Terrence W. Walsh"
              width={1024}
              height={1536}
              className="w-full rounded-sm border border-gold/25 card-elevated"
            />
            <img
              src={goldMedal}
              alt="Literary Titan Gold Medal, 2026"
              width={816}
              height={816}
              loading="lazy"
              className="absolute -bottom-6 -left-6 w-24 drop-shadow-xl md:w-28"
            />
          </div>
        </div>
      </section>

      {/* BOOK OVERVIEW */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Card className="grid gap-8 border-gold/20 bg-card p-8 md:grid-cols-3 md:p-10">
            <div>
              <h2 className="font-display text-3xl">The Book at a Glance</h2>
              <div className="gold-rule my-5 w-24" />
              <p className="text-sm text-muted-foreground">
                A novella of {BOOK.pages} pages, thirteen named chapters, and extensive back matter
                — the rules of the guild of squires, a hierarchy of dragons, a glossary, and
                Minnow's collected lyrics.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-sm md:col-span-2">
              {[
                ["Trade paperback", BOOK.paperbackPrice],
                ["Ebook", BOOK.ebookPrice],
                ["Pages", String(BOOK.pages)],
                ["ISBN", BOOK.isbn],
                ["Imprint", BOOK.imprint],
                ["Award", "Literary Titan Gold Medal, 2026"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-gold">{label}</dt>
                  <dd className="mt-1 font-display text-xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </section>

      {/* THEMES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Core Themes</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">The salt of satire</h2>
          <div className="gold-rule mx-auto mt-6 w-40" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((theme) => (
            <Card
              key={theme.title}
              className="border-border/70 bg-card p-7 transition-colors hover:border-gold/40"
            >
              <h3 className="font-display text-2xl text-gold">{theme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{theme.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* AUTHOR TEASER */}
      <section className="border-y border-border/60 bg-forest-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
          <img
            src={authorPortrait}
            alt="Terrence W. Walsh, author"
            width={912}
            height={1104}
            loading="lazy"
            className="mx-auto w-64 rounded-sm border border-gold/25 card-elevated md:w-full"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">The Author</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Terrence W. Walsh</h2>
            <p className="mt-5 text-muted-foreground">
              Poet, playwright and fantasy author. He retired after three decades of active duty
              service in the U.S. Coast Guard, and now spends his time writing and keeping bees on
              Cape Cod. He writes about writing in his Substack series,{" "}
              <em>Lessons from the Keyboard</em>, always free to those who subscribe.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/author">
                  Read the full biography <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <a href={BOOK.substackUrl} target="_blank" rel="noreferrer noopener">
                  Visit the Substack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AMAZON BUY */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-4xl md:text-5xl">Begin the quest</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Available now in trade paperback ({BOOK.paperbackPrice}) and Kindle ebook (
          {BOOK.ebookPrice}). The Kindle edition includes X-Ray references for the glossary and the
          dragon hierarchy.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href={BOOK.amazonUrl} target="_blank" rel="noreferrer noopener">
            <BookOpen className="size-4" /> Buy on Amazon
          </a>
        </Button>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Always free</p>
          <h2 className="mt-4 font-display text-4xl">Lessons from the Keyboard</h2>
          <p className="mt-4 text-muted-foreground">
            Terrence's Substack series on craft, revision and the writing life. Join for free and
            get each new letter in your inbox.
          </p>
          <form onSubmit={subscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="bg-background"
            />
            <Button type="submit">Subscribe free</Button>
          </form>
        </div>
      </section>
    </>
  );
}
