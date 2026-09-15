// Single source of truth for book, author and site content.
// Replace placeholder copy (blog posts, forum threads) with real content when available.

export const BOOK = {
  title: "Prince Adam's Quest",
  author: "Terrence W. Walsh",
  imprint: "Bent Nail Press® LLC",
  isbn: "979-8-9924602-3-0",
  pages: 167,
  paperbackPrice: "$12.99 USD",
  ebookPrice: "$7.99 USD",
  hook: "Prince Adam always won.",
  amazonUrl: "https://www.amazon.com/dp/B0H4NM2THY",
  // TODO: replace with the exact Substack publication URL once provided.
  substackUrl: "https://substack.com/search/Lessons%20from%20the%20Keyboard",
  brookpubUrl: "http://www.brookpub.com/",
  email: "tamaroa79@gmail.com",
  phone: "703-862-7999",
  phoneHref: "tel:+17038627999",
  award: "Gold Medal Winner — Literary Titan Book Awards, 2026",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "The Book", to: "/about-book" },
  { label: "The Author", to: "/author" },
  { label: "Discussion Guide", to: "/discussion-guide" },
  { label: "Blog", to: "/blog" },
  { label: "Forum", to: "/forum" },
  { label: "FAQ", to: "/faq" },
  { label: "Donate", to: "/donate" },
  { label: "Contact", to: "/contact" },
] as const;

export const THEMES = [
  {
    title: "Truth vs. Propaganda",
    body: "Truth is treated as an absolute, objective thing. Adam's self-serving claims collide with the facts, and the story asks the reader to keep score.",
  },
  {
    title: "Satire of the Hero's Journey",
    body: "The familiar pattern — untested young man rides out to slay a monster — is followed just closely enough to make every deviation land as comedy.",
  },
  {
    title: "Racism & Misogyny",
    body: "Adam's xenophobia meets Minnow's monologue \"Abide,\" an ad absurdum argument that would forbid even the daily migration of the sun.",
  },
  {
    title: "Justice",
    body: "A troll squire presses his claims, a dragon holds unappealable court, and the question of what a fair judgment costs runs to the last page.",
  },
  {
    title: "What happens when a fool becomes king?",
    body: "The question characters keep asking one another — and the one the ending refuses to answer comfortably.",
  },
] as const;

export const CHARACTERS = [
  {
    name: "Prince Adam",
    role: "Heir of Leftovria",
    body: "Owner of famously shiny black boots and of an opening sentence he spends the whole book disproving. Sets out to slay a dragon he has never met, on facts he never checks.",
  },
  {
    name: "Minnow",
    role: "Apprentice bard",
    body: "Asked her profession, she says bard — then qualifies it to apprentice bard, because Truth matters. Her rhymes and lyrics skewer Adam, and by \"Fog Bank\" she has grown into a heroine in her own right.",
  },
  {
    name: "King Biter & Fox",
    role: "A king and his herald",
    body: "Biter takes Adam to task for untruthful words and claims the prince's shiny boots as consequence. Fox, his herald, tests whether Minnow can tell a true statement from a false one — the mark of every true bard.",
  },
  {
    name: "Squire the Troll",
    role: "Squire, of a sort",
    body: "Attaches himself to Adam and proceeds to take him to the cleaners under the rules of the guild of squires. Justice, malice, comeuppance, grift — readers rarely agree on which.",
  },
  {
    name: "Lysander",
    role: "Dragon",
    body: "The monster of the quest, and the judge of it. Enlisted by Squire to hold court; from a dragon's judgment there is no appeal.",
  },
] as const;

