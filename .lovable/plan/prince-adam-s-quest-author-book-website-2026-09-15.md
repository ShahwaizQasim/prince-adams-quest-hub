# Prince Adam's Quest — Author & Book Website

A premium, literary dark-fantasy site for *Prince Adam's Quest* by Terrence W. Walsh, published by Bent Nail Press® LLC.

## Look and feel

- Palette: deep forest green, burnished gold, dark charcoal, warm parchment/cream.
- Elegant serif headings (Cormorant Garamond) with a crisp sans body (Karla), gold rules, medal badges, subtle parchment texture.
- Dark, atmospheric base with parchment-toned reading sections so long text stays comfortable.

## Pages

1. **Home** — Hero with "Prince Adam's Quest", the hook "Prince Adam always won.", teaser, 2026 Literary Titan Gold Medal badge, and three buttons (Buy on Amazon, Read Sample, Discussion Guide). Book card with cover art, $12.99 paperback / $7.99 ebook, 167 pages, ISBN 979-8-9924602-3-0. Core Themes section. Author teaser. Amazon buy band linking to the product page. Newsletter signup for "Lessons from the Keyboard".
2. **About the Book** — Full synopsis drawn from the reading guide, character index (Prince Adam, Minnow, King Biter & Fox, Squire the Troll, Lysander the Dragon), specs and gold-medal feature, and a sample excerpt opening in a reader-style modal.
3. **About the Author** — Biography (30 years U.S. Coast Guard, poet, playwright, fantasy author, Cape Cod, beekeeper), *ROUND TUIT* at Brooklyn Publishers (www.brookpub.com), and a Substack showcase.
4. **Discussion Guide** — All 15 questions from the uploaded guide in a searchable accordion, expand/collapse all, and a print/save-as-PDF button with a clean print layout.
5. **Blog** — "Lessons from the Keyboard" preview articles with a reading-time and topic layout; code comments mark where a CMS or Substack feed would plug in.
6. **FAQ** — Reading age, spoiler etiquette, formats, upcoming works, book-club bulk orders.
7. **Forum** — Community hub preview: sample discussion threads, reading-group guidelines, and a clearly marked "coming soon" state with hooks for future accounts and a threads database.
8. **Donate** — Patron tiers including "Buy the Author a Jar of Cape Cod Honey" and "Supporter of the Realm", plus Substack support; buttons stubbed with notes for a future payment integration.
9. **Contact** — Form (name, email, subject, message), tamaroa79@gmail.com, 703-862-7999, press/speaking inquiries, Bent Nail Press imprint details.

## Header and footer

Sticky header with the Bent Nail Press wordmark, full nav on desktop, a slide-in drawer on mobile, and a gold "Buy the Book" button. Footer with nav columns, Substack and Amazon links, imprint block, copyright, and the ® trademark placeholders.

## Art

Generated art for: book cover, an atmospheric hero backdrop, an author portrait placeholder, and a gold medal badge. All clearly replaceable once real assets arrive.

## Technical notes

- TanStack Start file routes, one file per page, each with its own title/description/OG metadata; shared layout in `__root.tsx`.
- Design tokens added to `src/styles.css` (oklch); shadcn Accordion, Dialog, Sheet, Card, Badge, Input, Textarea reused.
- Contact, newsletter, donation and forum actions are front-end only for now, with comments marking the integration points; adding real submissions later means enabling Lovable Cloud.

## Needs from you

- Real cover image, author photo, and the trademarked Bent Nail Press logo (placeholders used until then).
- The Substack URL for "Lessons from the Keyboard" — linking to Substack search until provided.
- Blog and forum content is written as plausible placeholder copy, clearly marked, and should be replaced with your own.
