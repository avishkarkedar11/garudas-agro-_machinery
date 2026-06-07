import { Link } from "react-router";
import { BadgeCheck, Phone, Wrench } from "lucide-react";

import malkitImg from "../image/shopping.webp";
import kartarImg from "../image/kartar-4000-14-feet-combine-harvester-5.jpg";
import strawReaperImg from "../image/Straw-Reaper.png";

const machines = [
  {
    name: "Malkit Combine Harvester",
    dealerType: "Official Dealer",
    dealerColor: "green",
    badgeText: "Official Dealer",
    image: malkitImg,
  },
  {
    name: "Kartar Harvester",
    dealerType: "Sub Dealer",
    dealerColor: "orange",
    badgeText: "Sub Dealer",
    image: kartarImg,
  },
  {
    name: "Straw Reaper",
    dealerType: "In Stock",
    dealerColor: "green",
    badgeText: "In Stock",
    image: strawReaperImg,
  },
];

export function Machines() {
  return (
    <div className="pb-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Our Harvesting Machines
          </h1>
          <p className="mt-3 text-sm sm:text-base text-green-100">
            High-performance Malkit and Kartar combine harvesters and straw reapers for
            your farm.
          </p>
        </div>
      </section>

      {/* Machines grid */}
      <section className="mx-auto mt-6 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {machines.map((machine) => (
            <article
              key={machine.name}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${machine.image})` }}
                />
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  <BadgeCheck className="h-3 w-3 text-green-400" />
                  <span>{machine.badgeText}</span>
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  Call for Price
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="text-lg font-bold text-gray-900">{machine.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  High-performance combine harvester
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li>• High productivity for faster harvesting</li>
                  <li>• Low fuel consumption for better savings</li>
                  <li>• Easy maintenance with available spare parts</li>
                  <li>• Durable construction for long life</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700"
                  >
                    Enquire Now
                  </Link>
                  <a
                    href="tel:+919921996694"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 shadow-md hover:bg-gray-200"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto mt-10 max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Why Choose Gurudas Agro Machinery?
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">100% Genuine</h3>
            <p className="mt-1 text-sm text-gray-600">
              Authorized dealer with original Malkit and Kartar machines and spare parts.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Wrench className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Expert Support</h3>
            <p className="mt-1 text-sm text-gray-600">
              Guidance for machine selection, installation and after-sales service.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Best Prices</h3>
            <p className="mt-1 text-sm text-gray-600">
              Farmer-friendly pricing and seasonal offers on machines and straw reapers.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 bg-green-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-white sm:flex-row sm:text-left lg:px-6">
          <div>
            <h2 className="text-2xl font-bold">
              Want to know which machine suits your farm?
            </h2>
            <p className="mt-1 text-sm text-green-100">
              Call us and talk to our expert team in Newasa.
            </p>
          </div>
          <a
            href="tel:+919921996694"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-green-700 shadow-lg hover:bg-gray-100"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </div>
      </section>
    </div>
  );
}

