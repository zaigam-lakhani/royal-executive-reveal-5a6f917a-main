import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Ruler, Tag, Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PropertyGallery } from "@/components/PropertyGallery";
import { useI18n, propertiesByLang } from "@/i18n/I18nProvider";
import sahaza1 from "@/assets/sahaza-i/01.jpg";
import sahaza2 from "@/assets/sahaza-i/02.jpg";
import sahaza3 from "@/assets/sahaza-i/03.jpg";
import sahaza4 from "@/assets/sahaza-i/04.jpg";
import sahaza5 from "@/assets/sahaza-i/05.jpg";
import sahaza6 from "@/assets/sahaza-i/06.jpg";
import sahaza7 from "@/assets/sahaza-i/07.jpg";
import sahaza8 from "@/assets/sahaza-i/08.jpg";
import sahaza9 from "@/assets/sahaza-i/09.jpg";
import sahaza10 from "@/assets/sahaza-i/10.jpg";
import sahaza11 from "@/assets/sahaza-i/11.jpg";
import sahazaii1 from "@/assets/sahaza-ii/01.jpg";
import sahazaii2 from "@/assets/sahaza-ii/02.jpg";
import sahazaii3 from "@/assets/sahaza-ii/03.jpg";
import sahazaii4 from "@/assets/sahaza-ii/04.jpg";
import sahazaii5 from "@/assets/sahaza-ii/05.jpg";
import sahazaii6 from "@/assets/sahaza-ii/06.jpg";
import sahazaii7 from "@/assets/sahaza-ii/07.jpg";
import sahazaii8 from "@/assets/sahaza-ii/08.jpg";
import sahazaii9 from "@/assets/sahaza-ii/09.jpg";
import sahazaiiMap from "@/assets/sahaza-ii/10-map.jpg";
import sahazaii11 from "@/assets/sahaza-ii/11.jpg";
import sisal3 from "@/assets/toliary-sisal/003.jpg";
import sisal4 from "@/assets/toliary-sisal/004.jpg";
import sisal5 from "@/assets/toliary-sisal/005.jpg";
import sisal6 from "@/assets/toliary-sisal/006.jpg";
import sisal7 from "@/assets/toliary-sisal/007.jpg";
import sisal9 from "@/assets/toliary-sisal/009.jpg";
import sisal10 from "@/assets/toliary-sisal/010.jpg";
import sisal11 from "@/assets/toliary-sisal/011.jpg";
import manambato1 from "@/assets/manambato-rasoabe/01.jpg";
import manambato2 from "@/assets/manambato-rasoabe/02.jpg";
import manambato3 from "@/assets/manambato-rasoabe/03.jpg";
import manambato4 from "@/assets/manambato-rasoabe/04.jpg";
import manambato5 from "@/assets/manambato-rasoabe/05.jpg";
import manambato6 from "@/assets/manambato-rasoabe/06.jpg";
import anakao1 from "@/assets/anakao/01.jpeg";
import anakao2 from "@/assets/anakao/02.jpeg";
import anakao3 from "@/assets/anakao/03.jpeg";
import anakao5 from "@/assets/anakao/05.jpeg";
import anakao6 from "@/assets/anakao/06.jpeg";
import anakao7 from "@/assets/anakao/07.jpeg";
import anakao8 from "@/assets/anakao/08.jpeg";
import anakao9 from "@/assets/anakao/09.jpeg";
import anakao10 from "@/assets/anakao/10.jpeg";
import antetez1 from "@/assets/antetezambaro/01.jpg";
import antetez2 from "@/assets/antetezambaro/02.jpg";
import antetez3 from "@/assets/antetezambaro/03.jpg";
import antetez4 from "@/assets/antetezambaro/04.jpg";
import antetez5 from "@/assets/antetezambaro/05.jpg";
import antetez6 from "@/assets/antetezambaro/06.jpg";
import antetez7 from "@/assets/antetezambaro/07.jpg";
import antetez8 from "@/assets/antetezambaro/08.jpg";
import antetez9 from "@/assets/antetezambaro/09.jpg";
import antetezMap from "@/assets/antetezambaro/10-map.jpg";
import mika1 from "@/assets/mika-antsohihy/01.jpg";
import mika2 from "@/assets/mika-antsohihy/02.jpg";
import mikaMap from "@/assets/mika-antsohihy/03-map.jpg";
import mika4 from "@/assets/mika-antsohihy/04.jpg";
import mikaLake from "@/assets/mika-antsohihy/05-lake.jpg";
import mika6 from "@/assets/mika-antsohihy/06.jpg";
import mika7 from "@/assets/mika-antsohihy/07.jpg";
import mikaAerial from "@/assets/mika-antsohihy/08-aerial.jpg";
import ilo1 from "@/assets/ilo-manana/01.jpg";
import ilo2 from "@/assets/ilo-manana/02.jpg";
import ilo3 from "@/assets/ilo-manana/03.jpg";
import ilo4 from "@/assets/ilo-manana/04.jpg";
import ilo5 from "@/assets/ilo-manana/05.jpg";
import ilo6 from "@/assets/ilo-manana/06.jpg";
import ilo7 from "@/assets/ilo-manana/07.jpg";
import ilo8 from "@/assets/ilo-manana/08.jpg";
import ilo9 from "@/assets/ilo-manana/09.jpg";
import ilo10 from "@/assets/ilo-manana/10.jpg";
import ilo11Asset from "@/assets/ilo-manana-uploads/image-27.png.asset.json";
import ilo12Asset from "@/assets/ilo-manana-uploads/image-28.png.asset.json";
import ilo13Asset from "@/assets/ilo-manana-uploads/image-29.png.asset.json";
import ilo14Asset from "@/assets/ilo-manana-uploads/image-30.png.asset.json";
import ilo15Asset from "@/assets/ilo-manana-uploads/image-31.png.asset.json";
import ampanihy01 from "@/assets/sainte-marie-ampanihy/01.png.asset.json";
import ampanihy02 from "@/assets/sainte-marie-ampanihy/02.png.asset.json";
import ampanihy03 from "@/assets/sainte-marie-ampanihy/03.png.asset.json";
import ampanihy04 from "@/assets/sainte-marie-ampanihy/04.png.asset.json";
import ampanihy05 from "@/assets/sainte-marie-ampanihy/05.png.asset.json";
import ampanihy06 from "@/assets/sainte-marie-ampanihy/06.png.asset.json";
import ampanihy07 from "@/assets/sainte-marie-ampanihy/07.png.asset.json";
import ampanihy08 from "@/assets/sainte-marie-ampanihy/08.png.asset.json";
import ampanihy09 from "@/assets/sainte-marie-ampanihy/09.png.asset.json";
import ampanihy10 from "@/assets/sainte-marie-ampanihy/10.png.asset.json";
import manompagna01 from "@/assets/manompagna-uploads/image-11.png.asset.json";
import manompagna02 from "@/assets/manompagna-uploads/image-12.png.asset.json";
import manompagna03 from "@/assets/manompagna-uploads/image-13.png.asset.json";
import manompagna04 from "@/assets/manompagna-uploads/image-14.png.asset.json";
import manompagna05 from "@/assets/manompagna-uploads/image-15.png.asset.json";
import analanjirofoU1 from "@/assets/analanjirofo-uploads/image-16.png.asset.json";
import analanjirofoU2 from "@/assets/analanjirofo-uploads/image-17.png.asset.json";
import analanjirofoU3 from "@/assets/analanjirofo-uploads/image-18.png.asset.json";
import smc19 from "@/assets/saint-mary-club-uploads/image-19.png.asset.json";
import smc20 from "@/assets/saint-mary-club-uploads/image-20.png.asset.json";
import smc21 from "@/assets/saint-mary-club-uploads/image-21.png.asset.json";
import smc22 from "@/assets/saint-mary-club-uploads/image-22.png.asset.json";
import smc23 from "@/assets/saint-mary-club-uploads/image-23.png.asset.json";
import smc24 from "@/assets/saint-mary-club-uploads/image-24.png.asset.json";
import smc25 from "@/assets/saint-mary-club-uploads/image-25.png.asset.json";
import smc26 from "@/assets/saint-mary-club-uploads/image-26.png.asset.json";
import andohagara32 from "@/assets/andohagara-uploads/image-32.png.asset.json";
import andohagara33 from "@/assets/andohagara-uploads/image-33.png.asset.json";
import andohagara34 from "@/assets/andohagara-uploads/image-34.png.asset.json";
import andohagara35 from "@/assets/andohagara-uploads/image-35.png.asset.json";
import andohagara36 from "@/assets/andohagara-uploads/image-36.png.asset.json";
import andohagara37 from "@/assets/andohagara-uploads/image-37.png.asset.json";
import andohagara38 from "@/assets/andohagara-uploads/image-38.png.asset.json";
import andohagara39 from "@/assets/andohagara-uploads/image-39.png.asset.json";
import andohagara40 from "@/assets/andohagara-uploads/image-40.png.asset.json";
import andohagara41 from "@/assets/andohagara-uploads/image-41.png.asset.json";
import smcMap01 from "@/assets/saint-mary-club-maps/map-01.png.asset.json";
import smcMap02 from "@/assets/saint-mary-club-maps/map-02.png.asset.json";
import relais1 from "@/assets/relais-castle-uploads/image-1.jpg.asset.json";
import relais2 from "@/assets/relais-castle-uploads/image-2.jpg.asset.json";
import relais3 from "@/assets/relais-castle-uploads/image-3.jpg.asset.json";
import relais4 from "@/assets/relais-castle-uploads/image-4.jpg.asset.json";
import relais5 from "@/assets/relais-castle-uploads/image-5.jpg.asset.json";
import relais6 from "@/assets/relais-castle-uploads/image-6.jpg.asset.json";
import relais7 from "@/assets/relais-castle-uploads/image-7.jpg.asset.json";

