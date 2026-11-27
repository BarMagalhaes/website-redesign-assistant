import { createFileRoute } from "@tanstack/react-router";

const YOUTUBE = "https://www.youtube.com/channel/UC80miDhEHVR5IggLIXMR5kw";
const SPOTIFY = "https://open.spotify.com/show/0344VJMUBk2ExjwslpS8GM";
const LATEST = "https://youtu.be/I6cUhHAIiVU";
const EMAIL = "mailto:barbaraisabela@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chama a Mamãe — Podcast de histórias de família" },
      { name: "description", content: "Um podcast sobre as nossas histórias e as da nossa família. Pra ouvir como quem senta à mesa." },
      { property: "og:title", content: "Chama a Mamãe — Podcast" },
      { property: "og:description", content: "Histórias de irmãos, aventuras e opiniões. Pra ouvir como quem senta à mesa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cards = [
  { tag: "YouTube", title: "Todos os episódios", text: "Aventuras, opiniões e muita conversa de irmãos, no nosso canal.", cta: "Ver no YouTube", href: YOUTUBE, tone: "bg-primary text-primary-foreground" },
  { tag: "Spotify", title: "Ouça no Spotify", text: "Prefere só ouvir? A gente também está por lá.", cta: "Ouvir no Spotify", href: SPOTIFY, tone: "bg-accent text-accent-foreground" },
  { tag: "Novo", title: "Último episódio", text: "O episódio mais recente já está no ar. Dá o play e conta pra gente o que achou.", cta: "Assistir agora", href: LATEST, tone: "bg-foreground text-background" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-extrabold">Chama a Mamãe</span>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#episodios" className="hover:text-primary">Episódios</a>
          <a href="#sobre" className="hover:text-primary">Sobre</a>
          <a href="#contato" className="hover:text-primary">Contato</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium">🎙️ Podcast de família</p>
            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight md:text-8xl">
              Chama a <em className="font-medium text-primary">Mamãe</em>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-muted-foreground">
              Um podcast sobre as nossas histórias e as da nossa família. Pra ouvir como quem senta à mesa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={YOUTUBE} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">Assistir no YouTube</a>
              <a href={SPOTIFY} target="_blank" rel="noreferrer" className="rounded-full border-2 border-foreground px-6 py-3 font-medium transition hover:bg-foreground hover:text-background">Ouvir no Spotify</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-accent" />
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-primary" />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2.5rem] bg-card p-8 text-center shadow-xl">
              <span className="text-7xl">☕</span>
              <p className="mt-4 font-display text-2xl italic">“Senta que lá vem história.”</p>
            </div>
          </div>
        </section>

        <section id="episodios" className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-extrabold md:text-5xl">Episódios</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {cards.map((c) => (
                <a key={c.title} href={c.href} target="_blank" rel="noreferrer" className={`group flex flex-col rounded-3xl p-8 transition hover:-translate-y-1 hover:shadow-xl ${c.tone}`}>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-75">{c.tag}</span>
                  <h3 className="mt-3 text-2xl font-extrabold">{c.title}</h3>
                  <p className="mt-3 flex-1 opacity-90">{c.text}</p>
                  <span className="mt-6 font-medium">{c.cta} <span className="inline-block transition group-hover:translate-x-1">→</span></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">Sobre o podcast</h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Aqui a gente conta a vida de irmãos, as nossas aventuras e opiniões. Você vai rir e vai chorar. Nada é pessoal, e qualquer semelhança com alguma situação é mera coincidência. Estamos tentando o melhor, mas podemos errar no caminho.
          </p>
        </section>

        <section id="contato" className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground">
            <h2 className="text-4xl font-extrabold md:text-5xl">Mande sua história</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
              Quer trocar uma ideia, contar um perrengue de família ou sugerir um tema? Chama a gente.
            </p>
            <a href={EMAIL} className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-medium text-accent-foreground transition hover:opacity-90">Escrever pra gente</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Chama a Mamãe · Feito com carinho em família
      </footer>
    </div>
  );
}
