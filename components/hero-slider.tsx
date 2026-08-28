"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BedDouble, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {src:"/images/hero-exterior.webp", alt:"Ceylon Vintage Verandha private villa exterior and garden", eyebrow:"A private three-bedroom villa in Ganemulla", title:<>Your Sri Lankan home,<br/><em>ready when you return.</em></>, text:"A spacious vacation rental for overseas families, expats and longer holiday stays—approximately 24 km from Bandaranaike International Airport."},
  {src:"/images/hero-living.webp", alt:"Bright living room at Ceylon Vintage Verandha", eyebrow:"The whole villa is yours", title:<>Live together.<br/><em>Stay comfortably.</em></>, text:"Multiple living spaces, a fitted kitchen, garden and broad verandha give your family room to settle in."},
  {src:"/images/hero-bedroom.webp", alt:"Comfortable double bedroom prepared for guests", eyebrow:"A stay made for real life", title:<>Rest well.<br/><em>Stay a little longer.</em></>, text:"Three comfortable bedrooms and a minimum five-night stay make home visits and family holidays feel unrushed."},
];

export function HeroSlider(){
  const [active,setActive]=useState(0);
  useEffect(()=>{const timer=setInterval(()=>setActive(v=>(v+1)%slides.length),6500);return()=>clearInterval(timer)},[]);
  const move=(step:number)=>setActive(v=>(v+step+slides.length)%slides.length);
  return <section className="hero-slider" aria-label="Villa highlights">
    {slides.map((slide,i)=><div className={`hero-slide ${i===active?"active":""}`} aria-hidden={i!==active} key={slide.src}><Image src={slide.src} alt={slide.alt} fill priority={i===0} sizes="100vw"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow light">{slide.eyebrow}</p><h1>{slide.title}</h1><p>{slide.text}</p><div className="hero-actions"><Link className="button gold" href="/contact#enquire">Check availability <ArrowRight/></Link><Link className="text-link light-link" href="/gallery">View the villa</Link></div></div></div>)}
    <div className="slider-controls"><button onClick={()=>move(-1)} aria-label="Previous slide"><ArrowLeft/></button><span>{String(active+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span><button onClick={()=>move(1)} aria-label="Next slide"><ArrowRight/></button></div>
    <div className="quick-facts"><span><BedDouble/> Entire 3-bedroom villa</span><span><MapPin/> Ganemulla, Sri Lanka</span><span><Clock3/> Minimum 5 nights</span></div>
  </section>;
}