const SAINT_MARY_CLUB_IMAGES = [
  { src: smc25.url, alt: "Saint Mary Club — Private beach with turquoise lagoon, Sainte-Marie Island" },
  { src: smc21.url, alt: "Saint Mary Club — Whale sculpture in the tropical garden by the pool" },
  { src: smc19.url, alt: "Saint Mary Club — Restaurant interior with tropical decor" },
  { src: smc20.url, alt: "Saint Mary Club — Large restaurant dining hall" },
  { src: smc26.url, alt: "Saint Mary Club — Bungalow interior bedroom with sea view" },
  { src: smc23.url, alt: "Saint Mary Club — Soundproofed bungalow nestled among trees" },
  { src: smc24.url, alt: "Saint Mary Club — Bungalow exterior surrounded by lush vegetation" },
  { src: smc22.url, alt: "Saint Mary Club — Open landscaped grounds of the 21 Ha estate" },
];

const ANDOHAGARA_IMAGES = [
  { src: andohagara32.url, alt: "Andohagara — Amborovy Airport: access tracks and open buildable land near Mahajanga" },
  { src: andohagara33.url, alt: "Andohagara — Amborovy Airport: green flat land with open sky and distant structures" },
  { src: andohagara34.url, alt: "Andohagara — Amborovy Airport: sandy path crossing the grassy property" },
  { src: andohagara35.url, alt: "Andohagara — Amborovy Airport: wide meadow area with mature tree on the plot" },
  { src: andohagara36.url, alt: "Andohagara — Amborovy Airport: panoramic view across the flat secured land" },
  { src: andohagara37.url, alt: "Andohagara — Amborovy Airport: dual-access sandy road approaching the site" },
  { src: andohagara38.url, alt: "Andohagara — Amborovy Airport: vegetated section of the property near neighboring buildings" },
  { src: andohagara39.url, alt: "Andohagara — Amborovy Airport: roadside frontage with native vegetation and blue sky" },
  { src: andohagara40.url, alt: "Andohagara — Amborovy Airport: crossroads-style access area on the property" },
  { src: andohagara41.url, alt: "Andohagara — Amborovy Airport: ground marker detail on sandy soil" },
];


