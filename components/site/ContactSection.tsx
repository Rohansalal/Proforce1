import { Phone, Mail, MapPin } from "lucide-react"
import { QuoteForm } from "@/components/site/QuoteForm"

const SERVICE_OPTIONS = [
  "Armed Security",
  "Unarmed Security",
  "Mobile Patrol Security",
  "Event Security",
  "Construction Security",
  "Fire Watch Security",
  "Executive Protection",
  "Hospital Security",
  "Bank Security",
  "Retail & Shopping Center Security",
  "On-Site Security",
  "Other / Not Sure",
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-white/95 p-8 shadow-2xl backdrop-blur md:grid-cols-2 md:p-12 lg:gap-16">

          {/* Left: Copy + contact details */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-700">Get In Touch</p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Request a Free Security Quote
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your property and we'll build a protection plan around it. Our
              California dispatch team responds fast — often within the hour.
            </p>

            <div className="mt-10 space-y-6">
              <a href="tel:+18007797691" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600 text-white transition-colors group-hover:bg-red-700">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">24/7 Dispatch</span>
                  <span className="text-lg font-bold text-slate-900">(800) 779-7691</span>
                </span>
              </a>

              <a href="mailto:info@proforce1protection.com" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white transition-colors group-hover:bg-red-600">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Us</span>
                  <span className="break-all text-base font-medium text-slate-900">info@proforce1protection.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Main Office</span>
                  <span className="text-base font-medium text-slate-900">1671 W Katella Ave Suite 106, Anaheim, CA 92802</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <QuoteForm
              serviceName="Homepage General Inquiry"
              buttonLabel="Send My Request"
              serviceLabel="Service Needed"
              serviceOptions={SERVICE_OPTIONS}
              messageLabel="How Can We Help?"
              messagePlaceholder="Tell us about your property and security needs..."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
