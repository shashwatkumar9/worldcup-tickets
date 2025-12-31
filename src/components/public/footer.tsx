import Link from "next/link"
import { Ticket, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  competitions: [
    { name: "FIFA World Cup 2026", href: "/fifa-world-cup-2026-tickets" },
    { name: "Olympics 2028", href: "/summer-olympics-2028-tickets" },
    { name: "Euro 2028", href: "/euro-2028-tickets" },
    { name: "Cricket World Cup", href: "/cricket-world-cup-tickets" },
    { name: "Rugby World Cup", href: "/rugby-world-cup-tickets" },
    { name: "NBA Finals", href: "/nba-finals-tickets" },
    { name: "Super Bowl", href: "/super-bowl-tickets" },
    { name: "MLB World Series", href: "/mlb-world-series-tickets" },
    { name: "Stanley Cup", href: "/stanley-cup-tickets" },
    { name: "MLS Cup", href: "/mls-cup-tickets" },
  ],
  teams: [
    { name: "Argentina", href: "/argentina-tickets" },
    { name: "Brazil", href: "/brazil-tickets" },
    { name: "USA", href: "/usa-tickets" },
    { name: "Germany", href: "/germany-tickets" },
    { name: "France", href: "/france-tickets" },
    { name: "England", href: "/england-tickets" },
    { name: "LA Lakers", href: "/la-lakers-tickets" },
    { name: "Dallas Cowboys", href: "/dallas-cowboys-tickets" },
    { name: "India Cricket", href: "/india-cricket-tickets" },
    { name: "All Blacks", href: "/all-blacks-tickets" },
  ],
  fixtures: [
    { name: "USA vs Mexico", href: "/usa-vs-mexico-tickets" },
    { name: "Brazil vs Argentina", href: "/brazil-vs-argentina-tickets" },
    { name: "World Cup Final 2026", href: "/world-cup-final-2026-tickets" },
    { name: "India vs Pakistan", href: "/india-vs-pakistan-tickets" },
    { name: "Super Bowl LIX", href: "/super-bowl-lix-tickets" },
    { name: "NBA Finals Game 7", href: "/nba-finals-game-7-tickets" },
  ],
  venues: [
    { name: "MetLife Stadium", href: "/metlife-stadium-tickets" },
    { name: "SoFi Stadium", href: "/sofi-stadium-tickets" },
    { name: "Wembley Stadium", href: "/wembley-stadium-tickets" },
    { name: "Madison Square Garden", href: "/madison-square-garden-tickets" },
    { name: "Azteca Stadium", href: "/azteca-stadium-tickets" },
  ],
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

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Competitions */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Top Competitions</h3>
            <ul className="space-y-2">
              {footerLinks.competitions.slice(0, 8).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Popular Teams</h3>
            <ul className="space-y-2">
              {footerLinks.teams.slice(0, 8).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fixtures */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Hot Fixtures</h3>
            <ul className="space-y-2">
              {footerLinks.fixtures.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 font-semibold text-white">Top Venues</h3>
            <ul className="space-y-2">
              {footerLinks.venues.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Help */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 font-semibold text-white">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <Link
                    href={lang.code === "en" ? "/" : `/${lang.code}`}
                    className="flex items-center gap-2 text-sm hover:text-white"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </Link>
                </li>
              ))}
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
              <Link href="/" className="flex items-center gap-2">
                <Ticket className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-white">WorldCup-Tickets</span>
              </Link>
              <span className="text-sm text-slate-500">
                © {new Date().getFullYear()} WorldCup-Tickets.net. All Rights Reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-500 md:justify-start">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
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