const ANALANJIROFO_IMAGES = [
  { src: analanjirofoU1.url, alt: "Analanjirofo — Soanierana Ivongo: inland path through coconut groves (Lot 1 Felankasina, Ampanihy)" },
  { src: analanjirofoU2.url, alt: "Analanjirofo — Soanierana Ivongo: lush tropical vegetation on the property (Lot 2 Herisoafanjava)" },
  { src: analanjirofoU3.url, alt: "Analanjirofo — Soanierana Ivongo: beachfront with native trees and ocean view (Lot 3 Sahasoa-II)" },
];

const MANOMPAGNA_IMAGES = [
  { src: manompagna01.url, alt: "Manompagna — Coastal land with ocean view and native vegetation" },
  { src: manompagna02.url, alt: "Manompagna — Beachfront with palms and tropical foliage" },
  { src: manompagna03.url, alt: "Manompagna — White sand beach along the shoreline" },
  { src: manompagna04.url, alt: "Manompagna — Lush green inland landscape of the property" },
  { src: manompagna05.url, alt: "Manompagna — Ampanihy dune and coastal vegetation panorama" },
];

const SAINTE_MARIE_AMPANIHY_IMAGES = [
  { src: ampanihy01.url, alt: "Sainte-Marie — Ampanihy 65 Ha: view from afar across Felankasina lake" },
  { src: ampanihy02.url, alt: "Sainte-Marie — Ampanihy 65 Ha: turquoise sea view from boat" },
  { src: ampanihy03.url, alt: "Sainte-Marie — Ampanihy 65 Ha: titled land boundary marker on the beach" },
  { src: ampanihy04.url, alt: "Sainte-Marie — Ampanihy 65 Ha: white sand dunes and ocean horizon" },
  { src: ampanihy05.url, alt: "Sainte-Marie — Ampanihy 65 Ha: beachfront panorama with native vegetation" },
  { src: ampanihy06.url, alt: "Sainte-Marie — Ampanihy 65 Ha: coastal dune landscape" },
  { src: ampanihy07.url, alt: "Sainte-Marie — Ampanihy 65 Ha: lush tropical vegetation on the plot" },
  { src: ampanihy08.url, alt: "Sainte-Marie — Ampanihy 65 Ha: coconut palms and natural pathways" },
  { src: ampanihy09.url, alt: "Sainte-Marie — Ampanihy 65 Ha: green inland landscape of the property" },
  { src: ampanihy10.url, alt: "Sainte-Marie — Ampanihy 65 Ha: beach access through coastal greenery" },
];

