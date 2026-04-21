import type { Translations } from "@/types/language";

export const translations: Translations = {
  en: {
    // Navigation
    "nav.serve": "Who We Serve",
    "nav.products": "Products",
    "nav.why": "Why Us",
    "nav.contact": "Contact",
    "nav.langToggle": "ES",

    // Hero
    "hero.badge": "Miami-Dade's Ice Specialists",
    "hero.title1": "MR",
    "hero.title2": "ICECUBE",
    "hero.sub": "Regular Ice / Mixology Ice & More",
    "hero.tagline":
      "We keep Miami cool — one bag at a time. Fast delivery. Best price. No excuses.",
    "hero.ctaWhatsApp": "WhatsApp Us",
    // ⚠️ hero.ctaQuote NIEUŻYWANY po REFACTOR-01 (DEC-008).
    // Przycisk "Get a Quote" usunięty z Hero — zastąpiony przyciskiem Call us.
    // Klucz zachowany dla potencjalnego przywrócenia "Request a Quote" flow w v2.
    "hero.ctaQuote": "Get a Quote",
    "hero.ctaCall": "Call us",

    // Ice bar
    "iceBar.text": "FAST SERVICE · BEST PRICE · ANYTIME · ANYWHERE",

    // Who We Serve
    "serve.title1": "Who We",
    "serve.title2": "Serve",
    "serve.sub":
      "From corner stores to rooftop parties — if you need ice, we're your crew.",
    "serve.shop.title": "Local Shops",
    "serve.shop.text":
      "Bodegas, convenience stores, supermarkets — we keep your coolers full.",
    "serve.gas.title": "Gas Stations",
    "serve.gas.text":
      "Reliable scheduled deliveries so you never run out on a hot day.",
    "serve.party.title": "Private Parties",
    "serve.party.text":
      "Quinceañera, backyard BBQ, birthday bash — we bring the chill.",
    "serve.bar.title": "Bars & Restaurants",
    "serve.bar.text":
      "Crystal-clear mixology ice for cocktails that look as good as they taste.",
    "serve.event.title": "Events & Venues",
    "serve.event.text":
      "Large-scale supply with refrigerated truck delivery — bulk orders welcome.",

    // Products
    "product.title1": "Our",
    "product.title2": "Products",
    "product.sub": "Premium quality ice. First-class bags. Every. Single. Time.",
    "product.regular.title": "Regular Ice",
    "product.regular.text":
      "Standard bagged ice for everyday cooling needs. Perfect for drinks, coolers, and food service.",
    "product.mixology.title": "Mixology Ice",
    "product.mixology.text":
      "Crystal-clear, slow-melt specialty ice for craft cocktails. Your bar deserves the best.",
    "product.bulk.title": "Bulk Supply",
    "product.bulk.text":
      "Large orders for events, venues, and wholesale customers. We scale with you.",

    // Stats
    "stats.onDemand": "On-Demand Delivery",
    "stats.service": "Customer Service in Miami",
    "stats.quality": "First-Class Quality Bags",
    "stats.fleet": "Refrigerated Truck Fleet",

    // Why
    "why.title1": "Why",
    "why.title2": "Mr IceCube?",
    "why.sub": "We're not just ice guys. We're your business partner.",
    "why.fast.title": "Fast Delivery",
    "why.fast.text":
      "On-demand and scheduled. Our refrigerated truck is always ready to roll across Miami-Dade.",
    "why.price.title": "Best Price",
    "why.price.text":
      "Competitive pricing for small shops and big venues alike. No hidden fees, no surprises.",
    "why.quality.title": "Top Quality",
    "why.quality.text":
      "First-class bags, food-safe ice, and packaging your customers will notice.",
    "why.local.title": "Locally Rooted",
    "why.local.text":
      "We're Miami-Dade through and through. We know the neighborhoods, the heat, and the hustle.",
    "why.flex.title": "Flexible Service",
    "why.flex.text":
      "Last-minute order? Big weekend coming up? We adapt. Always.",
    "why.love.title": "People Love Us",
    "why.love.text":
      "Our clients keep coming back — and send their friends. The proof is in the ice.",

    // ⚠️ FIKCYJNE placeholdery z mockupu. NIE RENDEROWAĆ tych kluczy
    // dopóki klient (Mr IceCube Miami) nie dostarczy prawdziwych cytatów
    // wraz z pisemną zgodą na ich publikację. Renderowanie fikcyjnych
    // testimoniali = naruszenie FTC Endorsement Guidelines (USA).
    // Patrz DEC-006 w DECISIONS.md. Blokada do odwołania.
    // Testimonials
    "testi.title1": "What Our",
    "testi.title2": "Clients Say",
    "testi.1.text":
      "Every time I need ice for the weekend rush, Mr IceCube shows up — fast, no drama. Best service in Miami.",
    "testi.1.author": "Carlos M.",
    "testi.1.role": "Convenience Store Owner, Hialeah",
    "testi.2.text":
      "Our cocktail bar switched to Mr IceCube mixology ice — the difference is night and day. Our customers notice.",
    "testi.2.author": "Diana R.",
    "testi.2.role": "Bar Manager, Wynwood",
    "testi.3.text":
      "Called them at 8am for a party that afternoon. They delivered before noon. That's the reliability you want.",
    "testi.3.author": "Mike T.",
    "testi.3.role": "Event Organizer, Doral",

    // How it works
    "how.title1": "How It",
    "how.title2": "Works",
    "how.sub": "Getting your ice has never been easier.",
    "how.1.title": "Call or Text",
    "how.1.text":
      "Reach us at (305) 812-7096. Tell us what you need and where you are.",
    "how.2.title": "We Confirm",
    "how.2.text":
      "Fast quote, flexible scheduling. We lock in your delivery time right away.",
    "how.3.title": "We Deliver",
    "how.3.text":
      "Our refrigerated truck brings your ice cold and on time. Every time.",
    "how.4.title": "Stay Cool",
    "how.4.text":
      "That's it. You're in business. We'll be back whenever you need us.",

    // Contact
    "contact.title1": "Get In",
    "contact.title2": "Touch",
    "contact.sub": "Ready to order? Have a question? We're here.",
    // ⚠️ contact.phone* NIEUŻYWANE po REFACTOR-02 (implementacja DEC-008).
    // Karta Phone usunięta z Contact — numer jest teraz w tekście obu CTA
    // (contact.ctaWhatsApp, contact.ctaCall). Klucze zachowane na wypadek
    // przywrócenia karty w v2 (np. jeśli doda się więcej informacji: godziny pracy).
    "contact.phoneLabel": "Phone",
    "contact.phoneNote": "Call or text anytime",
    // ⚠️ Email card NIE JEST renderowana w v1 (DEC-007).
    // Powód: mockup miał mezfashion69@yahoo.com — prywatny, nieprofesjonalny adres.
    // Odblokowanie wymaga: (1) skonfigurowany email domenowy (np. info@mricecubemia.com),
    // (2) aktualizacja klucza contact.emailValue (obecnie brak), (3) update DEC-007.
    // Klucze poniżej zachowane dla szybkiego odblokowania bez odbudowy słownika.
    "contact.emailLabel": "Email",
    "contact.emailNote": "We reply fast",
    // ⚠️ contact.web* NIEUŻYWANE po REFACTOR-01 (DEC-008).
    // Karta Website usunięta z Contact — landing sam jest stroną, link do siebie redundantny.
    // Klucze zachowane dla przywrócenia jeśli zmieni się pozycjonowanie.
    "contact.webLabel": "Website",
    "contact.webNote": "Check us out online",
    // ⚠️ contact.address* NIEUŻYWANE po REFACTOR-01 (DEC-008).
    // Karta Address usunięta z Contact — model konwersji nie wymaga lokalizacji fizycznej.
    // Klient przyjeżdża, nie jego klienci. Klucze zachowane dla v2 (np. jeśli otworzy showroom).
    "contact.addressLabel": "Address",
    "contact.addressValue": "228 NW 32 Ave\nMiami, FL 33125",
    "contact.addressNote": "Serving all Miami-Dade",
    "contact.ctaWhatsApp": "WhatsApp Us — (305) 812-7096",
    "contact.ctaCall": "Call Us — (305) 812-7096",

    // Footer
    "footer.sub": "Regular Ice / Mixology Ice & More · Fast Service Best Price",
    "footer.copy": "Mr IceCube Miami. All rights reserved.",
  },
  es: {
    // Navigation
    "nav.serve": "A quién servimos",
    "nav.products": "Productos",
    "nav.why": "Por qué nosotros",
    "nav.contact": "Contacto",
    "nav.langToggle": "EN",

    // Hero
    "hero.badge": "Especialistas en Hielo de Miami-Dade",
    "hero.title1": "MR",
    "hero.title2": "ICECUBE",
    "hero.sub": "Hielo Regular / Hielo de Mixología y Más",
    "hero.tagline":
      "Mantenemos Miami fresco — una bolsa a la vez. Entrega rápida. Mejor precio. Sin excusas.",
    "hero.ctaWhatsApp": "Escríbenos por WhatsApp",
    // ⚠️ hero.ctaQuote NIEUŻYWANY po REFACTOR-01 (DEC-008).
    // Przycisk "Get a Quote" usunięty z Hero — zastąpiony przyciskiem Call us.
    // Klucz zachowany dla potencjalnego przywrócenia "Request a Quote" flow w v2.
    "hero.ctaQuote": "Obtén una Cotización",
    "hero.ctaCall": "Llámanos",

    // Ice bar
    "iceBar.text":
      "SERVICIO RÁPIDO · MEJOR PRECIO · CUANDO SEA · DONDE SEA",

    // Who We Serve
    "serve.title1": "¿A Quién",
    "serve.title2": "Servimos?",
    "serve.sub":
      "Desde tiendas locales hasta fiestas en azoteas — si necesitas hielo, somos tu gente.",
    "serve.shop.title": "Tiendas Locales",
    "serve.shop.text":
      "Bodegas, tiendas, supermercados — mantenemos tus refrigeradores llenos.",
    "serve.gas.title": "Gasolineras",
    "serve.gas.text":
      "Entregas programadas y confiables para que nunca te quedes sin hielo en un día caluroso.",
    "serve.party.title": "Fiestas Privadas",
    "serve.party.text":
      "Quinceañera, asado en el patio, cumpleaños — nosotros traemos el frío.",
    "serve.bar.title": "Bares y Restaurantes",
    "serve.bar.text":
      "Hielo de mixología cristalino para cócteles que lucen y saben increíble.",
    "serve.event.title": "Eventos y Espacios",
    "serve.event.text":
      "Suministro a gran escala con camión refrigerado — pedidos al por mayor bienvenidos.",

    // Products
    "product.title1": "Nuestros",
    "product.title2": "Productos",
    "product.sub":
      "Hielo de calidad premium. Bolsas de primera clase. Siempre.",
    "product.regular.title": "Hielo Regular",
    "product.regular.text":
      "Hielo en bolsa estándar para necesidades diarias. Perfecto para bebidas, hieleras y servicio de alimentos.",
    "product.mixology.title": "Hielo de Mixología",
    "product.mixology.text":
      "Hielo cristalino de derretimiento lento para cócteles artesanales. Tu bar merece lo mejor.",
    "product.bulk.title": "Suministro al Mayor",
    "product.bulk.text":
      "Pedidos grandes para eventos y clientes mayoristas. Crecemos contigo.",

    // Stats
    "stats.onDemand": "Entrega a Pedido",
    "stats.service": "Servicio al Cliente en Miami",
    "stats.quality": "Bolsas de Calidad de Primera",
    "stats.fleet": "Flota de Camiones Refrigerados",

    // Why
    "why.title1": "¿Por Qué",
    "why.title2": "Mr IceCube?",
    "why.sub":
      "No solo somos vendedores de hielo. Somos tu socio de negocio.",
    "why.fast.title": "Entrega Rápida",
    "why.fast.text":
      "A pedido y programada. Nuestro camión refrigerado siempre listo para recorrer Miami-Dade.",
    "why.price.title": "Mejor Precio",
    "why.price.text":
      "Precios competitivos para pequeñas tiendas y grandes eventos. Sin cargos ocultos.",
    "why.quality.title": "Calidad Superior",
    "why.quality.text":
      "Bolsas de primera clase, hielo apto para alimentos y empaque que tus clientes notarán.",
    "why.local.title": "Raíces Locales",
    "why.local.text":
      "Somos de Miami-Dade de principio a fin. Conocemos los barrios, el calor y el ritmo de vida.",
    "why.flex.title": "Servicio Flexible",
    "why.flex.text":
      "¿Pedido de último momento? ¿Gran fin de semana? Nos adaptamos. Siempre.",
    "why.love.title": "La Gente nos Ama",
    "why.love.text":
      "Nuestros clientes vuelven — y nos recomiendan. La prueba está en el hielo.",

    // ⚠️ FIKCYJNE placeholdery z mockupu. NIE RENDEROWAĆ tych kluczy
    // dopóki klient (Mr IceCube Miami) nie dostarczy prawdziwych cytatów
    // wraz z pisemną zgodą na ich publikację. Renderowanie fikcyjnych
    // testimoniali = naruszenie FTC Endorsement Guidelines (USA).
    // Patrz DEC-006 w DECISIONS.md. Blokada do odwołania.
    // Testimonials
    "testi.title1": "Lo Que Dicen",
    "testi.title2": "Nuestros Clientes",
    "testi.1.text":
      "Cada vez que necesito hielo para el fin de semana, Mr IceCube aparece — rápido, sin problemas. El mejor servicio de Miami.",
    "testi.1.author": "Carlos M.",
    "testi.1.role": "Dueño de tienda, Hialeah",
    "testi.2.text":
      "Nuestro bar de cócteles pasó al hielo de mixología de Mr IceCube — la diferencia es enorme. Nuestros clientes lo notan.",
    "testi.2.author": "Diana R.",
    "testi.2.role": "Gerente de bar, Wynwood",
    "testi.3.text":
      "Los llamé a las 8am para una fiesta esa tarde. Llegaron antes del mediodía. Eso es la confiabilidad que uno quiere.",
    "testi.3.author": "Mike T.",
    "testi.3.role": "Organizador de eventos, Doral",

    // How it works
    "how.title1": "¿Cómo",
    "how.title2": "Funciona?",
    "how.sub": "Conseguir tu hielo nunca ha sido tan fácil.",
    "how.1.title": "Llama o Escribe",
    "how.1.text":
      "Contáctanos al (305) 812-7096. Dinos qué necesitas y dónde estás.",
    "how.2.title": "Confirmamos",
    "how.2.text":
      "Cotización rápida, programación flexible. Confirmamos tu hora de entrega de inmediato.",
    "how.3.title": "Entregamos",
    "how.3.text":
      "Nuestro camión refrigerado lleva tu hielo frío y a tiempo. Siempre.",
    "how.4.title": "Quédate Fresco",
    "how.4.text":
      "Eso es todo. Estás en marcha. Volveremos cuando nos necesites.",

    // Contact
    "contact.title1": "Contáct",
    "contact.title2": "anos",
    "contact.sub": "¿Listo para ordenar? ¿Tienes una pregunta? Aquí estamos.",
    // ⚠️ contact.phone* NIEUŻYWANE po REFACTOR-02 (implementacja DEC-008).
    // Karta Phone usunięta z Contact — numer jest teraz w tekście obu CTA
    // (contact.ctaWhatsApp, contact.ctaCall). Klucze zachowane na wypadek
    // przywrócenia karty w v2 (np. jeśli doda się więcej informacji: godziny pracy).
    "contact.phoneLabel": "Teléfono",
    "contact.phoneNote": "Llama o escribe en cualquier momento",
    // ⚠️ Email card NIE JEST renderowana w v1 (DEC-007).
    // Powód: mockup miał mezfashion69@yahoo.com — prywatny, nieprofesjonalny adres.
    // Odblokowanie wymaga: (1) skonfigurowany email domenowy (np. info@mricecubemia.com),
    // (2) aktualizacja klucza contact.emailValue (obecnie brak), (3) update DEC-007.
    // Klucze poniżej zachowane dla szybkiego odblokowania bez odbudowy słownika.
    "contact.emailLabel": "Email",
    "contact.emailNote": "Respondemos rápido",
    // ⚠️ contact.web* NIEUŻYWANE po REFACTOR-01 (DEC-008).
    // Karta Website usunięta z Contact — landing sam jest stroną, link do siebie redundantny.
    // Klucze zachowane dla przywrócenia jeśli zmieni się pozycjonowanie.
    "contact.webLabel": "Website",
    "contact.webNote": "Visítanos en línea",
    // ⚠️ contact.address* NIEUŻYWANE po REFACTOR-01 (DEC-008).
    // Karta Address usunięta z Contact — model konwersji nie wymaga lokalizacji fizycznej.
    // Klient przyjeżdża, nie jego klienci. Klucze zachowane dla v2 (np. jeśli otworzy showroom).
    "contact.addressLabel": "Dirección",
    "contact.addressValue": "228 NW 32 Ave\nMiami, FL 33125",
    "contact.addressNote": "Servimos todo Miami-Dade",
    "contact.ctaWhatsApp": "Escríbenos — (305) 812-7096",
    "contact.ctaCall": "Llámanos — (305) 812-7096",

    // Footer
    "footer.sub":
      "Hielo Regular / Hielo de Mixología y Más · Servicio Rápido Mejor Precio",
    "footer.copy":
      "Mr IceCube Miami. Todos los derechos reservados.",
  },
};
