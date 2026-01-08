import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, CheckCircle, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";

/*******************
 * Flashfy — App + Product Pages (carousel + SEO + pretty URLs)
 *******************/
// FORCE_DEPLOY_2026_FINAL

/* ---------- Content blocks (short) ---------- */
const T = {
  filters: [
    "Filters (Industrial & HVAC)",
    "EN ISO 16890 & EN 1822 compliant filters for HVAC and industrial processes. Ventilation, high-temp, EPA/HEPA/ULPA, LAF components, gas-turbine intake, ATEX (on request).",
    "Typical Uses: HVAC AHUs and rooftop units, cleanrooms and labs, spray booths, turbine intakes, and general industrial ventilation.",
    "Compliance & Docs: EN ISO 16890 (ePM1/ePM2.5/ePM10), EN 1822 (E10–U17). Manufacturer datasheets, declarations, and test reports available on request.",
    "OEM Compatibility: Camfil, AAF, Freudenberg, Filtrair and equivalent EU-compliant options (matching by dimensions and class).",
  ],
  gauges: [
    "Gauges (Measurement & Process)",
    "Dimensional and process gauges with calibration options (factory or ISO/IEC 17025 on request).",
    "Typical Uses: machining and QC (plug/ring/snap/feeler), workshop measurement (calipers, micrometers), and process monitoring (pressure/temperature/level).",
    "Compliance & Docs: ISO 1502, ISO 3650, ISO 3611, DIN 862; EN 837 (pressure), EN 13190 (bimetal temperature). Certificates available on request.",
    "OEM Compatibility: Compatible with major industrial standards and common OEM references; cross-matching offered in quotes.",
  ],
  lights: [
    "Lights (Emergency & General)",
    "Facility and emergency luminaires; maintained/non-maintained, self-contained or central battery; documentation on request.",
    "Typical Uses: escape routes, open-area anti-panic, high-risk task lighting, facility retrofits (battens, panels, downlights, track).",
    "Compliance & Docs: EN 1838 (applications), EN 60598-2-22 (emergency luminaires), DALI/DALI-2 where applicable; ISO 7010 pictograms. IES/LDT files on request.",
    "OEM Compatibility: Matches and equivalents for common facility and emergency models; share OEM refs or site photos for cross-check.",
  ],
  actuators: [
    "Actuators & Valves",
    "Reliable control components designed to regulate the flow of air, water, or other media in HVAC, plumbing, and industrial systems. Our range ensures precision, durability, and efficiency, providing smooth automation and dependable system performance.",
    "Typical Uses: AHU/FCU dampers and mixing sections, hydronic control loops (chilled/hot water), zone control, and industrial process lines.",
    "Compliance & Docs: EN-aligned specs where applicable; electrical safety and enclosure/IP ratings as provided by manufacturers. Datasheets and declarations on request.",
    "OEM Compatibility: Compatible with leading actuator/valve families; provide control signal, port/thread/flange, and Cv/Kv if known for a precise match.",
  ],
  smart: [
    "Smart Devices (Locks, Switches, Cameras)",
    "Connected control and security for facilities: streamline access, automate lighting, and monitor critical areas with reliable, integrable devices.",
    "Smart Locks — keypad/RFID/Bluetooth/Wi-Fi models; audit trails; shared access; retrofit cylinders and mortise options.",
    "Smart Switches — single/2-way/grid modules; scheduling and scenes; neutral/neutral-less variants; DIN-rail and wall-box formats.",
    "Smart Cameras — fixed/dome/bullet; on-device or NVR; motion zones; IR/night; ONVIF streams for VMS integration.",
    "Integration & Docs: Works with common platforms (e.g., app/cloud APIs); ONVIF for cameras; wiring diagrams and data sheets available on request.",
  ],
  property: [
    "Property Management Essentials",
    "We handle end-to-end procurement for property management teams so you can keep operations running while we source and deliver what’s needed.",
    "Our coverage spans everyday replacements and site restocks across apartments, hotels, and facilities — with clear ETAs and paperwork handled.",
    "Examples we regularly procure:",
    "• Heat irons & hair dryers\n• Kitchenware and utensils\n• Bathroom fittings and accessories\n• Bedroom accessories and linens\n• Electrical spares and lighting\n• General maintenance tools\n• …and more — just send your list.",
    "Tell us the items and quantities per site/unit and destination country; we’ll return the best offer with realistic ETAs to dispatch plus transit options.",
  ],
  about: [
    "About Flashfy",
    "Flashfy was founded to simplify technical procurement across borders. We connect verified manufacturers and distributors to your project with clear costs, realistic ETAs, and documentation handled end-to-end.",
    "Our Mission: make buying specialised industrial products as clear and dependable as local sourcing — with transparent options and no surprises.",
    "Expertise: decades of combined experience in industrial supply, HVAC, lighting, and logistics. We prioritise compliance (EN/ISO standards), paperwork accuracy, and timely updates.",
    "How We Work: 1) You send a spec or OEM ref. 2) We confirm availability, lead times, and required documents. 3) You choose the route (DAP/DDP where available). 4) We coordinate delivery and share tracking/updates.",
    "Values: clarity, speed, and accountability. We’re your single point of contact from quote to delivery.",
  ],
  privacy: [
    "Privacy Policy",
    "We process contact and order data to prepare quotes and deliver orders. Data is shared only with suppliers, logistics providers, and payment processors as required.",
    "Payments & Security: we do not store card numbers; payments are processed via secure third-party providers (Visa, Apple Pay, Google Pay, Mastercard, SEPA).",
    "Data Protection: GDPR safeguards apply. Access, rectification, erasure, and other rights available by emailing flashfyonlinestore@gmail.com.",
    "Retention: quote communications typically 24 months; order/tax records 6–10 years; support logs ~12 months.",
    "Contact: flashfyonlinestore@gmail.com",
  ],
  terms: [
    "Terms & Conditions",
    "Quotes are limited offers and subject to supplier availability and validation. An order forms when we confirm acceptance in writing and (if required) receive payment/PO.",
    "Shipping & Delivery: ETAs refer to time-to-dispatch from the manufacturer; shipping/transit time is additional. We will list route options and realistic ETAs in your quote.",
    "Duties & Taxes: depend on route/incoterm (e.g., DAP or DDP if offered).",
    "Returns & Warranty: eligibility depends on product type and supplier policy; custom/made-to-order items are generally non-returnable once in production. Manufacturer warranties apply where available.",
    "Liability: to the fullest extent permitted by law, indirect or consequential losses are excluded; aggregate liability is capped at the order amount for the specific claim period. Governing law: Malta.",
    "Payment Processing & Beneficiary Flashfy operates as a sole trader.",
    "All payments made through this website are received by the legal beneficiary authorised to operate Flashfy.",
    "Payment Beneficiary Name: Jesmond Borg – Flashfy",
    "Payments may be processed via third-party payment providers (including but not limited to Payoneer, Stripe, or similar platforms). Flashfy does not store or process payment card or banking details directly.",
],
  legal: [
    "Legal Notice & Compliance",
    "Status: Flashfy coordinates procurement and logistics with third-party suppliers; we are not the manufacturer. Technical information is guidance only.",
    "Standards & Docs: Filters (EN ISO 16890, EN 1822), Gauges (ISO/DIN/EN families), Lights (EN 1838, EN 60598-2-22, DALI/DALI-2). We can relay manufacturer documentation when available.",
    "Acceptable Use: no scraping, malicious code, or attempts to bypass security.",
    "IP & Takedown: report concerns to flashfyonlinestore@gmail.com with details and we will review promptly.",
  ],
  faqs: [
    "FAQs",
    "What does Flashfy do? — Flashfy handles company procurement: sourcing and delivering filters, gauges, lights, smart devices, and property management essentials with full documentation and logistics coordination to your country.",
    "Do you work with businesses only? — Yes. We primarily serve B2B customers (contractors, facilities, labs, manufacturers, property operators).",
    "Can you provide documentation? — Yes: manufacturer datasheets, declarations, test reports (EN ISO 16890, EN 1822, EN 60598-2-22, ISO/IEC 17025, etc.) when available.",
    "How are payments handled? — Secure providers. We accept Visa, Mastercard, Apple Pay, Google Pay, and SEPA transfers (we never store full card data).",
    "How do ETAs work? — ETA = manufacturer lead time to dispatch; add transit depending on route (express/air/sea).",
    "How to request a quote? — Use the Request a Quote form or email flashfyonlinestore@gmail.com with spec, quantity, destination, docs.",
  ],
  help: [
    "Help Center",
    "Process: Send spec → Options → Quote → Order & pay → Delivery → After-sales. Include sizes/grades/OEM refs, docs, quantity, destination for fastest quotes.",
  ],
  blog: [
    "Procure Smarter: Specs & ETAs",
    "Clear specs speed quotes. Quoted ETA is to dispatch; transit is separate. See our checklists in each category.",
  ],
} as const;

