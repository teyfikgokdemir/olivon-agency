"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

export function GlobalSiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div className="global-site-header"><SiteHeader /></div>;
}