const ILO_MANANA_IMAGES = [
  
  { src: ilo2, alt: "Ambohimarina — ILO MANANA: lush lakeside vegetation on Lake Iarivo" },
  { src: ilo3, alt: "Ambohimarina — ILO MANANA: panoramic view across Lake Iarivo" },
  { src: ilo4, alt: "Ambohimarina — ILO MANANA: mature pine grove with lake horizon" },
  { src: ilo5, alt: "Ambohimarina — ILO MANANA: prepared dirt access road on the plot" },
  { src: ilo6, alt: "Ambohimarina — ILO MANANA: open green pasture and pine landscape" },
  { src: ilo7, alt: "Ambohimarina — ILO MANANA: hillside view toward Antananarivo" },
  { src: ilo8, alt: "Ambohimarina — ILO MANANA: existing landscaped area on the estate" },
  { src: ilo9, alt: "Ambohimarina — ILO MANANA: lake view with existing basin and gardens" },
  { src: ilo10, alt: "Ambohimarina — ILO MANANA: Lake Iarivo panorama from the plot" },
  { src: ilo11Asset.url, alt: "Ambohimarina — ILO MANANA: prepared dirt access road across the plateau" },
  { src: ilo12Asset.url, alt: "Ambohimarina — ILO MANANA: pine grove with Lake Iarivo in the background" },
  { src: ilo13Asset.url, alt: "Ambohimarina — ILO MANANA: open grasslands with mature pines and power line access" },
  { src: ilo14Asset.url, alt: "Ambohimarina — ILO MANANA: panoramic view over Lake Iarivo from the property" },
  { src: ilo15Asset.url, alt: "Ambohimarina — ILO MANANA: Lake Iarivo shoreline with reeds and banana trees" },
];