function asText(lines: readonly string[]) {
  return lines.join("\n\n");
}

/* ---------- SEO meta (minimal) ---------- */
const META = {
  default: {
    title: "Flashfy — Industrial & HVAC Procurement",
    description:
      "B2B procurement of filters, gauges, lights, actuators & valves, smart devices, and property management essentials. Clear ETAs, documentation, delivery to your country.",
    image: "/images/social-card.webp",
    canonical: "https://www.flashfy.example/",
  },
  home: {
    title: "Flashfy — Procurement made clear",
    description:
      "You choose. We deliver. From supplier to your country—paperwork, shipping, and updates handled.",
  },
} as const;

function MetaTags({ meta }: { meta: { title?: string; description?: string } }) {
  useEffect(() => {
    const m = { ...META.default, ...meta };
    document.title = m.title || META.default.title;

    const ensure = (name: string) => {
      let el = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el;
    };
    ensure("description").setAttribute("content", m.description || META.default.description);

    // canonical (path only)
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const url = `${location.origin}${location.pathname}`;
    canonical.href = url;

    // basic org LD JSON
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flashfy",
      url: META.default.canonical,
      email: "flashfyonlinestore@gmail.com",
      logo: "/images/logo.png",
    };
    let ld = document.getElementById("ld-org") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-org";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(org);
  }, [meta]);
  return null;
}

