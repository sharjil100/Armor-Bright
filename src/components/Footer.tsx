import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  MessageCircle,
  PlayCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--border)] bg-[var(--background-2)]/40">
      <div className="absolute inset-x-0 top-0 h-px divider-line" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image
                  src="/logos/logo-1.png"
                  alt="Armor Bright"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-lg">
                Armor <span className="text-gradient">Bright</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)] max-w-md">
              Premium permanent roofline lighting. Hidden by day. Brilliant by
              night. Designed, installed, and supported by professionals.
            </p>
            <div className="mt-6 flex gap-3">
              {[Camera, MessageCircle, PlayCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 rounded-full glass flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/80">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="#experience" className="hover:text-white">Experience</Link></li>
              <li><Link href="#modes" className="hover:text-white">Modes &amp; Scenes</Link></li>
              <li><Link href="#app" className="hover:text-white">App Control</Link></li>
              <li><Link href="#hidden" className="hover:text-white">Hidden Install</Link></li>
              <li><Link href="#process" className="hover:text-white">Our Process</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-[var(--muted)]">
              <li className="flex gap-3">
                <MapPin className="size-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    Office
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=23500+Beachwood+OH+44122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    23500 Beachwood, OH 44122
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    Call
                  </div>
                  <a href="tel:+12162849265" className="hover:text-white">
                    216-284-9265
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    Email
                  </div>
                  <a
                    href="mailto:Support@armorbrightusa.com"
                    className="hover:text-white break-all"
                  >
                    Support@armorbrightusa.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Armor Bright. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/30">·</span>
            <span>See our privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
