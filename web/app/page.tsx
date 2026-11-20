import { DiscoveryPreview } from "@/components/landing/discovery-preview";
import { FiveStops } from "@/components/landing/five-stops";
import { Hero } from "@/components/landing/hero";
import { Join } from "@/components/landing/join";
import { Mission } from "@/components/landing/mission";
import { Paradox } from "@/components/landing/paradox";
import { Container, Kicker, SectionTitle } from "@/components/landing/primitives";
import { AppSection, Experiences, RealImpact, Stories } from "@/components/landing/sections";
import { SiteFooter } from "@/components/site/site-footer";
import { WebsiteChat } from "@/components/site/website-chat";
import { SiteHeader } from "@/components/site/site-header";
import { getLandingData } from "@/lib/landing-data";

export default async function HomePage() {
  const data = await getLandingData();
  return (
    <>
      <SiteHeader faqs={data.faqs.map((f) => ({ id: f.id, question: f.question }))} />
      <main id="main">
        <Hero snapshot={data.snapshot} />
        <Paradox facts={data.facts} />
        <Mission />
        <FiveStops />
        <section id="discover" aria-labelledby="discover-title" className="bg-bg py-24 text-text">
          <Container>
            <Kicker className="text-ocean">Live food discovery</Kicker>
            <SectionTitle id="discover-title">Surplus food, right now.</SectionTitle>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              A privacy-safe preview of what donors have listed. Verified receivers see full details, distance and safety notes.
            </p>
            <DiscoveryPreview listings={data.preview} configured={data.configured} />
          </Container>
        </section>
        <Experiences />
        <RealImpact snapshot={data.snapshot} />
        <Stories testimonials={data.testimonials} />
        <AppSection app={data.app} />
        <Join faqs={data.faqs} />
      </main>
      <SiteFooter />
      <WebsiteChat />
      <section aria-labelledby="team-heading" className="relative isolate overflow-hidden bg-ink text-cream">
        <svg aria-hidden="true" viewBox="0 0 1440 36" preserveAspectRatio="none" className="block h-6 w-full text-butter">
          <path fill="currentColor" d="M0 0h1440v8c-260 44-420-13-700 8S220 40 0 12Z" />
        </svg>
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <h2 id="team-heading" className="font-display text-4xl leading-tight md:text-6xl">
            The team behind <em className="text-sunshine">AnnSetu.</em>
          </h2>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Asuthosh Yadav", "Nupur Shree", "Devanshu Bhargava", "Tanshik Choudary"].map((name) => (
              <li key={name} className="border-t border-cream/30 py-4 font-label text-xl font-medium">{name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
