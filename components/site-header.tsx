"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["Home", "/"], ["The Villa", "/stay"], ["Gallery", "/gallery"], ["Contact", "/contact"]];
export function SiteHeader() { const [open,setOpen]=useState(false); const path=usePathname(); return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">CV</span><span><b>Ceylon Vintage</b><small>Verandha · Ganemulla</small></span></Link><button className="menu-button" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?"nav open":"nav"}>{links.map(([label,href])=><Link key={href} href={href} className={path===href?"active":""} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/contact#enquire" className="nav-cta" onClick={()=>setOpen(false)}>Book your stay</Link></nav></header> }
