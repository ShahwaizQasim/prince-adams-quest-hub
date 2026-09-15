import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BOOK, EXCERPT } from "@/lib/book-data";

export function ExcerptDialog({ trigger }: { trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl border-gold/30 p-0 parchment-panel">
        <DialogHeader className="border-b border-ink/10 px-8 pb-4 pt-8 text-left">
          <DialogTitle className="font-display text-3xl text-ink">
            {BOOK.title} — Sample
          </DialogTitle>
          <DialogDescription className="text-ink/70">{EXCERPT.chapter}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] px-8">
          <div className="space-y-4 py-6 font-display text-lg leading-relaxed text-ink">
            {EXCERPT.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-2xl first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:leading-none" : ""}>
                {p}
              </p>
            ))}
          </div>
        </ScrollArea>
        <p className="border-t border-ink/10 px-8 py-4 text-xs text-ink/60">{EXCERPT.note}</p>
      </DialogContent>
    </Dialog>
  );
}