const ANAKAO_IMAGES = [
  { src: anakao10, alt: "Anakao — Turquoise lagoon beach, Soalara" },
  { src: anakao3, alt: "Anakao — White sand and clear turquoise water" },
  { src: anakao7, alt: "Anakao — Ocean view from the land plot" },
  { src: anakao6, alt: "Anakao — Wide private beach at low tide" },
  { src: anakao1, alt: "Anakao — Sea view through coastal vegetation" },
  { src: anakao2, alt: "Anakao — Panoramic coastal landscape" },
  { src: anakao5, alt: "Anakao — Coastal dune with native vegetation" },
  { src: anakao8, alt: "Anakao — Beach dunes and sandstone" },
  { src: anakao9, alt: "Anakao — Land plot with native trees" },
];

const ANTETEZAMBARO_IMAGES = [
  { src: antetez1, alt: "Antetezambaro — 6 Ha land near Tamatave on RN5" },
  { src: antetez2, alt: "Antetezambaro — Lush green plot, Toamasina II" },
  { src: antetez3, alt: "Antetezambaro — Strategic land along RN5 to Foulpointe" },
  { src: antetez4, alt: "Antetezambaro — Ready-to-build secured land" },
  { src: antetez5, alt: "Antetezambaro — Tropical 6 hectare property" },
  { src: antetez6, alt: "Antetezambaro — Access path and surroundings" },
  { src: antetez7, alt: "Antetezambaro — Cleared area on the estate" },
  { src: antetez8, alt: "Antetezambaro — Natural landscape near Ambodiatafana" },
  { src: antetez9, alt: "Antetezambaro — Wide view of the 6 Ha plot" },
];

const MIKA_IMAGES = [
  { src: mikaAerial, alt: "MIKA Antsohihy — Aerial view of the 13,761 Ha estate, Sofia Region" },
  { src: mikaLake, alt: "MIKA Antsohihy — Manjabory Laihininjongy permanent lake inside the site" },
  { src: mika1, alt: "MIKA Antsohihy — Project overview, 13,761 hectares titled land" },
  { src: mika6, alt: "MIKA Antsohihy — Open landscape with grazing herd, Sofia Region" },
  { src: mika7, alt: "MIKA Antsohihy — Inland plains and natural environment" },
  { src: mika4, alt: "MIKA Antsohihy — Emblematic Madagascar wetlands and birdlife" },
  { src: mika2, alt: "MIKA Antsohihy — Smart-agriculture, environment and tourism positioning" },
];

const TOLIARY_SISAL_IMAGES = [
  { src: sisal3, alt: "Toliary-II — Sisal plantation, Agave Sisalana plants" },
  { src: sisal4, alt: "Toliary-II — 45-hectare sisal field, southern Madagascar" },
  { src: sisal5, alt: "Toliary-II — Mature sisal plants under arid climate" },
  { src: sisal6, alt: "Toliary-II — Organic sisal plantation panorama" },
  { src: sisal7, alt: "Toliary-II — Sisal fibre harvest area" },
  { src: sisal9, alt: "Toliary-II — Wide view of the 45 Ha sisal estate" },
  { src: sisal10, alt: "Toliary-II — Sisal rows across the property" },
  { src: sisal11, alt: "Toliary-II — Sisal plantation horizon, South Madagascar" },
];

const MANAMBATO_IMAGES = [
  { src: manambato1, alt: "Manambato — Lake Rasoabe waterfront, 6 hectares" },
  { src: manambato2, alt: "Manambato — 150 m private beach on Lake Rasoabe" },
  { src: manambato3, alt: "Manambato — Lakeside view of the 6 Ha estate" },
  { src: manambato4, alt: "Manambato — Natural setting on Lake Rasoabe" },
  { src: manambato5, alt: "Manambato — Waterfront land panorama" },
  { src: manambato6, alt: "Manambato — Lake Rasoabe beachfront property" },
];


