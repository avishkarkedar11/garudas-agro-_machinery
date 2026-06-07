import { FormEvent, useState } from "react";
import {
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Thank you! Your message has been sent. We will contact you soon.");
      event.currentTarget.reset();
    }, 600);
  };

  return (
    <div className="pb-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-sm sm:text-base text-green-100">
            Reach out for machines, spare parts or any harvesting support.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="mx-auto mt-6 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div
            className="flex flex-col justify-between rounded-2xl bg-green-600 p-5 text-white shadow-lg transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Call Now</h2>
                <p className="text-sm text-green-100">
                  Talk directly with our team
                </p>
              </div>
            </div>
            <div className="mt-4 text-lg font-bold flex flex-wrap gap-x-3 gap-y-1">
              <a href="tel:+919921996694" className="hover:underline">+91 99219 96694</a>
              <span className="text-green-300">/</span>
              <a href="tel:+919921919105" className="hover:underline">+91 99219 19105</a>
            </div>
            <p className="mt-1 text-xs text-green-100">
              Available 9:00 AM to 7:00 PM (Season time extended)
            </p>
          </div>

          <div
            className="flex flex-col justify-between rounded-2xl bg-orange-500 p-5 text-white shadow-lg transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <p className="text-sm text-orange-100">
                  Send machine or parts inquiry
                </p>
              </div>
            </div>
            <div className="mt-4 text-lg font-bold flex flex-wrap gap-x-3 gap-y-1">
              <a href="https://wa.me/919921996694" target="_blank" rel="noreferrer" className="hover:underline">+91 99219 96694</a>
              <span className="text-orange-200">/</span>
              <a href="https://wa.me/919921919105" target="_blank" rel="noreferrer" className="hover:underline">+91 99219 19105</a>
            </div>
            <p className="mt-1 text-xs text-orange-100">
              Share photos of your machine or part for quick help.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
            <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mt-1 text-sm text-gray-600">
              Fill in the details below and we will call you back as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
              <div>
                <label className="mb-1 block font-semibold text-gray-800">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-800">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-800">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-800">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Write about your requirement: machine / spare parts / service"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-700 disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                <span>{submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
              <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-green-600" />
                  <span>
                    Khadka Phata, In Front of Patanjali Dairy Plant, Tal: Newasa, Dist:
                    Ahilyanagar, Maharashtra, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-green-600" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919921996694" className="hover:text-green-700 hover:underline">
                      +91 99219 96694
                    </a>
                    <a href="tel:+919921919105" className="hover:text-green-700 hover:underline">
                      +91 99219 19105
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <a
                    href="mailto:info@gurudasagro.com"
                    className="hover:text-green-700"
                  >
                    info@gurudasagro.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-green-600 shrink-0" />
                  <a
                    href="https://www.instagram.com/gurudas_agro_machinery?igsh=OGVpeXcyMHl5aHJw"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-700 truncate"
                  >
                    @gurudas_agro_machinery
                  </a>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-green-50 p-3 text-xs text-green-900">
                <div className="font-semibold">Business Hours</div>
                <p className="mt-1">
                  Monday - Sunday: 9:00 AM to 7:00 PM
                  <br />
                  (During harvesting season, timings may be extended.)
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-gray-100 p-5 shadow-md">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-700" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Find Us on Map
                </h2>
              </div>
              <div className="mt-3 h-64 overflow-hidden rounded-xl bg-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Khadka%20Phata%2C%20in%20front%20of%20Patanjali%20Dairy%20Plant%20%2CTal%3A%20Newasa%2CDist%3A%20Ahilyanagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Khadka+Phata,+in+front+of+Patanjali+Dairy+Plant+,Tal:+Newasa,Dist:+Ahilyanagar"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Instagram button */}
            <a
              href="https://www.instagram.com/gurudas_agro_machinery?igsh=OGVpeXcyMHl5aHJw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-3 text-[15px] sm:text-lg font-semibold text-white shadow-md hover:opacity-95"
            >
              <Instagram className="h-5 w-5 shrink-0" />
              <span className="truncate">Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