export const DISCUSSION_QUESTIONS = [
  {
    id: 1,
    topic: "Hero's Journey",
    question:
      "The story of an untested young man setting out to deal with a monster is a familiar pattern in traditional stories of our world. To what extent did Prince Adam's Quest follow, or deviate from, those familiar patterns?",
  },
  {
    id: 2,
    topic: "Craft & Structure",
    question:
      "The original concept for Prince Adam's Quest was a short story with a swift and fiery ending. Then the trolls and Minnow the bard made their contributions, resulting in a novella. Did you find the story too long, too short, or just right?",
  },
  {
    id: 3,
    topic: "Minnow",
    question:
      "Throughout the book, Minnow inserts rhymes and song lyrics to emphasize her observations, usually about Adam. Is that an effective element? Did it work to highlight any themes?",
  },
  {
    id: 4,
    topic: "Truth & Media",
    question:
      "King Biter's herald, known as Fox, tested Minnow's abilities as a bard, emphasizing her ability to distinguish true statements from false. In Walsh's stories, this is a recurring ability of all true bards. Do the media of our own society have this ability? Do they use it effectively?",
  },
  {
    id: 5,
    topic: "Craft & Structure",
    question:
      "Walsh chose to forego numbering the thirteen chapters, using only names. Was that unexpected? Was the absence of chapter numbers ever an issue?",
  },
  {
    id: 6,
    topic: "Migrants & Xenophobia",
    question:
      "In the chapter \"Day Two,\" Minnow delivers an impassioned monologue on migrants, titled \"Abide.\" How does that distill the story's antipathy toward Adam's xenophobia? Does the ad absurdum idea of prohibiting the daily migration of the sun say anything useful about migrants in general? Does reading \"Abide\" aloud change your sense of Minnow's message?",
  },
  {
    id: 7,
    topic: "Minnow",
    question:
      "The next-to-last chapter, \"Fog Bank,\" shows Minnow as an independent heroine. Were you ready for her to grow in that way?",
  },
  {
    id: 8,
    topic: "Justice",
    question:
      "Adam acquires a troll as his squire, who then takes Adam to the cleaners. Was there justice in the squire's claims? Malice? Comeuppance? Grift?",
  },
  {
    id: 9,
    topic: "Justice",
    question:
      "The troll known as Squire enlists the aid of a dragon to hold court and enforce his claims. Adam assumes he can always appeal but there can be no appeal from a dragon's judgment. How would society change if dragons occasionally held court?",
  },
  {
    id: 10,
    topic: "Back Matter",
    question:
      "The book includes extensive back matter. Rules of the guild of squires are summarized. A comprehensive hierarchy of dragons is described. Minnow's rhymes and lyrics are collected for easy consideration. The Glossary explains many of the terms and names, such as the origins of dragon names. The Kindle ebook also included X-Ray references. Did you use any of the back matter or X-Ray options? Was it interesting? Helpful?",
  },
  {
    id: 11,
    topic: "Adam & Minnow",
    question:
      "Some reviewers perceived an emerging friendship between Adam and Minnow. Did you see any evidence of friendship? Were other readers seeing what they expected, rather than the story as written? As a basis for comradery, is a shared timeline the same as shared experiences?",
  },
  {
    id: 12,
    topic: "Timeline",
    question:
      "Thinking about the arc of the story, how many hours transpire from the time the dying messenger reaches the castle in Leftovria to the point where the dragon Lysander departs?",
  },
  {
    id: 13,
    topic: "The Ending",
    question:
      "Did you find the end of the quest to be satisfying? Would you classify it as history, comedy, or tragedy? Or perhaps a hybrid that is something else? What kind of ending would be needed for each of the three traditional classifications? Do any satisfy the reader better?",
  },
  {
    id: 14,
    topic: "The Ending",
    question:
      "In the last chapter, Minnow holds a dance marathon with the four male bards of Leftovria. Why?",
  },
  {
    id: 15,
    topic: "Genre",
    question:
      "Books in the fantasy genre may be broadly categorized as high fantasy or low fantasy. Which is the better fit for Prince Adam's Quest?",
  },
] as const;

export const FAQS = [
  {
    q: "What reading age is Prince Adam's Quest written for?",
    a: "The novella reads comfortably for older teens and adults. There is no explicit content, but the satire of propaganda, racism and misogyny rewards a reader old enough to recognize what is being satirized — roughly 15 and up, and a frequent pick for adult book clubs.",
  },
  {
    q: "How do you feel about spoilers?",
    a: "The first four words of the book are \"Prince Adam always won,\" and the fun is watching that sentence come apart. Please keep the courtroom, the boots and the final chapter out of your reviews and forum posts, or tuck them behind a clear spoiler warning.",
  },
  {
    q: "Which formats are available?",
    a: "Trade paperback at $12.99 USD and Kindle ebook at $7.99 USD, 167 pages, ISBN 979-8-9924602-3-0. The Kindle edition also carries X-Ray references for the glossary, the guild of squires and the dragon hierarchy.",
  },
  {
    q: "Is there an audiobook?",
    a: "Not yet. Minnow's rhymes and the \"Abide\" monologue were written to be read aloud, so an audio edition is under consideration. Subscribe to the Substack to hear about it first.",
  },
  {
    q: "What is Terrence working on next?",
    a: "More fantasy fiction set in the same world, alongside the ongoing Substack series \"Lessons from the Keyboard,\" which is always free. Performance scripts of his short comedy ROUND TUIT are available now from Brooklyn Publishers.",
  },
  {
    q: "Can book clubs order in bulk?",
    a: "Yes. Write to tamaroa79@gmail.com with your group size and delivery date for bulk pricing through Bent Nail Press® LLC. The Reading Group Guide on this site is free to print and share with your group.",
  },
  {
    q: "Will the author join our book club meeting?",
    a: "Often, yes — virtually, and sometimes in person on Cape Cod. Use the contact form and mention your meeting date.",
  },
] as const;

