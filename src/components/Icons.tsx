import type { ReactElement, ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const wrap = (children: ReactNode) => (props: P) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const LeafIcon = wrap(
  <>
    <path d="M4 20c0-8 6-14 16-15 0 10-5 15-11 15H4Z" />
    <path d="M4 20c3-4 6-6 10-8" />
  </>,
);
export const ShieldIcon = wrap(<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />);
export const HeartIcon = wrap(
  <path d="M12 20s-7-4.3-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.7-7 9-7 9Z" />,
);
export const SparkIcon = wrap(
  <>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
  </>,
);
export const BuildingIcon = wrap(
  <>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-5h6v5" />
    <path d="M9 10h.01M15 10h.01" />
  </>,
);
export const ChartIcon = wrap(
  <>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 16v-5M13 16V8M18 16v-3" />
  </>,
);
export const BriefcaseIcon = wrap(
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
    <path d="M3 12h18" />
  </>,
);
export const GrowthIcon = wrap(
  <>
    <path d="M4 18L10 12l3 3 7-7" />
    <path d="M20 8h-4M20 8v4" />
  </>,
);
export const CoinsIcon = wrap(
  <>
    <ellipse cx="9" cy="7" rx="5" ry="2.5" />
    <path d="M4 7v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" />
    <path d="M10 16.5c.8 1.2 2.8 2 5 2 2.8 0 5-1.1 5-2.5v-5" />
    <ellipse cx="15" cy="11" rx="5" ry="2.5" />
  </>,
);
export const CompassIcon = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-2 4-4 2 2-4 4-2Z" />
  </>,
);
export const ClockIcon = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);
export const PhoneIcon = wrap(
  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a1 1 0 01-1.1 1A16 16 0 014 5.1 1 1 0 015 4Z" />,
);
export const MailIcon = wrap(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </>,
);
export const PinIcon = wrap(
  <>
    <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </>,
);
export const CheckIcon = wrap(<path d="M4 12.5l5 5L20 6.5" />);
export const MenuIcon = wrap(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = wrap(<path d="M6 6l12 12M18 6L6 18" />);
export const ArrowIcon = wrap(
  <>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </>,
);
export const SearchIcon = wrap(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </>,
);
export const LockIcon = wrap(
  <>
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 018 0v3" />
  </>,
);

export const iconMap: Record<string, (p: P) => ReactElement> = {
  briefcase: BriefcaseIcon,
  chart: ChartIcon,
  growth: GrowthIcon,
  coins: CoinsIcon,
  compass: CompassIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  heart: HeartIcon,
};
