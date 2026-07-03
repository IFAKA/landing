import { aboutItems, faqs, legalPoints, navigation, notProvidedItems, productPoints, siteConfig } from '@/lib/site';

function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro: string; id: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">{eyebrow}</p>
      <h2 id={id} className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{intro}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 border-b border-neutral-200/70 bg-white/90">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[-0.01em] text-neutral-950" aria-label="Go to homepage">
          AI Analysis Software
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-opacity hover:opacity-60 focus-visible:opacity-60">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="flex min-h-svh items-center border-b border-neutral-200 px-6 pt-24 lg:px-8" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-7xl gap-12 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-center 2xl:max-w-[88rem]">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">Software-only AI workflows</p>
          <h1 id="hero-title" className="mt-6 text-5xl font-semibold tracking-[-0.065em] text-neutral-950 sm:text-7xl lg:text-8xl">
            AI Software for Information Analysis
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600 sm:text-2xl sm:leading-10">
            We build AI-powered software that helps users organize, analyze and understand publicly available information through intuitive web applications.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" aria-label="Primary actions">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-opacity hover:opacity-80 focus-visible:opacity-80"
            >
              Contact
            </a>
            <a
              href={siteConfig.githubUrl}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-950 transition-opacity hover:opacity-60 focus-visible:opacity-60"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <aside className="max-w-md border-l border-neutral-200 pl-6 text-sm leading-7 text-neutral-600 lg:justify-self-end" aria-label="Business summary">
          <p className="font-medium text-neutral-950">Built for information-heavy work.</p>
          <p className="mt-3">No physical goods, no managed funds, no financial services. Customers purchase access to software only.</p>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-neutral-200 px-6 py-24 sm:py-32 lg:px-8" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          id="about-title"
          title="Focused software for reviewing information."
          intro="We develop software products and developer tools, including AI web applications, SaaS, digital products, and productivity software."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-neutral-950">What we provide</h3>
            <ul className="mt-6 space-y-5 text-neutral-600">
              {aboutItems.map((item) => (
                <li key={item} className="border-t border-neutral-200 pt-5 leading-8">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-neutral-950">We do NOT provide</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-500">We explicitly do not provide the following regulated or professional activities.</p>
            <ul className="mt-6 space-y-5 text-neutral-600">
              {notProvidedItems.map((item) => (
                <li key={item} className="border-t border-neutral-200 pt-5 leading-8">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="product" className="border-b border-neutral-200 px-6 py-24 sm:py-32 lg:px-8" aria-labelledby="product-title">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Product"
          id="product-title"
          title="Software access, not a service package."
          intro="Customers purchase access to software only, including software subscriptions, digital access, and optional support."
        />
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {productPoints.map((point, index) => (
            <article key={point} className="border border-neutral-200 p-6">
              <p className="text-sm font-medium text-neutral-500">0{index + 1}</p>
              <p className="mt-6 leading-8 text-neutral-700">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-b border-neutral-200 px-6 py-24 sm:py-32 lg:px-8" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          id="faq-title"
          title="Clear boundaries before purchase."
          intro="Short answers for customers, payment review, and account verification."
        />
        <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq) => (
            <article key={faq.question} className="grid gap-4 py-8 lg:grid-cols-[0.8fr_1.2fr]">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-neutral-950">{faq.question}</h3>
              <p className="leading-8 text-neutral-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legal() {
  return (
    <section id="legal" className="px-6 py-24 sm:py-32 lg:px-8" aria-labelledby="legal-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Legal"
          id="legal-title"
          title="Privacy and terms summary."
          intro="This summary explains the basic Privacy Policy and Terms of Service boundaries for software purchases."
        />
        <ul className="mt-16 grid gap-4 lg:grid-cols-2">
          {legalPoints.map((point) => (
            <li key={point} className="border border-neutral-200 p-6 leading-8 text-neutral-600">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10 lg:px-8" aria-label="Footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a href={`mailto:${siteConfig.email}`} className="transition-opacity hover:opacity-60 focus-visible:opacity-60">
            {siteConfig.email}
          </a>
          <a href={siteConfig.githubUrl} className="transition-opacity hover:opacity-60 focus-visible:opacity-60" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Product />
        <FAQ />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