const SAHAZA_II_IMAGES = [
  { src: sahazaii2, alt: "SAHAZA II — Plotted parcels with cleared access roads, Sabotsy Namehana" },
  { src: sahazaii6, alt: "SAHAZA II — Panoramic plots under open sky" },
  { src: sahazaii1, alt: "SAHAZA II — Hilltop view over Sabotsy Namehana" },
  { src: sahazaii3, alt: "SAHAZA II — Lush green parcels and surrounding hills" },
  { src: sahazaii5, alt: "SAHAZA II — Marked plots ready for construction" },
  { src: sahazaii7, alt: "SAHAZA II — Subdivided land with prepared roads" },
  { src: sahazaii9, alt: "SAHAZA II — Wide open buildable land" },
  { src: sahazaii4, alt: "SAHAZA II — Site perimeter and access path" },
  { src: sahazaii8, alt: "SAHAZA II — Pine-lined plots with secured boundary" },
  { src: sahazaii11, alt: "SAHAZA II — Panoramic landscape view across the hills of Sabotsy Namehana" },
];

const RELAIS_CASTLE_IMAGES = [
  { src: relais1.url, alt: "Relais Castle Moroccan — Multi-story building with castle-like crenellated walls and arched openings" },
  { src: relais2.url, alt: "Relais Castle Moroccan — Moroccan-style facade with arched windows" },
  { src: relais3.url, alt: "Relais Castle Moroccan — Courtyard with arches and columns" },
  { src: relais4.url, alt: "Relais Castle Moroccan — Two-story courtyard with arches, columns and blue/white checkered floor with central basin" },
  { src: relais5.url, alt: "Relais Castle Moroccan — View over green rural landscape from the property" },
  { src: relais6.url, alt: "Relais Castle Moroccan — Courtyard with multiple levels of arches, columns and central fountain" },
  { src: relais7.url, alt: "Relais Castle Moroccan — Castle-style facade with crenellated walls, Anosy Avaratra" },
];

const PROPERTY_MAPS: Record<string, { src: string; alt: string }[]> = {
  "saint-mary-club": [
    { src: smcMap01.url, alt: "Saint Mary Club — Location map: Tintingue Bay, Sainte-Marie Island, Manompana, Tanambe" },
    { src: smcMap02.url, alt: "Saint Mary Club — Sainte-Marie Island (Nosy Boraha) site location with Tour Invest Immo S.A" },
  ],
  "antetezambaro": [
    { src: antetezMap, alt: "Antetezambaro — Google Maps location, Toamasina II" },
  ],
  "mika-antsohihy": [
    { src: mikaMap, alt: "MIKA Antsohihy — Sofia Region location map, Northwest Madagascar" },
  ],
  "sahaza-ii": [
    { src: sahazaiiMap, alt: "SAHAZA II — Aerial location map, Antsahamaharafoza" },
  ],
};


const SAHAZA_I_IMAGES = [
  { src: sahaza10, alt: "SAHAZA I — Plotted parcels, Ambatolampy Tsimahafotsy" },
  { src: sahaza2, alt: "SAHAZA I — Panoramic view, Ambatolampy Tsimahafotsy" },
  { src: sahaza9, alt: "SAHAZA I — Become an owner today" },
  { src: sahaza1, alt: "SAHAZA I — Secured access road" },
  { src: sahaza3, alt: "SAHAZA I — Open green parcels" },
  { src: sahaza4, alt: "SAHAZA I — Lifestyle at sunset" },
  { src: sahaza5, alt: "SAHAZA I — Brick-walled site entrance" },
  { src: sahaza6, alt: "SAHAZA I — Spacious land plots" },
  { src: sahaza7, alt: "SAHAZA I — Buildable plot ready for construction" },
  { src: sahaza8, alt: "SAHAZA I — Site perimeter wall" },
  { src: sahaza11, alt: "SAHAZA I — Marked plots with mountain horizon" },
];

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Synaps Real Estate — Premium Properties in Madagascar" },
      { name: "description", content: "Premium residential, hospitality and investment land across Madagascar — Sahaza, Ambohimarina, Mahajanga and Sainte-Marie Island." },
      { property: "og:title", content: "Synaps Real Estate" },
      { property: "og:description", content: "Premium residential, hospitality and investment land across Madagascar — Sahaza, Ambohimarina, Mahajanga and Sainte-Marie." },
    ],
    links: [{ rel: "canonical", href: "https://royal-executive-reveal.lovable.app/real-estate" }],
  }),
  component: RealEstatePage,
});

