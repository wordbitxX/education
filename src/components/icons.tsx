import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  ...props,
});

export const Icon = {
  Search: (p: IconProps) => (
    <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
  ),
  ArrowRight: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></svg>
  ),
  ArrowUpRight: (p: IconProps) => (
    <svg {...base(p)}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base(p)}><path d="m5 12 5 5L19 7" /></svg>
  ),
  X: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  Menu: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  ChevronDown: (p: IconProps) => (
    <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
  ),
  ChevronRight: (p: IconProps) => (
    <svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>
  ),
  Calendar: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
  ),
  Clock: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  User: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
  ),
  Users: (p: IconProps) => (
    <svg {...base(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 19c0-3 2.9-4.5 6.5-4.5s6.5 1.5 6.5 4.5" /><path d="M15.5 5a3.5 3.5 0 0 1 0 6M18 14.7c2 .7 3.5 2.1 3.5 4.3" /></svg>
  ),
  GraduationCap: (p: IconProps) => (
    <svg {...base(p)}><path d="M22 9 12 4 2 9l10 5 10-5Z" /><path d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" /><path d="M22 9v5" /></svg>
  ),
  Book: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" /></svg>
  ),
  BookOpen: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 6c-2-1.5-4.5-2-8-2v14c3.5 0 6 .5 8 2 2-1.5 4.5-2 8-2V4c-3.5 0-6 .5-8 2Z" /><path d="M12 6v14" /></svg>
  ),
  File: (p: IconProps) => (
    <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /></svg>
  ),
  FileText: (p: IconProps) => (
    <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M8 13h8M8 17h5" /></svg>
  ),
  Clipboard: (p: IconProps) => (
    <svg {...base(p)}><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 2h6v4H9z" /><path d="M9 12h6M9 16h6" /></svg>
  ),
  Calculator: (p: IconProps) => (
    <svg {...base(p)}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8" /><path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" /></svg>
  ),
  Trophy: (p: IconProps) => (
    <svg {...base(p)}><path d="M8 4h8v6a4 4 0 0 1-8 0Z" /><path d="M8 5H4v2a3 3 0 0 0 3 3M16 5h4v2a3 3 0 0 1-3 3" /><path d="M12 14v3M8 21h8M10 17h4l1 4H9Z" /></svg>
  ),
  Bell: (p: IconProps) => (
    <svg {...base(p)}><path d="M18 9a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" /><path d="M10 19a2 2 0 0 0 4 0" /></svg>
  ),
  Home: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 11 9-8 9 8" /><path d="M5 9.5V21h14V9.5" /></svg>
  ),
  Layout: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></svg>
  ),
  Settings: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>
  ),
  Logout: (p: IconProps) => (
    <svg {...base(p)}><path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4" /><path d="M10 8 6 12l4 4" /><path d="M6 12h9" /></svg>
  ),
  MapPin: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  Phone: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  Wallet: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M16 12h.01M4 9h16" /><path d="M8 5v4" /></svg>
  ),
  CreditCard: (p: IconProps) => (
    <svg {...base(p)}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></svg>
  ),
  Star: (p: IconProps) => (
    <svg {...base(p)}><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9L6.6 20l1-6.1L3.2 9.4l6.1-.9Z" /></svg>
  ),
  CheckCircle: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
  ),
  Alert: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 10v4M12 17h.01" /></svg>
  ),
  Info: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
  ),
  Plus: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
  ),
  Minus: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12h14" /></svg>
  ),
  Upload: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 20h16" /></svg>
  ),
  Download: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 4v12M7 12l5 5 5-5" /><path d="M4 20h16" /></svg>
  ),
  Send: (p: IconProps) => (
    <svg {...base(p)}><path d="m22 2-11 11" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
  ),
  Camera: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" /><circle cx="12" cy="14" r="3.5" /></svg>
  ),
  Bus: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 10h18M7 17v2M17 17v2" /><circle cx="7" cy="13" r="1.2" /><circle cx="17" cy="13" r="1.2" /></svg>
  ),
  Sparkles: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>
  ),
  Robot: (p: IconProps) => (
    <svg {...base(p)}><rect x="4" y="8" width="16" height="11" rx="2" /><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6" /><path d="M3 12v4M21 12v4" /></svg>
  ),
  Moon: (p: IconProps) => (
    <svg {...base(p)}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" /></svg>
  ),
  Globe: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
  ),
  Target: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></svg>
  ),
  Heart: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" /></svg>
  ),
  Lightbulb: (p: IconProps) => (
    <svg {...base(p)}><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.5-1 1.2-1 2V16h-5v-.1c0-.8-.4-1.5-1-2A6 6 0 0 1 12 3Z" /></svg>
  ),
  Compass: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="m15 9-2 6-4 1 2-6Z" /></svg>
  ),
  Shield: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  Dollar: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 2v20M16.5 6.5c-.9-1.6-2.6-2.5-4.5-2.5-2.5 0-4.5 1.5-4.5 4s2 3.5 4.5 4 4.5 1.5 4.5 4-2 4-4.5 4c-1.9 0-3.6-.9-4.5-2.5" /></svg>
  ),
  ShieldCheck: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  Eye: (p: IconProps) => (
    <svg {...base(p)}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>
  ),
  Code: (p: IconProps) => (
    <svg {...base(p)}><path d="m8 7-5 5 5 5M16 7l5 5-5 5M13 4l-2 16" /></svg>
  ),
  Layers: (p: IconProps) => (
    <svg {...base(p)}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>
  ),
  TrendingUp: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
  ),
  Filter: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 5h18l-7 8v5l-4 2v-7Z" /></svg>
  ),
  Copy: (p: IconProps) => (
    <svg {...base(p)}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h8" /></svg>
  ),
  Building: (p: IconProps) => (
    <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" /></svg>
  ),
  Hash: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 9h14M5 15h14M10 3 8 21M16 3l-2 18" /></svg>
  ),
  ExternalLink: (p: IconProps) => (
    <svg {...base(p)}><path d="M15 4h5v5" /><path d="M10 14 20 4" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
  ),
  Print: (p: IconProps) => (
    <svg {...base(p)}><path d="M7 8V3h10v5" /><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 13h10v8H7z" /></svg>
  ),
  Wheat: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 21V8" /><path d="M12 8c-2.5 0-4-1.5-4-4 2.5 0 4 1.5 4 4ZM12 8c2.5 0 4-1.5 4-4-2.5 0-4 1.5-4 4ZM12 15c-2.5 0-4-1.5-4-4 2.5 0 4 1.5 4 4ZM12 15c2.5 0 4-1.5 4-4-2.5 0-4 1.5-4 4Z" /></svg>
  ),
  MessageCircle: (p: IconProps) => (
    <svg {...base(p)}><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" /></svg>
  ),
  Play: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 4.5v15l12-7.5-12-7.5Z" /></svg>
  ),
  IdCard: (p: IconProps) => (
    <svg {...base(p)}><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="11" r="2" /><path d="M5 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 9h5M14 13h4" /></svg>
  ),
  Grid: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
  ),
  Notebook: (p: IconProps) => (
    <svg {...base(p)}><rect x="5" y="3" width="15" height="18" rx="2" /><path d="M9 3v18M4 8h2M4 12h2M4 16h2M13 8h4M13 12h3" /></svg>
  ),
  Pencil: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></svg>
  ),
  Award: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="9" r="6" /><path d="m9 14-1 7 4-2 4 2-1-7" /></svg>
  ),
  Video: (p: IconProps) => (
    <svg {...base(p)}><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 11 6-3v8l-6-3Z" /></svg>
  ),
  Receipt: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3 5 4.5Z" /><path d="M9 9h6M9 13h4" /></svg>
  ),
  Coins: (p: IconProps) => (
    <svg {...base(p)}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" /></svg>
  ),
  PieChart: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3a9 9 0 1 0 9 9h-9V3Z" /><path d="M15.5 3.5A9 9 0 0 1 20.5 8.5L15.5 10Z" /></svg>
  ),
  Chat: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 5h16v11H8l-4 4V5Z" /><path d="M8 9h8M8 12.5h5" /></svg>
  ),
  Megaphone: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 11 14-6v14L3 13v-2Z" /><path d="M3 11H2.5a1.5 1.5 0 0 0 0 3H3M7 13.5V19a1 1 0 0 0 1 1h1.5" /><path d="M20 9.5a3 3 0 0 1 0 5" /></svg>
  ),
  Truck: (p: IconProps) => (
    <svg {...base(p)}><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8" /><circle cx="6.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></svg>
  ),
  Box: (p: IconProps) => (
    <svg {...base(p)}><path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" /></svg>
  ),
  Bed: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 18V7M3 12h18v6" /><path d="M21 18v-3M7 12V9h5v3" /><circle cx="16" cy="10" r="1.6" /></svg>
  ),
  Certificate: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 8h6M7 11h4" /><circle cx="17.5" cy="16.5" r="2.5" /><path d="m16 19-.5 3 2-1 2 1-.5-3" /></svg>
  ),
  Branch: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="19" r="2.2" /><circle cx="19" cy="19" r="2.2" /><path d="M12 7.2V12M12 12H5v4.8M12 12h7v4.8" /></svg>
  ),
  Lock: (p: IconProps) => (
    <svg {...base(p)}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" /></svg>
  ),
  Cloud: (p: IconProps) => (
    <svg {...base(p)}><path d="M7 18a4.5 4.5 0 0 1-.3-9A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5H7Z" /></svg>
  ),
  Bank: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 9 9-5 9 5" /><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18" /></svg>
  ),
  Zap: (p: IconProps) => (
    <svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
  ),
  Smartphone: (p: IconProps) => (
    <svg {...base(p)}><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18.5h2" /></svg>
  ),
};

export type IconName = keyof typeof Icon;
