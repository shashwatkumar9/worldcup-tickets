"use client"

import { Ticket, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { LanguageLink } from "@/components/i18n/LanguageLink"
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher"

// Top 15 Teams for Footer (Only Qualified Teams)
const top15Teams = [
  { name: "Argentina World Cup 2026 Tickets", href: "/teams/argentina-world-cup-2026-tickets" },
  { name: "Brazil World Cup 2026 Tickets", href: "/teams/brazil-world-cup-2026-tickets" },
  { name: "France World Cup 2026 Tickets", href: "/teams/france-world-cup-2026-tickets" },
  { name: "England World Cup 2026 Tickets", href: "/teams/england-world-cup-2026-tickets" },
  { name: "Spain World Cup 2026 Tickets", href: "/teams/spain-world-cup-2026-tickets" },
  { name: "Germany World Cup 2026 Tickets", href: "/teams/germany-world-cup-2026-tickets" },
  { name: "Portugal World Cup 2026 Tickets", href: "/teams/portugal-world-cup-2026-tickets" },
  { name: "Netherlands World Cup 2026 Tickets", href: "/teams/netherlands-world-cup-2026-tickets" },
  { name: "Belgium World Cup 2026 Tickets", href: "/teams/belgium-world-cup-2026-tickets" },
  { name: "Croatia World Cup 2026 Tickets", href: "/teams/croatia-world-cup-2026-tickets" },
  { name: "USA World Cup 2026 Tickets", href: "/teams/usa-world-cup-2026-tickets" },
  { name: "Mexico World Cup 2026 Tickets", href: "/teams/mexico-world-cup-2026-tickets" },
  { name: "Canada World Cup 2026 Tickets", href: "/teams/canada-world-cup-2026-tickets" },
  { name: "Uruguay World Cup 2026 Tickets", href: "/teams/uruguay-world-cup-2026-tickets" },
  { name: "Colombia World Cup 2026 Tickets", href: "/teams/colombia-world-cup-2026-tickets" },
]

// All 16 Venues for Footer
const allVenues = [
  { name: "MetLife Stadium World Cup 2026 Tickets", href: "/venues/metlife-stadium-world-cup-2026-tickets" },
  { name: "SoFi Stadium World Cup 2026 Tickets", href: "/venues/sofi-stadium-world-cup-2026-tickets" },
  { name: "AT&T Stadium World Cup 2026 Tickets", href: "/venues/att-stadium-world-cup-2026-tickets" },
  { name: "Mercedes-Benz Stadium World Cup 2026 Tickets", href: "/venues/mercedes-benz-stadium-world-cup-2026-tickets" },
  { name: "Hard Rock Stadium World Cup 2026 Tickets", href: "/venues/hard-rock-stadium-world-cup-2026-tickets" },
  { name: "NRG Stadium World Cup 2026 Tickets", href: "/venues/nrg-stadium-world-cup-2026-tickets" },
  { name: "Lincoln Financial Field World Cup 2026 Tickets", href: "/venues/lincoln-financial-field-world-cup-2026-tickets" },
  { name: "Lumen Field World Cup 2026 Tickets", href: "/venues/lumen-field-world-cup-2026-tickets" },
  { name: "Levi's Stadium World Cup 2026 Tickets", href: "/venues/levis-stadium-world-cup-2026-tickets" },
  { name: "Gillette Stadium World Cup 2026 Tickets", href: "/venues/gillette-stadium-world-cup-2026-tickets" },
  { name: "Arrowhead Stadium World Cup 2026 Tickets", href: "/venues/arrowhead-stadium-world-cup-2026-tickets" },
  { name: "Estadio Azteca World Cup 2026 Tickets", href: "/venues/estadio-azteca-world-cup-2026-tickets" },
  { name: "Estadio Akron World Cup 2026 Tickets", href: "/venues/estadio-akron-world-cup-2026-tickets" },
  { name: "Estadio BBVA World Cup 2026 Tickets", href: "/venues/estadio-bbva-world-cup-2026-tickets" },
  { name: "BMO Field World Cup 2026 Tickets", href: "/venues/bmo-field-world-cup-2026-tickets" },
  { name: "BC Place World Cup 2026 Tickets", href: "/venues/bc-place-world-cup-2026-tickets" },
]

// Major Fixtures - Group Stage Clashes + Knockouts
const majorGroupFixtures = [
  { name: "USA vs Mexico World Cup 2026 Tickets", href: "/fixtures/usa-vs-mexico-world-cup-2026-tickets" },
  { name: "Brazil vs Morocco World Cup 2026 Tickets", href: "/fixtures/brazil-vs-morocco-world-cup-2026-tickets" },
  { name: "Argentina vs Algeria World Cup 2026 Tickets", href: "/fixtures/argentina-vs-algeria-world-cup-2026-tickets" },
  { name: "England vs Croatia World Cup 2026 Tickets", href: "/fixtures/england-vs-croatia-world-cup-2026-tickets" },
  { name: "France vs Norway World Cup 2026 Tickets", href: "/fixtures/france-vs-norway-world-cup-2026-tickets" },
  { name: "Spain vs Uruguay World Cup 2026 Tickets", href: "/fixtures/spain-vs-uruguay-world-cup-2026-tickets" },
  { name: "Germany vs Korea World Cup 2026 Tickets", href: "/fixtures/germany-vs-korea-world-cup-2026-tickets" },
  { name: "Portugal vs Colombia World Cup 2026 Tickets", href: "/fixtures/portugal-vs-colombia-world-cup-2026-tickets" },
]

const knockoutFixtures = [
  { name: "Round of 32 World Cup 2026 Tickets", href: "/fixtures/round-of-32-world-cup-2026-tickets" },
  { name: "Round of 16 World Cup 2026 Tickets", href: "/fixtures/round-of-16-world-cup-2026-tickets" },
  { name: "Quarter-Finals World Cup 2026 Tickets", href: "/fixtures/quarter-finals-world-cup-2026-tickets" },
  { name: "Semi-Finals World Cup 2026 Tickets", href: "/fixtures/semi-finals-world-cup-2026-tickets" },
  { name: "Third Place World Cup 2026 Tickets", href: "/fixtures/third-place-world-cup-2026-tickets" },
]

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  help: [
    { name: "FAQ", href: "/faq" },
    { name: "How to Buy", href: "/how-to-buy" },
    { name: "Delivery Info", href: "/delivery" },
    { name: "Returns", href: "/returns" },
    { name: "Support", href: "/support" },
  ],
}

