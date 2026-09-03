import heroFood from "@/assets/hero-food.jpg";
import aboutQuality from "@/assets/about-quality.jpg";
import catPackaged from "@/assets/cat-packaged.jpg";
import realEstateImg from "@/assets/realestate.jpg";
import financeImg from "@/assets/finance.jpg";
import agriImg from "@/assets/agri.jpg";

export const images = {
  hero: heroFood,
  quality: aboutQuality,
  packaged: catPackaged,
  realEstate: realEstateImg,
  finance: financeImg,
  agri: agriImg,
};

export const company = {
  name: "Mother Baby Food Products (OPC) Private Limited",
  shortName: "Mother Baby Food Products",
  promoter: "Suresh Narayan Kharpude",
  address:
    "Wakodi Road, Taluka Nagar, Ahmednagar, Ahmed Nagar, Maharashtra, 414001, India",
  shortAddress: "Wakodi Road, Taluka Nagar, Ahmednagar, Maharashtra 414001",
  phone: "2125414552",
  email: "support.motherbabyfood@gmail.com",
  about:
    "Mother Baby Food Products (OPC) Private Limited is a quality-focused company built around food products, with a wider business vision that also spans real estate and finance. Our approach is simple: honest work, careful sourcing and long-term relationships with the people and businesses we serve.",
  vision:
    "To be recognised as a dependable, quality-first business that grows sustainably — creating value for customers, partners and the communities we operate in.",
  mission:
    "To deliver quality-oriented food products, build lasting customer relationships, maintain professional standards in everything we do, and responsibly explore opportunities across multiple business sectors.",
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  details: string;
  image: string;
  status: "Active" | "Draft";
};

export const productCategories: ProductCategory[] = [
  {
    id: "p1",
    name: "Packaged Food",
    description:
      "Everyday packaged staples handled with careful sourcing and hygienic packing practices.",
    details:
      "Demo content: this category represents packaged food lines such as grains, flours and ready-to-cook staples, presented here as sample portfolio content.",
    image: catPackaged,
    status: "Active",
  },
  {
    id: "p2",
    name: "Grocery Essentials",
    description:
      "Core kitchen essentials families rely on, selected for consistency and value.",
    details:
      "Demo content: sample grocery basket covering pulses, rice, edible staples and other regular household requirements.",
    image: agriImg,
    status: "Active",
  },
  {
    id: "p3",
    name: "Nutritional Products",
    description:
      "Nutrition-oriented food options intended for balanced daily diets.",
    details:
      "Demo content: illustrative nutrition-focused range. No health or medical claims are made in this demo portfolio.",
    image: aboutQuality,
    status: "Active",
  },
  {
    id: "p4",
    name: "Processed Food",
    description:
      "Processed food categories managed with hygiene-first handling standards.",
    details:
      "Demo content: representative processed food segment showcasing the company's operational focus areas.",
    image: catPackaged,
    status: "Active",
  },
  {
    id: "p5",
    name: "Specialty Food",
    description:
      "Selected specialty items for customers looking beyond everyday staples.",
    details:
      "Demo content: specialty and seasonal food segment shown as sample portfolio material.",
    image: heroFood,
    status: "Active",
  },
  {
    id: "p6",
    name: "Daily Consumption Products",
    description:
      "High-frequency daily-use food products focused on reliability and availability.",
    details:
      "Demo content: fast-moving daily consumption category included for portfolio demonstration.",
    image: agriImg,
    status: "Active",
  },
];

export type Project = {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  image: string;
  status: "Active" | "Draft";
};

export const realEstateProjects: Project[] = [
  {
    id: "r1",
    name: "Green Horizon Residency",
    type: "Residential",
    location: "Ahmednagar, Maharashtra",
    description:
      "Sample residential concept focused on open green spaces, natural light and family-friendly planning.",
    image: realEstateImg,
    status: "Active",
  },
  {
    id: "r2",
    name: "Urban Crest",
    type: "Commercial",
    location: "Ahmednagar, Maharashtra",
    description:
      "Sample commercial concept designed for retail frontage and flexible office floor plates.",
    image: realEstateImg,
    status: "Active",
  },
  {
    id: "r3",
    name: "Prime City Enclave",
    type: "Residential & Commercial",
    location: "Ahmednagar, Maharashtra",
    description:
      "Sample mixed-use concept combining residences with neighbourhood-level commercial space.",
    image: realEstateImg,
    status: "Active",
  },
];