/* ---------- Routing helpers ---------- */
function routeFromPathname(pathname: string): string {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  if (p === "/") return "home";
  if (p === "/about") return "about";
  if (p === "/categories") return "categories";
  const policy = ["/privacy", "/terms", "/legal", "/faqs", "/help", "/blog"].find((x) => x === p);
  if (policy) return policy.slice(1);
  if (/^\/product\/[^/]+$/.test(p)) return "product";
  const m = p.match(/^\/categories\/([^/]+)$/);
  if (m) return m[1];
  return "home";
}
function productSlugFromPathname(pathname: string): string | null {
  const m = (pathname || "").match(/^\/product\/([^/]+)$/);
  return m ? m[1] : null;
}
function pathForSlug(slug: string): string {
  if (slug === "home") return "/";
  if (slug === "about") return "/about";
  if (slug === "categories") return "/categories";
  if (["privacy", "terms", "legal", "faqs", "help", "blog"].includes(slug)) return `/${slug}`;
  return `/categories/${slug}`;
}

/* ---------- Optional vertical gallery (categories) ---------- */
function MediaRow({ gallery }: { gallery?: string[] }) {
  const items = (gallery && gallery.length ? gallery : []).slice(0, 5);
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-3">
        {items.length > 0 ? (
          items.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="w-full h-48 md:h-60 object-cover rounded border" />
          ))
        ) : (
          Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="w-full h-48 md:h-60 rounded border bg-gray-100 flex items-center justify-center text-sm text-gray-500 select-none">
              Add image
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ---------- Products ---------- */
type Product = {
  slug: string;
  title: string;
  categoryId: "smart" | "property" | "filters" | "lights" | "gauges" | "actuators";
  description: string;
  images: string[]; // up to 10 (show only provided)
  meta: { title: string; description: string; keywords?: string; tags?: string[] };
};

const PRODUCTS: Product[] = [
  {
    slug: "key-minder-smart-lock",
    title: "Key Minder Smart Lock - Bluetooth & WiFi Access Control | TTLock & Tuya Compatible",
    categoryId: "smart",
    description: `Smart Access. Simplified.
The Key Minder Smart Lock brings convenience, security, and modern design together, giving you full control of your property from anywhere.

Designed for Airbnb hosts, property managers, offices, and smart homes, this lock connects with the TTLock and Tuya apps for seamless remote access, PIN sharing, and real-time activity logs, all from your smartphone.

Built for durability, it’s waterproof and weather-resistant, making it perfect for both indoor and outdoor use. Say goodbye to lost keys and complicated check-ins — and hello to effortless, secure access management.

Key Features:

🔒 Remote access & PIN management via TTLock & Tuya App
📱 Smartphone control for guests, cleaners, and maintenance teams
🧠 Real-time activity logs and access notifications
💦 Waterproof & durable - designed for real-world use
🔋 Long-lasting battery life with low-power alerts
🏠 Ideal for Airbnb, vacation rentals, offices, and smart homes

Take control of your keys, anytime, anywhere.`,
    images: [
      "/images/products/keylock-1.webp",
      "/images/products/keylock-2.webp",
      "/images/products/keylock-3.webp",
      "/images/products/keylock-4.webp",
      "/images/products/keylock-5.webp",
    ],
    meta: {
      title: "Key Minder Smart Lock | Flashfy",
      description:
        "Bluetooth & WiFi Smart Lock with TTLock & Tuya App — waterproof, durable, and ideal for Airbnb & property management.",
      keywords: "smart lock, TTLock, Tuya, WiFi lock, Bluetooth lock, Airbnb smart access",
      tags: ["smart lock", "TTLock", "Tuya", "Bluetooth", "WiFi", "Airbnb", "property"],
    },
  },
  {
    slug: "key-minder-smart-lock-property",
    title: "Key Minder Smart Lock - Bluetooth & WiFi Access Control | TTLock & Tuya Compatible",
    categoryId: "property",
    description: `Smart Access. Simplified.
The Key Minder Smart Lock brings convenience, security, and modern design together, giving you full control of your property from anywhere.

Designed for Airbnb hosts, property managers, offices, and smart homes, this lock connects with the TTLock and Tuya apps for seamless remote access, PIN sharing, and real-time activity logs, all from your smartphone.

Built for durability, it’s waterproof and weather-resistant, making it perfect for both indoor and outdoor use. Say goodbye to lost keys and complicated check-ins — and hello to effortless, secure access management.

Key Features:

🔒 Remote access & PIN management via TTLock & Tuya App
📱 Smartphone control for guests, cleaners, and maintenance teams
🧠 Real-time activity logs and access notifications
💦 Waterproof & durable - designed for real-world use
🔋 Long-lasting battery life with low-power alerts
🏠 Ideal for Airbnb, vacation rentals, offices, and smart homes

Take control of your keys, anytime, anywhere.`,
    images: [
      "/images/products/keylock-1.webp",
      "/images/products/keylock-2.webp",
      "/images/products/keylock-3.webp",
      "/images/products/keylock-4.webp",
      "/images/products/keylock-5.webp",
    ],
    meta: {
      title: "Key Minder Smart Lock | Flashfy Property Essentials",
      description:
        "Smart lock for Airbnb, offices, and rentals — TTLock & Tuya compatible with real-time access management.",
      keywords: "smart lock, TTLock, Tuya, Airbnb lock, office lock, WiFi lock",
      tags: ["property", "smart lock", "Airbnb", "access control"],
    },
  },
  {
    slug: "flashfy-fire-blanket",
    title: "Flashfy Fire Blanket - Quick-Release Safety Blanket for Kitchen & Home Emergencies",
    categoryId: "property",
    description: `Essential Safety. Instant Protection.
The Flashfy Fire Blanket is your first line of defense against small fires — simple, fast, and effective.

Designed for kitchens, rentals, and workplaces, this fire blanket instantly smothers flames caused by cooking oil, electrical sparks, or small fabric fires. Simply pull the tabs, cover the fire, and it’s out, no mess, no panic.

Made from high-quality fiberglass fabric, it withstands extreme heat while remaining lightweight and easy to store. Perfect for Airbnb properties, apartments, offices, and holiday rentals, the Flashfy Fire Blanket helps you meet safety standards and gives your guests peace of mind.

Key Features:

🔥 Instant fire suppression - stops small fires fast
🧯 Reusable fiberglass material resistant to high temperatures
🏠 Ideal for kitchens, offices, Airbnb & rental properties
🧩 Compact & wall-mountable pouch for quick access
👨‍👩‍👧‍👦 Safe & easy to use - no training or maintenance needed

Be prepared. Stay protected.`,
    images: [
      "/images/products/fireblanket-1.webp",
      "/images/products/fireblanket-2.webp",
      "/images/products/fireblanket-3.webp",
    ],
    meta: {
      title: "Flashfy Fire Blanket | Flashfy",
      description:
        "Quick-release fire blanket for kitchen & home emergencies. Lightweight, reusable, and safe for Airbnb or office use.",
      keywords: "fire blanket, safety blanket, kitchen fire, Airbnb safety, emergency blanket",
      tags: ["fire blanket", "safety", "kitchen", "Airbnb", "fire safety"],
    },
  },
  {
    slug: "photoluminescent-safety-signs",
    title: "Photoluminescent Safety Signs - Glow-in-the-Dark Exit, Fire, and First Aid Signs | Flashfy",
    categoryId: "property",
    description: `Safety that shines - even in the dark.
Flashfy’s Photoluminescent Safety Signs are designed to guide and protect when visibility is low or the power goes out. These glow-in-the-dark emergency signs absorb light and automatically illuminate escape routes.

Perfect for buildings, hotels, offices, Airbnb rentals, and commercial spaces. Made with high-grade photoluminescent material, they ensure compliance and visibility.

Available Designs:
🟢 Exit & Emergency Exit Signs
🔥 Fire Extinguisher & Fire Equipment Signs
➕ First Aid & Safety Point Signs
🏢 Elevator & Escalator Direction Signs
⚙️ Custom Safety Icons & Directional Arrows

Key Features:
🌙 Glow-in-the-dark visibility - no power required
🧱 Durable PVC/aluminum construction for indoor & outdoor use
📏 Various sizes & mounting options available
🧩 Compliant with safety standards
🏠 Ideal for Airbnb, offices, hotels, and public buildings

When the lights go out, Flashfy signs light the way.`,
    images: [
      "/images/products/safetysigns-1.webp",
      "/images/products/safetysigns-2.webp",
      "/images/products/safetysigns-3.webp",
      "/images/products/safetysigns-4.webp",
    ],
    meta: {
      title: "Photoluminescent Safety Signs | Flashfy",
      description:
        "Glow-in-the-dark safety signs for exits, fire equipment, and first aid points. Durable, compliant, and ideal for properties.",
      keywords: "photoluminescent safety signs, glow in the dark, exit sign, fire sign, first aid sign",
      tags: ["safety signs", "photoluminescent", "exit", "fire safety", "Airbnb"],
    },
  },
];

/* ========================================================================== */

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [productSlug, setProductSlug] = useState<string | null>(null);
  const [shopOpen, setShopOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [toast, setToast] = useState<string>("");
  const [prefillProduct, setPrefillProduct] = useState<string>("");

  useEffect(() => {
    const syncFromPath = () => {
      setPage(routeFromPathname(location.pathname));
      setProductSlug(productSlugFromPathname(location.pathname));
    };
    // migrate old hash (#filters) to pretty path
    if (location.hash) {
      const h = (location.hash || "#home").slice(1) || "home";
      const to = h.startsWith("product:") ? `/product/${h.split(":")[1]}` : pathForSlug(h);
      history.replaceState({}, document.title, to);
    }
    syncFromPath();
    window.addEventListener("popstate", syncFromPath);
    return () => window.removeEventListener("popstate", syncFromPath);
  }, []);

  // Text blocks
  const filtersText = asText(T.filters);
  const gaugesText = asText(T.gauges);
  const lightsText = asText(T.lights);
  const actuatorsText = asText(T.actuators);
  const smartText = asText(T.smart);
  const propertyText = asText(T.property);
  const privacyText = asText(T.privacy);
  const termsText = asText(T.terms);
  const legalText = asText(T.legal);
  const faqsText = asText(T.faqs);
  const helpText = asText(T.help);
  const blogText = asText(T.blog);
  const aboutText = asText(T.about);

  // Derived per-page meta
  const currentProduct = page === "product" && productSlug ? PRODUCTS.find(p => p.slug === productSlug) : undefined;
  const pageMeta =
    currentProduct
      ? { title: currentProduct.meta.title, description: currentProduct.meta.description }
      : page === "home"
      ? META.home
      : META.default;

  const handleNav = (target: string) => {
    const to = pathForSlug(target);
    if (location.pathname !== to) {
      history.pushState({}, document.title, to);
      setPage(target === "home" ? "home" : target);
      setProductSlug(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShopOpen(false);
  };
  const openProduct = (slug: string) => {
    if (location.pathname !== `/product/${slug}`) {
      history.pushState({}, document.title, `/product/${slug}`);
      setPage("product");
      setProductSlug(slug);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShopOpen(false);
  };
  const openQuote = (prefill?: string) => {
    setPrefillProduct(prefill || "");
    setDrawerOpen(true);
  };

  // Categories (filenames match your repo)
  const categories = [
    {
      id: "filters",
      title: "Filters (Industrial & HVAC)",
      desc: "EN ISO 16890 & EN 1822 compliant",
      img: "/images/filters.webp",
      text: filtersText,
      tipType: "filters" as const,
      galleryUrls: ["/images/filters-1.webp","/images/filters-2.webp","/images/filters-3.webp","/images/filters-4.webp","/images/filters-5.webp"],
    },
    {
      id: "lights",
      title: "Lights (Emergency & General)",
      desc: "Facility & emergency luminaires",
      img: "/images/lights.webp",
      text: lightsText,
      tipType: "lights" as const,
      galleryUrls: ["/images/lights-1.webp","/images/lights-2.webp","/images/lights-3.webp","/images/lights-4.webp","/images/lights-5.webp"],
    },
    {
      id: "gauges",
      title: "Gauges (Measurement & Process)",
      desc: "Dimensional & process gauges",
      img: "/images/gauges.webp",
      text: gaugesText,
      tipType: "gauges" as const,
      galleryUrls: ["/images/gauges-1.webp","/images/gauges-2.webp","/images/gauges-3.webp","/images/gauges-4.webp","/images/gauges-5.webp"],
    },
    {
      id: "actuators",
      title: "Actuators & Valves",
      desc: "Reliable control components",
      img: "/images/actuators.webp",
      text: actuatorsText,
      tipType: "actuators" as const,
      galleryUrls: ["/images/actuators-1.webp","/images/actuators-2.webp","/images/actuators-3.webp","/images/actuators-4.webp","/images/actuators-5.webp"],
    },
    {
      id: "smart",
      title: "Smart Devices",
      desc: "Smart locks, switches, cameras",
      img: "/images/smart.webp",
      text: smartText,
      tipType: "smart" as const,
      galleryUrls: ["/images/smart-1.webp","/images/smart-2.webp","/images/smart-3.webp","/images/smart-4.webp","/images/smart-5.webp"],
    },
    {
      id: "property",
      title: "Property Management Essentials",
      desc: "We procure what you need",
      img: "/images/property.webp",
      text: propertyText,
      tipType: "common" as const,
      galleryUrls: ["/images/property-1.webp","/images/property-2.webp","/images/property-3.webp","/images/property-4.webp","/images/property-5.webp"],
    },
  ] as const;

  const policies = [
    { id: "privacy", title: "Privacy Policy", text: privacyText },
    { id: "terms", title: "Terms & Conditions", text: termsText },
    { id: "legal", title: "Legal Notice & Compliance", text: legalText },
    { id: "faqs", title: "FAQs", text: faqsText },
    { id: "help", title: "Help Center", text: helpText },
    { id: "blog", title: "Blog", text: blogText },
  ] as const;

  // Formspree submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    data.append("_subject", `Quote Request from ${name} (${email})`);
    if (email) data.append("_replyto", email);
    try {
      const res = await fetch("https://formspree.io/f/xanpnjyv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        setToast("Your request was sent. We'll reply by email.");
        form.reset();
        setTimeout(() => {
          setDrawerOpen(false);
          setFormStatus(null);
          setPrefillProduct("");
        }, 2000);
      } else {
        setFormStatus("error");
        setToast("There was a problem sending your request.");
      }
    } catch {
      setFormStatus("error");
      setToast("There was a problem sending your request.");
    }
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const PaymentsLogos = ({ compact = false }: { compact?: boolean }) => (
    <div className={`${compact ? "max-w-6xl" : "max-w-6xl"} mx-auto px-6 py-4 flex flex-wrap items-center gap-5`}>
      <span className="font-semibold text-sm text-gray-700 mr-1">Payments accepted:</span>
      <svg width="68" height="24" viewBox="0 0 68 24" role="img" aria-label="Visa">
        <rect width="68" height="24" rx="4" fill="#1a1f71" />
        <text x="34" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">VISA</text>
      </svg>
      <svg width="84" height="24" viewBox="0 0 84 24" role="img" aria-label="Google Pay">
        <rect width="84" height="24" rx="4" fill="#fff" stroke="#e5e7eb" />
        <text x="42" y="16" textAnchor="middle" fontSize="12" fill="#111827" fontFamily="Arial, Helvetica, sans-serif">Google Pay</text>
      </svg>
      <svg width="78" height="24" viewBox="0 0 78 24" role="img" aria-label="Apple Pay">
        <rect width="78" height="24" rx="4" fill="#000" />
        <text x="39" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Apple Pay</text>
      </svg>
      <svg width="108" height="24" viewBox="0 0 108 24" role="img" aria-label="Mastercard">
        <rect width="108" height="24" rx="4" fill="#fff" stroke="#e5e7eb" />
        <circle cx="46" cy="12" r="7" fill="#eb001b" />
        <circle cx="60" cy="12" r="7" fill="#f79e1b" />
        <text x="86" y="16" textAnchor="middle" fontSize="12" fill="#111827" fontFamily="Arial, Helvetica, sans-serif">Mastercard</text>
      </svg>
      <svg width="64" height="24" viewBox="0 0 64 24" role="img" aria-label="SEPA">
        <rect width="64" height="24" rx="4" fill="#fff" stroke="#e5e7eb" />
        <text x="32" y="16" textAnchor="middle" fontSize="12" fill="#0f172a" fontFamily="Arial, Helvetica, sans-serif">SEPA</text>
      </svg>
    </div>
  );

  // copy link helpers
  const copyCategoryLink = (slug: string) => {
    const url = `${location.origin}${pathForSlug(slug)}`;
    navigator.clipboard.writeText(url).then(() => setToast("Link copied!"));
  };
  const copyProductLink = (slug: string) => {
    const url = `${location.origin}/product/${slug}`;
    navigator.clipboard.writeText(url).then(() => setToast("Link copied!"));
  };

  /* ========================= RENDER ========================= */

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO */}
      <MetaTags meta={pageMeta} />

      {/* Announcement */}
      <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
        🚀 Fast procurement, clear ETAs, global delivery — Request your quote today!
      </div>

      {/* Header */}
      <header className="bg-sky-200 flex items-center justify-between px-4 py-3 shadow relative">
        <button onClick={() => handleNav("home")} aria-label="Go to homepage">
          <img src="/images/logo.png" alt="Flashfy logo" className="h-10 w-auto rounded" />
        </button>
        <nav className="hidden md:flex items-center space-x-8 mx-auto" aria-label="Main">
          <button onClick={() => handleNav("home")} className="hover:underline">Home</button>
          <div className="relative">
            <button
              onClick={() => setShopOpen((v) => !v)}
              className="flex items-center space-x-1 hover:underline"
              aria-haspopup="menu"
              aria-expanded={shopOpen}
            >
              <span>Shop</span>
              <ChevronDown size={16} />
            </button>
            {shopOpen && (
              <div className="absolute bg-white shadow rounded mt-2 left-0 w-56 z-30" role="menu">
                <button onClick={() => handleNav("categories")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">All Categories</button>
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => handleNav(cat.id)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">{cat.title}</button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => handleNav("about")} className="hover:underline">About Us</button>
          <button onClick={() => openQuote()} className="hover:underline">Contact Us</button>
        </nav>
        <button className="md:hidden" aria-label="Open menu">
          <Menu />
        </button>
      </header>

      {/* Hero */}
      {page === "home" && (
        <section className="relative w-full">
          <img src="/images/hero.png" alt="Industrial supply and logistics hero" className="w-full h-[48vh] md:h-[62vh] object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex flex-col justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">Procurement made clear</h1>
            <p className="text-white/90 mb-6 max-w-2xl">You choose. We deliver. From supplier to your country—paperwork, shipping, and updates handled.</p>
            <div className="flex gap-3">
              <button onClick={() => handleNav("categories")} className="bg-sky-600 px-4 py-2 rounded text-white">Shop</button>
              <button onClick={() => openQuote()} className="bg-white/90 text-gray-900 px-4 py-2 rounded">Request a Quote</button>
            </div>
          </div>
        </section>
      )}

      {/* CTA badges */}
      {page === "home" && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <div>
              <div className="font-semibold">Secure Payments</div>
              <div className="text-sm text-gray-600">Safe online checkout routes</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <div>
              <div className="font-semibold">Easy Returns</div>
              <div className="text-sm text-gray-600">Supplier policies clarified upfront</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <div>
              <div className="font-semibold">Clear ETAs</div>
              <div className="text-sm text-gray-600">Manufacture lead time + transit</div>
            </div>
          </div>
        </section>
      )}

      {/* Home Category cards — wider */}
      {page === "home" && (
        <section className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.id}
              role="button"
              tabIndex={0}
              onClick={() => handleNav(cat.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleNav(cat.id)}
              className="group border rounded-3xl shadow hover:shadow-xl transition p-6 flex flex-col cursor-pointer bg-white"
            >
              <img src={cat.img} alt={cat.title} className="h-72 w-full object-cover rounded-2xl mb-5 group-hover:scale-[1.01] transition-transform" />
              <h3 className="text-2xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-base flex-grow">{cat.desc}</p>
              <div className="flex gap-3 mt-6">
                <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg">View</button>
                <button onClick={(e) => { e.stopPropagation(); openQuote(cat.title); }} className="bg-sky-600 text-white py-2 px-4 rounded-lg">Quote Now</button>
                <button className="ml-auto inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900" onClick={(e) => { e.stopPropagation(); copyCategoryLink(cat.id); }} title="Copy shareable link">
                  <LinkIcon size={16} /> Share
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Categories index — wider */}
      {page === "categories" && (
        <section className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.id}
              role="button"
              tabIndex={0}
              onClick={() => handleNav(cat.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleNav(cat.id)}
              className="group border rounded-3xl shadow hover:shadow-xl transition p-6 flex flex-col cursor-pointer bg-white"
            >
              <img src={cat.img} alt={cat.title} className="h-72 w-full object-cover rounded-2xl mb-5 group-hover:scale-[1.01] transition-transform" />
              <h3 className="text-2xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-base flex-grow">{cat.desc}</p>
              <div className="flex gap-3 mt-6">
                <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg">View</button>
                <button onClick={(e) => { e.stopPropagation(); openQuote(cat.title); }} className="bg-sky-600 text-white py-2 px-4 rounded-lg">Quote Now</button>
                <button className="ml-auto inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900" onClick={(e) => { e.stopPropagation(); copyCategoryLink(cat.id); }} title="Copy shareable link">
                  <LinkIcon size={16} /> Share
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Category detail pages + product grid */}
      {categories.map(
        (cat) =>
          page === cat.id && (
            <section key={cat.id} className="p-8 max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">{cat.title}</h2>
                <button className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => copyCategoryLink(cat.id)} title="Copy shareable link">
                  <LinkIcon size={16} /> Copy link
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <img src={cat.img} alt={cat.title} className="w-full rounded-2xl shadow" />
                  <MediaRow gallery={(cat as any).galleryUrls} />
                </div>
                <div className="md:col-span-2 whitespace-pre-line text-gray-700">
                  <p>{cat.text}</p>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => openQuote(cat.title)} className="bg-sky-600 text-white py-2 px-4 rounded">Request a Quote for {cat.title}</button>
                    <button onClick={() => handleNav("categories")} className="bg-gray-200 text-gray-900 py-2 px-4 rounded">Back to Categories</button>
                  </div>

                  {/* Products in this category */}
                  <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">Products</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {PRODUCTS.filter(p => p.categoryId === cat.id).map(p => (
                        <div key={p.slug} className="border rounded-2xl p-4 bg-white shadow hover:shadow-md transition">
                          <img src={p.images[0]} alt={p.title} className="h-56 w-full object-cover rounded mb-3" />
                          <h4 className="font-semibold text-lg line-clamp-2 mb-2">{p.title}</h4>
                          <div className="flex gap-2">
                            <button className="bg-gray-200 text-gray-900 py-2 px-3 rounded" onClick={() => openProduct(p.slug)}>View Product</button>
                            <button className="bg-sky-600 text-white py-2 px-3 rounded" onClick={() => openQuote(p.title)}>Quote Now</button>
                            <button className="ml-auto inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => copyProductLink(p.slug)} title="Copy product link">
                              <LinkIcon size={16} /> Share
                            </button>
                          </div>
                        </div>
                      ))}
                      {PRODUCTS.filter(p => p.categoryId === cat.id).length === 0 && (
                        <p className="text-gray-600">No products yet in this category.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
      )}

      {/* Product detail page */}
      {page === "product" && currentProduct && (
        <ProductView
          product={currentProduct}
          onBack={() => history.length ? history.back() : handleNav("categories")}
          onQuote={() => openQuote(currentProduct.title)}
          onCopy={() => copyProductLink(currentProduct.slug)}
        />
      )}
      {page === "product" && !currentProduct && (
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Product not found</h2>
          <p className="text-gray-600 mb-4">This product may have been moved or removed.</p>
          <button onClick={() => handleNav("categories")} className="bg-gray-200 text-gray-900 py-2 px-4 rounded">Back to Categories</button>
        </section>
      )}

      {/* About page */}
      {page === "about" && (
        <section className="p-0">
          <div className="relative w-full">
            <img src="/images/about-banner.webp" alt="About Flashfy banner" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">About Flashfy</h2>
            </div>
          </div>
          <div className="p-12 max-w-4xl mx-auto text-center">
            <p className="text-gray-700 whitespace-pre-line">{aboutText}</p>
          </div>
        </section>
      )}

      {/* Policy/Help/Blog pages */}
      {policies.map(
        (p) =>
          page === p.id && (
            <section key={p.id} className="p-8 max-w-5xl mx-auto text-left whitespace-pre-line text-gray-700">
              <h2 className="text-3xl font-bold mb-6">{p.title}</h2>
              <p>{p.text}</p>
              {p.id === "faqs" && (
                <div className="mt-10 text-center border-top pt-6">
                  <h4 className="text-xl font-semibold mb-2">Need more help?</h4>
                  <p className="text-gray-700 text-sm mb-3">Didn’t find what you’re looking for? Reach out — we’ll respond within one business day.</p>
                  <button onClick={() => openQuote()} className="inline-block bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition">Contact Us</button>
                </div>
              )}
            </section>
          )
      )}

      {/* Why Choose */}
      <section className="bg-indigo-50 py-12 text-center mt-auto">
        <h2 className="text-2xl font-bold mb-2">Why Choose Flashfy</h2>
        <p className="max-w-3xl mx-auto text-gray-700">One accountable partner from quote to delivery. Clear costs, realistic ETAs, compliance-first documentation, and fast issue handling.</p>
      </section>

      {/* Vertical Request Quote handle */}
      <div className="fixed top-1/2 right-0 z-40 -translate-y-1/2">
        <button onClick={() => openQuote()} className="bg-sky-600 text-white px-2 py-4 rounded-l-md shadow text-xs font-semibold tracking-wide" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          Request Quote
        </button>
      </div>

      {/* Drawer: centered quote form */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b shadow">
            <h2 className="text-xl font-semibold">Request a Quote</h2>
            <button onClick={() => setDrawerOpen(false)} aria-label="Close quote form">
              <X />
            </button>
          </div>
          <div className="flex-grow grid place-items-center p-6">
            <div className="w-full max-w-lg">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3 bg-white border rounded-xl shadow p-5">
                <input type="text" name="name" placeholder="Your name" className="border p-2 rounded" required />
                <input type="email" name="email" placeholder="Your email" className="border p-2 rounded" required />
                <input type="text" name="product" placeholder="Product / spec / OEM ref" className="border p-2 rounded" required defaultValue={prefillProduct} key={prefillProduct} />
                <input type="number" name="quantity" placeholder="Quantity" className="border p-2 rounded" required />
                <input type="text" name="destination" placeholder="Destination country" className="border p-2 rounded" required />
                <textarea name="details" placeholder="Details (sizes/grade, docs needed)" className="border p-2 rounded" rows={4}></textarea>
                <p className="text-xs text-gray-600">We try to reply as soon as our suppliers give us the pricing and lead time.</p>
                <button type="submit" className="bg-sky-600 text-white py-2 rounded">Submit</button>
                {formStatus === "success" && (
                  <div className="text-green-700 text-sm flex items-center gap-2">
                    <CheckCircle /> Thank you! Your request was sent.
                  </div>
                )}
                {formStatus === "error" && <div className="text-red-600 text-sm">There was a problem sending your request. Please try again.</div>}
              </form>
              <p className="text-xs text-gray-500 mt-3">Your data is used only to prepare this quote — never shared for marketing.</p>
              <div className="mt-4">
                {/* <QuoteTips /> */}
              </div>
            </div>
          </div>
          <div className="border-t bg-gray-50">
            <PaymentsLogos compact />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-10">
        <div className="bg-gray-800 text-gray-200">
          <PaymentsLogos />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-10 text-left">
          <div>
            <h3 className="font-semibold mb-2">Flashfy</h3>
            <nav className="flex flex-col space-y-1 text-sm">
              <button onClick={() => handleNav("about")} className="hover:underline text-left">About Us</button>
              <button onClick={() => handleNav("categories")} className="hover:underline text-left">Shop</button>
              <button onClick={() => handleNav("blog")} className="hover:underline text-left">Blog</button>
              <button onClick={() => openQuote()} className="hover:underline text-left">Contact Us</button>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Information</h3>
            <nav className="flex flex-col space-y-1 text-sm">
              <button onClick={() => handleNav("privacy")} className="hover:underline text-left">Privacy Policy</button>
              <button onClick={() => handleNav("terms")} className="hover:underline text-left">Terms & Conditions</button>
              <button onClick={() => handleNav("legal")} className="hover:underline text-left">Legal Notice & Compliance</button>
              <button onClick={() => handleNav("faqs")} className="hover:underline text-left">FAQs</button>
              <button onClick={() => handleNav("help")} className="hover:underline text-left">Help Center</button>
            </nav>
          </div>
        </div>
        <p className="text-center text-xs pb-8">© {new Date().getFullYear()} Flashfy. All rights reserved.</p>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 bg-black text-white text-sm px-4 py-2 rounded shadow">{toast}</div>
      )}
    </div>
  );
}

/* ---------- Product View (carousel) ---------- */
function ProductView({
  product,
  onBack,
  onQuote,
  onCopy,
}: {
  product: Product;
  onBack: () => void;
  onQuote: () => void;
  onCopy: () => void;
}) {
  const imgs = (product.images || []).slice(0, 10);
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx((i) => (i + 1) % imgs.length);
  const set = (i: number) => setIdx(i);

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="text-sm text-gray-600 hover:text-gray-900">← Back</button>
        <button onClick={onCopy} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900" title="Copy product link">
          <LinkIcon size={16} /> Copy link
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: big image + arrows + thumbnails */}
        <div className="w-full">
          <div className="relative rounded-2xl overflow-hidden border bg-white">
            {imgs.length > 0 ? (
              <>
                <img src={imgs[idx]} alt={`${product.title} image ${idx + 1}`} className="w-full h-96 object-cover" />
                {imgs.length > 1 && (
                  <>
                    <button onClick={prev} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">
                      <ChevronLeft />
                    </button>
                    <button onClick={next} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">
                      <ChevronRight />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-500">No image</div>
            )}
          </div>
          {/* Thumbnails */}
          {imgs.length > 1 && (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {imgs.map((s, i) => (
                <button key={i} onClick={() => set(i)} className={`border rounded overflow-hidden ${i === idx ? "ring-2 ring-sky-500" : ""}`}>
                  <img src={s} alt={`Thumb ${i + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: title + description + CTA */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="whitespace-pre-line text-gray-700 mb-6">{product.description}</p>
          <div className="flex gap-3">
            <button onClick={onQuote} className="bg-sky-600 text-white py-2 px-4 rounded">Request a Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Self-tests (console) ---------- */
(function runSelfTests() {
  try {
    const must = ["filters","gauges","lights","actuators","smart","property","privacy","terms","legal","faqs","help","blog","about"];
    const miss = must.filter((k) => !(k in (T as any)));
    if (miss.length) console.warn("[SelfTest] Missing blocks:", miss);

    const routeCases: Array<[string, string]> = [
      ["/", "home"], ["/about", "about"], ["/categories", "categories"],
      ["/categories/lights", "lights"], ["/privacy", "privacy"], ["/terms", "terms"],
      ["/legal", "legal"], ["/faqs", "faqs"], ["/help", "help"], ["/blog", "blog"],
      ["/product/key-minder-smart-lock", "product"], ["/unknown", "home"],
    ];
    routeCases.forEach(([path, expect]) => {
      const got = routeFromPathname(path);
      if (got !== expect) console.error(`[SelfTest] routeFromPathname failed: ${path} -> ${got} (expected ${expect})`);
    });

    const p = productSlugFromPathname("/product/flashfy-fire-blanket");
    if (p !== "flashfy-fire-blanket") console.error("[SelfTest] productSlugFromPathname failed");
  } catch (e) {
    console.warn("[SelfTest] Exception:", e);
  }
})();
