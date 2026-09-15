import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { BOOK, NAV_LINKS } from "@/lib/book-data";

export function Footer() {
  return (
    <footer className="no-print border-t border-border/70 bg-forest-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          {/* Registered trademark logo placeholder — swap for the supplied mark. */}
          <p className="font-display text-2xl text-gradient-gold">
            Bent Nail Press<sup className="text-[0.55em]">®</sup> LLC
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Publisher of {BOOK.title} by {BOOK.author}. {BOOK.award}.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={`mailto:${BOOK.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
            >
              <Mail className="size-4" /> {BOOK.email}
            </a>
            <a
              href={BOOK.phoneHref}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
            >
              <Phone className="size-4" /> {BOOK.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Elsewhere</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={BOOK.amazonUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Buy on Amazon
              </a>
            </li>
            <li>
              <a
                href={BOOK.substackUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Lessons from the Keyboard
              </a>
            </li>
            <li>
              <a
                href={BOOK.brookpubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                ROUND TUIT at Brooklyn Publishers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Bent Nail Press® LLC. All rights reserved.</p>
          <p>
            ISBN {BOOK.isbn} · Bent Nail Press® is a registered trademark of Bent Nail Press LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
