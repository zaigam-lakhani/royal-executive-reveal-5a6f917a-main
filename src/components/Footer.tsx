import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import logoMark from "@/assets/logo-mark.jpeg";

export function Footer() {
  const { t } = useI18n();

  const menu: Array<{ to: string; key: string }> = [
    { to: "/", key: "nav.home" },
    { to: "/about", key: "nav.about" },
    { to: "/real-estate", key: "nav.realEstate" },
    { to: "/mining", key: "nav.mining" },
    { to: "/agribusiness", key: "nav.agribusiness" },
    { to: "/projects", key: "nav.projects" },
    { to: "/association", key: "nav.association" },
    { to: "/contact", key: "nav.contact" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-[oklch(0.09_0.008_60)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-center md:py-20 md:text-left lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" aria-label={t("brand.name")} className="inline-flex items-center gap-3">
            <img
              src={logoMark}
              alt={t("brand.name")}
              className="h-12 w-12 rounded-lg object-contain select-none shadow-gold"
              draggable={false}
            />
            <span className="font-serif text-xl tracking-wide text-ivory">{t("brand.name")}</span>
          </Link>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground md:mx-0">
            {t("footer.about")}
          </p>
        </div>

        {/* Menu */}
        <div className="lg:col-span-5">
          <h4 className="text-xs uppercase tracking-luxury text-gold">{t("nav.home")}</h4>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-ivory/80 sm:grid-cols-2">
            {menu.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="royal-link inline-block transition-colors duration-300 hover:text-gold">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-luxury text-gold">{t("contact.hq")}</h4>
          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t("contact.address")}</span>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:contact@synapsgroup.com" className="royal-link">contact@synapsgroup.com</a>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>+261 34 00 000 00</span>
            </li>
          </ul>
          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] text-ivory/80 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="gold-divider opacity-50" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-muted-foreground md:flex-row md:text-left lg:px-10">
        <span>© {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}</span>
        <span className="uppercase tracking-luxury">{t("footer.cities")}</span>
      </div>
    </footer>
  );
}
