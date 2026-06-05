import { Link } from "react-router";
import { Phone, Wrench } from "lucide-react";

const categories = [
  {
    name: "Blades",
    items: ["Cutter Blades", "Knife Guards", "Blade Sections", "Ledger Plates"],
  },
  {
    name: "Belts",
    items: ["V-Belts", "Flat Belts", "Conveyor Belts", "Transmission Belts"],
  },
  {
    name: "Bearings",
    items: ["Ball Bearings", "Roller Bearings", "Pillow Blocks", "Bearing Housings"],
  },
  {
    name: "Engine Parts",
    items: ["Pistons", "Rings", "Filters", "Spark Plugs"],
  },
  {
    name: "Chains & Sprockets",
    items: ["Drive Chains", "Sprocket Wheels", "Chain Links", "Tensioners"],
  },
  {
    name: "Other Parts",
    items: ["Pulleys", "Gears", "Shafts", "Hydraulic Parts"],
  },
];

export function SpareParts() {
  return (
    <div className="pb-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Harvesting Spare Parts</h1>
          <p className="mt-3 text-sm sm:text-base text-orange-100">
            Genuine, affordable and quickly available harvesting machine spare parts.
          </p>
          <a
            href="tel:+919921996694"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-orange-600 shadow-lg hover:bg-gray-100"
          >
            Call for Availability
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-6 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-white p-4 text-center shadow-md">
            <div className="text-2xl">✓</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Genuine Parts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Original and compatible parts for long machine life.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-md">
            <div className="text-2xl">₹</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Affordable Prices
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Farmer-friendly pricing with transparent rates.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-md">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Quick Availability
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Most common parts ready in stock for urgent needs.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-md">
            <div className="text-2xl">🔧</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Expert Guidance
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Help in selecting the right part for your machine.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Spare Parts Categories</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.name}
              className="flex flex-col rounded-xl bg-white p-5 shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-1">
                    <span className="mt-0.5 text-green-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919921996694"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600"
              >
                Call for Price
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Brand compatibility */}
      <section className="mx-auto mt-10 max-w-6xl px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Brand Compatibility</h2>
        <p className="mt-2 text-sm text-gray-600">
          We supply spare parts suitable for leading harvesting machine brands.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {["Malkit", "Kartar", "John Deere", "Others"].map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-xl bg-white px-4 py-6 text-lg font-semibold text-gray-900 shadow-md"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 bg-green-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-white sm:flex-row sm:text-left lg:px-6">
          <div>
            <h2 className="text-2xl font-bold">
              Can&apos;t Find What You Need?
            </h2>
            <p className="mt-1 text-sm text-green-100">
              Call us or send an enquiry. We will help you get the right spare part.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919921996694"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-green-700 shadow-lg hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-500"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

