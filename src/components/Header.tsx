import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logoMark from "@/assets/logo-mark.jpeg";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false); // desktop dropdown
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const GROUP_CHILDREN = [
    { to: "/real-estate", label: t("nav.realEstate") },
    { to: "/mining", label: t("nav.mining") },
    { to: "/agribusiness", label: t("nav.agribusiness") },
  ];

  const NAV: NavItem[] = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { label: t("nav.group"), children: GROUP_CHILDREN },
    { to: "/projects", label: t("nav.projects") },
    { to: "/association", label: t("nav.association") },
  ];


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setGroupOpen(false);
    setMobileGroupOpen(false);
  }, [location.pathname]);

  const openGroup = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setGroupOpen(true);
  };
  const scheduleCloseGroup = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setGroupOpen(false), 150);
  };

  const isGroupActive = GROUP_CHILDREN.some((c) => location.pathname.startsWith(c.to));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-[color-mix(in_oklab,var(--gold)_20%,transparent)]"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link to="/" aria-label={t("brand.name")} className="group flex items-center gap-3 shrink-0">
          <img
            src={logoMark}
            alt={t("brand.name")}
            className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-lg object-contain select-none shadow-gold"
            draggable={false}
          />
          <span className="hidden sm:inline font-serif text-lg lg:text-xl tracking-wide text-ivory">
            {t("brand.name")}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={openGroup}
                onMouseLeave={scheduleCloseGroup}
              >
                <button
                  type="button"
                  onClick={() => setGroupOpen((v) => !v)}
                  className={`royal-link flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] transition-colors whitespace-nowrap ${
                    isGroupActive ? "text-gold" : "text-ivory/85 hover:text-gold"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={groupOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${groupOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300 ${
                    groupOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div
                    className="min-w-[240px] rounded-xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-background/95 backdrop-blur-xl p-2 shadow-gold"
                    onMouseEnter={openGroup}
                    onMouseLeave={scheduleCloseGroup}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-lg px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory/85 hover:text-gold hover:bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] transition-all whitespace-nowrap"
                        activeProps={{ className: "text-gold bg-[color-mix(in_oklab,var(--gold)_10%,transparent)]" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="royal-link text-[11px] uppercase tracking-[0.18em] text-ivory/85 hover:text-gold transition-colors whitespace-nowrap"
                activeProps={{ "data-active": "true", className: "text-gold" } as never}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher compact />
          </div>
          <Link
            to="/contact"
            className="hidden xl:inline-flex rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            {t("cta.contact")}
          </Link>
          <button
            aria-label={t("menu.aria")}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] text-ivory xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/95 backdrop-blur-xl xl:hidden transition-all duration-500 ${
          open ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {NAV.map((item) =>
            "children" in item ? (
              <div key={item.label} className="border-b border-[color-mix(in_oklab,var(--gold)_12%,transparent)]">
                <button
                  type="button"
                  onClick={() => setMobileGroupOpen((v) => !v)}
                  className={`flex w-full items-center justify-between py-4 font-serif text-2xl text-ivory hover:text-gold transition-colors ${
                    isGroupActive ? "text-gold" : ""
                  }`}
                  aria-expanded={mobileGroupOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${mobileGroupOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileGroupOpen ? "max-h-96 pb-3" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col ps-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="py-3 font-serif text-lg text-ivory/85 hover:text-gold transition-colors"
                        activeProps={{ className: "text-gold" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-[color-mix(in_oklab,var(--gold)_12%,transparent)] py-4 font-serif text-2xl text-ivory hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="mt-6 sm:hidden flex justify-center">
            <LanguageSwitcher compact />
          </div>
          <Link
            to="/contact"
            className="mt-4 rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            {t("cta.contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
