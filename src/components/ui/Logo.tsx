import Image from "next/image";
import logoHybrid from "../../../public/images/logo/rv-logo-hybrid.png";
import logoNavy from "../../../public/images/logo/rv-logo-navy.png";

type LogoProps = {
  className?: string;
  /**
   * "dark" (default): copper icon + white wordmark, for dark backgrounds (navbar, footer).
   * "navy": original navy lockup, for light backgrounds if ever needed.
   */
  variant?: "dark" | "navy";
};

export default function Logo({ className = "h-10", variant = "dark" }: LogoProps) {
  const src = variant === "navy" ? logoNavy : logoHybrid;

  return (
    <a href="#inicio" className="flex items-center" aria-label="R & V Minerals SpA, ir a inicio">
      <Image src={src} alt="R & V Minerals SpA" className={`w-auto ${className}`} priority />
    </a>
  );
}