// Placeholder editorial previews. Swap for the live Substack feed or a CMS.
// Integration note: fetch https://<publication>.substack.com/feed in a server
// function and map <item> entries onto this same shape.
export const BLOG_POSTS = [
  {
    slug: "four-words-that-wrote-a-book",
    title: "The Four Words That Wrote a Book",
    date: "2026-08-14",
    readingTime: "6 min read",
    topic: "Craft",
    excerpt:
      "\"Prince Adam always won.\" I wrote it as an opening and it turned out to be an argument. Everything after it exists to test whether the sentence is true.",
  },
  {
    slug: "bards-and-the-burden-of-truth",
    title: "Bards and the Burden of Truth",
    date: "2026-07-02",
    readingTime: "8 min read",
    topic: "Storytelling",
    excerpt:
      "In my stories a true bard can tell a true statement from a false one. That is not a magic power. It is a job description, and it is one our own storytellers keep resigning from.",
  },
  {
    slug: "short-story-that-grew-trolls",
    title: "The Short Story That Grew Trolls",
    date: "2026-05-21",
    readingTime: "5 min read",
    topic: "Revision",
    excerpt:
      "It was going to end swiftly and on fire. Then a troll asked for his fee, an apprentice bard started rhyming, and the draft quietly became a novella.",
  },
  {
    slug: "writing-to-be-read-aloud",
    title: "Writing to Be Read Aloud",
    date: "2026-04-09",
    readingTime: "7 min read",
    topic: "Poetry",
    excerpt:
      "\"Abide\" was drafted at a kitchen table and rewritten out loud on a beach. If a line will not survive the wind, it will not survive a reader either.",
  },
  {
    slug: "bees-deadlines-and-patience",
    title: "Bees, Deadlines and Patience",
    date: "2026-02-27",
    readingTime: "4 min read",
    topic: "The Writing Life",
    excerpt:
      "Thirty years in the Coast Guard taught me schedules. The hives taught me what to do when the schedule is not the one in charge.",
  },
  {
    slug: "no-chapter-numbers",
    title: "Why the Chapters Have No Numbers",
    date: "2026-01-16",
    readingTime: "5 min read",
    topic: "Craft",
    excerpt:
      "Thirteen chapters, thirteen names, no numerals. A small decision that changed how readers hold the shape of the book in their heads.",
  },
] as const;

// Placeholder community threads. Wire to a real database + auth when the forum launches.
export const FORUM_THREADS = [
  {
    title: "How many hours does the quest actually take?",
    category: "Close Reading",
    replies: 24,
    lastActive: "2 days ago",
    excerpt:
      "Counting from the dying messenger at the castle gate in Leftovria to the moment Lysander departs. Post your tally and your evidence.",
  },
  {
    title: "History, comedy or tragedy? Vote and defend it",
    category: "The Ending",
    replies: 41,
    lastActive: "5 hours ago",
    excerpt: "Spoilers on, clearly marked. Make the case for your classification — or for a fourth one.",
  },
  {
    title: "Reading \"Abide\" aloud changed the chapter for me",
    category: "Minnow's Lyrics",
    replies: 17,
    lastActive: "1 week ago",
    excerpt: "Has anyone performed it for their group? Curious how it lands with an audience rather than on the page.",
  },
  {
    title: "Squire's claims: justice, malice, comeuppance or grift?",
    category: "Justice",
    replies: 33,
    lastActive: "3 days ago",
    excerpt: "The guild rules in the back matter complicate this more than I expected on a first read.",
  },
] as const;

export const DONATION_TIERS = [
  {
    name: "Buy the Author a Jar of Cape Cod Honey",
    amount: "$10",
    body: "A small thank-you that keeps the hives in frames and the writer in coffee. Comes with a personal note by email.",
    featured: false,
  },
  {
    name: "Supporter of the Realm",
    amount: "$50",
    body: "Underwrites cover art, editing and proof copies for the next book. Your name joins the supporters list in the back matter, if you'd like it there.",
    featured: true,
  },
  {
    name: "Patron of Bent Nail Press",
    amount: "Choose your amount",
    body: "For readers, book clubs and small libraries who want to fund the whole imprint rather than a single title.",
    featured: false,
  },
] as const;

export const EXCERPT = {
  chapter: "Chapter: The Messenger",
  paragraphs: [
    "Prince Adam always won.",
    "He won at draughts, at riddles, at the long archery of a summer afternoon, and he won at argument, which he considered the noblest of the four. That he won at argument chiefly by continuing to speak after everyone else had stopped was a detail Adam did not include in his accounting.",
    "So when the messenger came up the causeway at a dead run and fell in the gravel of the outer ward with a dragon's name on his lips, the prince felt the familiar clean certainty settle over him, the way a good cloak settles over good shoulders.",
    "\"A dragon,\" said Adam. \"Then it is decided.\"",
    "In the shadow of the gate, a small person with a lute and a larger opinion wrote something down.",
    "\"Your pardon, Highness,\" she said. \"What is decided?\"",
    "\"That I shall slay it.\"",
    "\"Ah,\" said Minnow, and underlined the word shall. \"And what is known?\"",
  ],
  note: "Sample text shown for preview purposes. Replace with the publisher-approved excerpt from the final manuscript.",
} as const;