function RealEstatePage() {
  const { t, lang } = useI18n();
  const PROPERTIES = propertiesByLang[lang];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">{t("re.eyebrow")}</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
              {t("re.title")}
            </h1>
            <p className="mt-6 text-lg text-ivory/75">{t("re.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {t("cta.contact")} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#properties" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                {t("re.explore")}
              </a>
            </div>
          </div>
        </Reveal>

        <div id="properties" className="mt-24 space-y-16">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article id={p.id} className="glass-card scroll-mt-32 rounded-3xl p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-5">
                  <div className="lg:col-span-2 space-y-5">
                    <span className="text-[10px] uppercase tracking-luxury text-gold">{t("re.property")} · {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-serif text-2xl text-ivory sm:text-3xl">{p.title}</h2>
                    {p.subtitle && <p className="text-sm text-gold/90">{p.subtitle}</p>}
                    <div className="gold-divider opacity-50" />
                    <ul className="space-y-3 text-sm text-ivory/85">
                      <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p.location}</li>
                      {p.area && <li className="flex items-start gap-3"><Ruler className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p.area}</li>}
                    </ul>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                        style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                        {t("cta.contact")}
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                        <Calendar className="h-3.5 w-3.5" /> {t("re.scheduleVisit")}
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                        <FileText className="h-3.5 w-3.5" /> {t("re.requestDocs")}
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-6">
                    <PropertyGallery
                      placeholderCount={6}
                      label={p.title}
                      images={p.id === "sahaza-i" ? SAHAZA_I_IMAGES : p.id === "sahaza-ii" ? SAHAZA_II_IMAGES : p.id === "andohagara" ? ANDOHAGARA_IMAGES : p.id === "toliary-sisal" ? TOLIARY_SISAL_IMAGES : p.id === "manambato-rasoabe" ? MANAMBATO_IMAGES : p.id === "anakao-soalara" ? ANAKAO_IMAGES : p.id === "antetezambaro" ? ANTETEZAMBARO_IMAGES : p.id === "mika-antsohihy" ? MIKA_IMAGES : p.id === "ilo-manana" ? ILO_MANANA_IMAGES : p.id === "sainte-marie-seafront" ? SAINTE_MARIE_AMPANIHY_IMAGES : p.id === "manompagna" ? MANOMPAGNA_IMAGES : p.id === "analanjirofo" ? ANALANJIROFO_IMAGES : p.id === "saint-mary-club" ? SAINT_MARY_CLUB_IMAGES : p.id === "relais-castle" ? RELAIS_CASTLE_IMAGES : []}
                    />
                    {PROPERTY_MAPS[p.id] && (
                      <div className="space-y-4 rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold">
                          <MapPin className="h-3.5 w-3.5" /> {t("re.mapsAndPlans")}
                        </div>
                        <PropertyGallery
                          placeholderCount={PROPERTY_MAPS[p.id].length}
                          label={`${p.title} — Maps & Plans`}
                          images={PROPERTY_MAPS[p.id]}
                        />
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Building2 className="h-3.5 w-3.5" /> {t("re.features")}</div>
                        <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                          {p.features.map((f) => <li key={f} className="leading-snug">— {f}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Tag className="h-3.5 w-3.5" /> {t("re.pricing")}</div>
                        <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                          {p.pricing.map((pr) => <li key={pr} className="leading-snug">— {pr}</li>)}
                        </ul>
                        {p.notes && (
                          <div className="mt-4 border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)] pt-3 text-[11px] text-ivory/60">
                            {p.notes.map((n) => <div key={n}>· {n}</div>)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 glass-card rounded-3xl p-10 text-center sm:p-14">
            <h3 className="font-serif text-3xl text-ivory">{t("re.cta.title")}</h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ivory/70">
              {t("re.cta.text")}
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full px-9 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1"
              style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
              {t("cta.contact")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