export function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Top 15 Teams */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Top Teams</h3>
            <ul className="space-y-2">
              {top15Teams.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </div>

          {/* All 16 Venues */}
          <div>
            <h3 className="mb-4 font-semibold text-white">All Venues</h3>
            <ul className="space-y-2">
              {allVenues.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Group Stage Clashes */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Group Stage Clashes</h3>
            <ul className="space-y-2">
              {majorGroupFixtures.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 font-semibold text-white">Knockout Rounds</h3>
            <ul className="space-y-2">
              {knockoutFixtures.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
              <li>
                <LanguageLink
                  href="/fixtures/final-world-cup-2026-tickets"
                  className="text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1"
                >
                  🏆 FIFA World Cup 2026 Final Tickets
                </LanguageLink>
              </li>
            </ul>
          </div>

          {/* Company & Help */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 font-semibold text-white">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <LanguageLink href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Languages</h3>
            <div className="mb-4">
              <LanguageSwitcher variant="footer" />
            </div>

            <h3 className="mb-4 mt-6 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <LanguageLink href="/fifa-world-cup-2026-tickets" className="text-xs hover:text-yellow-400 transition-colors font-semibold">
                  🏆 FIFA World Cup 2026 Tickets
                </LanguageLink>
              </li>
              <li>
                <LanguageLink href="/blog" className="text-xs hover:text-white transition-colors">
                  Blog & News
                </LanguageLink>
              </li>
              <li>
                <LanguageLink href="/teams" className="text-xs hover:text-white transition-colors">
                  All Teams
                </LanguageLink>
              </li>
              <li>
                <LanguageLink href="/venues" className="text-xs hover:text-white transition-colors">
                  All Stadiums
                </LanguageLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <LanguageLink href="/" className="flex items-center gap-2">
                <Ticket className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-white">WorldCup-Tickets</span>
              </LanguageLink>
              <span className="text-xs text-slate-500">
                © {new Date().getFullYear()} WorldCup-Tickets.net. All Rights Reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-slate-500 md:justify-start">
            <LanguageLink href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </LanguageLink>
            <LanguageLink href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </LanguageLink>
            <LanguageLink href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </LanguageLink>
            <LanguageLink href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </LanguageLink>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-slate-500">
            Disclaimer: WorldCup-Tickets.net is a ticket comparison and affiliate site. We are not
            affiliated with any sports organization, team, or venue. Prices shown are from third-party
            ticket sellers and may change without notice.
          </p>
        </div>
      </div>
    </footer>
  )
}
