const MEDIA = "https://onflnvhalvuysnfhjzzd.supabase.co/storage/v1/object/public/rivoningo-media";
export const media = (file: string) => `${MEDIA}/${file}`;

export const business = {
  name: "Rivoningo Steel & Interior Design",
  legal: "Rivoningo Steel & Construction (PTY) LTD",
  owner: "Justice Reaans Marutha",
  founded: 2021,
  address: "Benfarm Majeje Rockview, Stand 1457, Phalaborwa, South Africa",
  email: "rivoningosteelinterior@gmail.com",
  phoneDisplay: "076 029 3750",
  whatsapp: "27760293750",
  hours: "Open 24 hours",
};

export const services = [
  "Kitchen units", "Kitchen remodeling", "Bedroom cabinets", "Wall wardrobes", "Bathroom vanities",
  "TV stands", "Floating shelves", "Bars", "Office interiors", "Bulkheads", "Partitioning",
  "Storage shelves", "Renovations", "Carports", "Gates", "Wall panels", "Window frames", "Security doors",
];

export const projects = [
  { title: "Golden Glass Kitchen", category: "Kitchen units", image: "luxury-kitchen.jpg" },
  { title: "Marble Island Kitchen", category: "Kitchen units", image: "marble-kitchen.jpg" },
  { title: "Graphite Corner Kitchen", category: "Kitchen units", image: "grey-kitchen.jpg" },
  { title: "Fitted Wall Wardrobe", category: "Wall wardrobes", image: "wardrobe-installation.jpg" },
  { title: "Moonlit Entry Console", category: "Wall panels", image: "entryway-design.jpg" },
  { title: "Arc Mirror Feature Wall", category: "Interior design", image: "mirror-entryway.jpg" },
];

export interface BookingFields {
  name: string;
  phone: string;
  service: string;
  date: string;
  location: string;
  details: string;
}

export function bookingMessage(values: BookingFields) {
  return [
    "Hello Rivoningo Steel & Interior Design, I would like to book a consultation.",
    `Name: ${values["name"]}`, `Phone: ${values["phone"]}`, `Service: ${values["service"]}`,
    `Preferred date: ${values["date"] || "Flexible"}`, `Location: ${values["location"] || "Not provided"}`,
    `Project details: ${values["details"]}`,
  ].join("\n");
}
export const whatsappUrl = (text: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
