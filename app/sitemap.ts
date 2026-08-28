import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://ceylonvintageverandha.vercel.app";return ["","/stay","/gallery","/contact"].map((path,i)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:.8}))}
