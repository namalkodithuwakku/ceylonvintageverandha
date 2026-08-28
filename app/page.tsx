import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Clock3, Home as HomeIcon, Plane, Users } from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { PageShell } from "@/components/page-shell";

const faq = [
  ["Is Ceylon Vintage Verandha a full private villa?", "Yes. Guests reserve the whole three-bedroom home, including the living areas, kitchen, verandha and garden."],
  ["Is the villa suitable for overseas Sri Lankan families?", "Yes. The space and five-night minimum are especially practical for family holidays, home visits and longer stays."],
  ["How far is the villa from the airport?", "The property is approximately 24 km from Bandaranaike International Airport, subject to the route and traffic."],
  ["What is the minimum stay?", "The minimum stay is five nights. Extended-stay rates are available from the sixth night."],
];

export default function Home() {
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))};
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    <HeroSlider />
    <section className="split intro section-pad"><div><p className="eyebrow">A real home for your Sri Lankan stay</p><h2>Come home to space, privacy and an easier pace.</h2></div><div><p>Ceylon Vintage Verandha is a full three-bedroom vacation rental in a residential part of Ganemulla. It is designed for overseas Sri Lankan families, expats and holiday visitors who want to live comfortably, stay close to family and travel onward with ease.</p><Link href="/stay" className="text-link">Explore the full villa <ArrowRight/></Link></div></section>
    <section className="audience-section section-pad"><div className="section-heading"><p className="eyebrow">Built for the way you come home</p><h2>More useful than a hotel room.<br/><em>More personal, too.</em></h2></div><div className="audience-grid"><article><Users/><h3>Returning families</h3><p>A private base for Sri Lankan families living overseas—whether visiting relatives, attending a family event or spending the holidays back home.</p></article><article><Plane/><h3>Overseas guests</h3><p>A comfortable arrival or departure stay with the airport approximately 24 km away and convenient road connections beyond Ganemulla.</p></article><article><HomeIcon/><h3>Longer stays</h3><p>Three bedrooms, a fitted kitchen and generous shared spaces make the villa practical for vacations of five nights or more.</p></article></div></section>
    <section className="image-story section-pad"><div className="story-large"><Image src="/images/verandha-premium.webp" alt="Covered verandha and garden seating at the private villa in Ganemulla" fill sizes="(max-width: 800px) 100vw, 58vw"/></div><div className="story-copy"><p className="eyebrow">Space to live together</p><h2>The whole house is yours.</h2><p>Settle into multiple living areas, share meals, enjoy the broad verandha and keep everyone comfortably under one roof—without giving up the privacy of a residential home.</p><div className="mini-image"><Image src="/images/kitchen-premium.webp" alt="Fitted kitchen for self-catering and longer stays" fill sizes="360px"/></div></div></section>
    <section className="stay-highlights section-pad"><div className="section-heading"><p className="eyebrow light">A practical private stay</p><h2>Everything you need to settle in.</h2></div><div className="highlight-grid"><article><BedDouble/><h3>Three bedrooms</h3><p>King, queen and single-bed arrangements for families and small groups.</p></article><article><HomeIcon/><h3>Full-home privacy</h3><p>Living areas, kitchen, verandha and garden reserved together as one private villa.</p></article><article><Clock3/><h3>Made for longer visits</h3><p>A five-night minimum with extended-stay value from the sixth night.</p></article></div></section>
    <section className="location-strip"><Image src="/images/front-premium.webp" alt="Front exterior of Ceylon Vintage Verandha vacation rental in Ganemulla" fill sizes="100vw"/><div className="location-card"><p className="eyebrow">Connected residential location</p><h2>Stay near the people and places that matter.</h2><p>Ganemulla is a lived-in local neighbourhood—not a tourist strip. That makes the villa a practical base for family visits, airport-area stays and travel around the western region.</p><div className="distance-grid"><span><b>Approx. 24 km</b> to Bandaranaike International Airport</span><span><b>Approx. 9 km</b> to Kadawatha Expressway Exit</span></div><Link className="button dark" href="/contact#enquire">Check your dates <ArrowRight/></Link></div></section>
    <section className="faq section-pad"><div><p className="eyebrow">Before you book</p><h2>Good to know.</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  </PageShell>;
}
