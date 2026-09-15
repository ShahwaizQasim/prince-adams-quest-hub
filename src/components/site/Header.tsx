import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { BOOK, NAV_LINKS } from "@/lib/book-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex shrink-0 flex-col leading-none">
          {/* Trademarked Bent Nail Press logo goes here once supplied. */}
          <span className="font-display text-lg font-semibold tracking-wide text-gradient-gold">
            Bent Nail Press<sup className="text-[0.6em]">®</sup>
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            princeadamsquest.com
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={BOOK.amazonUrl} target="_blank" rel="noreferrer noopener">
              <BookOpen className="size-4" /> Buy the Book
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-border bg-card">
              <SheetTitle className="font-display text-xl text-gold">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-gold" }}
                    className="border-b border-border/60 py-3 font-display text-lg text-foreground/90"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-6 w-full">
                <a href={BOOK.amazonUrl} target="_blank" rel="noreferrer noopener">
                  Buy on Amazon
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