export type FinanceService = {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "Active" | "Draft";
};

export const financeServices: FinanceService[] = [
  {
    id: "f1",
    name: "Business Finance",
    description:
      "General information and guidance around structuring finance requirements for business needs.",
    icon: "briefcase",
    status: "Active",
  },
  {
    id: "f2",
    name: "Financial Planning",
    description:
      "Demo advisory content covering planning, budgeting and cash-flow discipline for businesses.",
    icon: "chart",
    status: "Active",
  },
  {
    id: "f3",
    name: "Investment Guidance",
    description:
      "Informational guidance only. No returns are promised and no regulated advice is offered.",
    icon: "growth",
    status: "Active",
  },
  {
    id: "f4",
    name: "Capital Solutions",
    description:
      "Support in understanding capital requirements for expansion and working-capital cycles.",
    icon: "coins",
    status: "Active",
  },
  {
    id: "f5",
    name: "Business Advisory",
    description:
      "Practical, general business advisory conversations across our operating verticals.",
    icon: "compass",
    status: "Active",
  },
  {
    id: "f6",
    name: "Financial Support",
    description:
      "Coordination and documentation support for business finance discussions.",
    icon: "shield",
    status: "Active",
  },
];

export type ServiceItem = {
  id: string;
  name: string;
  category: "Food" | "Real Estate" | "Finance";
  description: string;
  enabled: boolean;
};

export const serviceItems: ServiceItem[] = [
  { id: "s1", name: "Food Product Solutions", category: "Food", description: "Category planning and product-line support for food businesses.", enabled: true },
  { id: "s2", name: "Product Sourcing", category: "Food", description: "Sourcing coordination with a focus on consistency and quality.", enabled: true },
  { id: "s3", name: "Quality-Focused Operations", category: "Food", description: "Process discipline and hygiene-first handling practices.", enabled: true },
  { id: "s4", name: "Business Support", category: "Food", description: "Day-to-day operational support for food business partners.", enabled: true },
  { id: "s5", name: "Property Opportunities", category: "Real Estate", description: "Identifying and evaluating property opportunities.", enabled: true },
  { id: "s6", name: "Project Consultation", category: "Real Estate", description: "Consultation on project positioning and planning.", enabled: true },
  { id: "s7", name: "Real Estate Support", category: "Real Estate", description: "Documentation and coordination support for property matters.", enabled: true },
  { id: "s8", name: "Business Financial Support", category: "Finance", description: "General support for business finance requirements.", enabled: true },
  { id: "s9", name: "Financial Planning", category: "Finance", description: "Budgeting, planning and cash-flow discussions.", enabled: true },
  { id: "s10", name: "Capital Advisory", category: "Finance", description: "Informational guidance on capital structuring.", enabled: true },
  { id: "s11", name: "Business Consultation", category: "Finance", description: "Broad business consultation across our verticals.", enabled: true },
];

export type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  date: string;
  status: "New" | "Read" | "Resolved";
};

export const contactMessages: Message[] = [
  { id: "m1", name: "Rahul Deshmukh", email: "rahul.d@example.com", phone: "9876543210", subject: "Bulk grocery enquiry", date: "2026-08-28", status: "New" },
  { id: "m2", name: "Sneha Patil", email: "sneha.patil@example.com", phone: "9823011245", subject: "Distribution partnership", date: "2026-08-25", status: "Read" },
  { id: "m3", name: "Amit Joshi", email: "amit.joshi@example.com", phone: "9765412300", subject: "Real estate site visit", date: "2026-08-21", status: "Resolved" },
  { id: "m4", name: "Priya Kulkarni", email: "priya.k@example.com", phone: "9922334455", subject: "Finance advisory call", date: "2026-08-18", status: "New" },
  { id: "m5", name: "Vikas Shinde", email: "vikas.shinde@example.com", phone: "9011223344", subject: "Product catalogue request", date: "2026-08-12", status: "Read" },
];

export const heroContent = {
  heading: "Nourishing Lives Through Quality Food Products",
  description:
    "Mother Baby Food Products (OPC) Private Limited is committed to delivering quality-focused food products while building trusted business opportunities across food, real estate and finance.",
  ctaText: "Explore Food Products",
  imageUrl: heroFood,
};
