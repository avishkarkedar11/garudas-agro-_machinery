
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  DollarSign,
  Phone,
  Star,
  Wrench,
} from "lucide-react";

import client1 from "../image/31ab8968-57f0-42fb-8280-74a64410a67a.jfif";
import client2 from "../image/client2.jpg";
import client3 from "../image/client3.jpg";
import client4 from "../image/client4.jpg";
import storefront from "../image/storefront.jpg";

const clients = [
  {
    name: "Ramesh Patil",
    location: "Newasa, Ahilyanagar",
    image: client1,
    testimonial:
      "Purchased Malkit Combine from Gurudas Agro Machinery. Excellent service and genuine spare parts.",
  },
  {
    name: "Sunil Shinde",
    location: "Newasa, Ahilyanagar",
    image: client2,
    testimonial:
      "Very reliable dealer. Got straw reaper at best price. Happy with the quality and after-sales support.",
  },
  {
    name: "Vijay Pawar",
    location: "Kopargaon, Ahilyanagar",
    image: client3,
    testimonial:
      "Best place for harvesting spare parts. Always available and affordable prices.",
  },
  {
    name: "Ganesh Jadhav",
    location: "Shrirampur, Ahilyanagar",
    image: client4,
    testimonial:
      "Bought Kartar harvester last season. Running smoothly with genuine parts from Gurudas Agro.",
  },
];

export function Home() {
  return (
    <div className="space-y-12 pb-10">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${storefront})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-emerald-900/60" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 text-white lg:flex-row lg:items-center lg:px-6">

          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-orange-200">
              Gurudas Agro Machinery
            </p>

            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Quality Harvesting Machines & Genuine Spare Parts
            </h1>

            <p className="mt-4 text-lg text-gray-100">
              Official Dealer of Malkit Harvesting | Sub Dealer of Kartar Harvesting
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/machines"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
              >
                View Machines
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-lg font-semibold text-white hover:bg-orange-600"
              >
                Contact Now
                <Phone className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-200">
              Serving farmers in Newasa, Ahilyanagar and nearby areas.
            </p>
          </div>

        </div>
      </section>

      {/* Highlight cards */}
      <section className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-5 md:grid-cols-3">

          <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
            <BadgeCheck className="text-green-600" />
            <div>
              <h3 className="font-semibold">Official Dealer</h3>
              <p className="text-sm text-gray-600">
                Authorized dealer for Malkit Harvesting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
            <DollarSign className="text-orange-500" />
            <div>
              <h3 className="font-semibold">Affordable Spare Parts</h3>
              <p className="text-sm text-gray-600">
                Genuine spare parts at farmer-friendly prices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
            <Wrench className="text-green-600" />
            <div>
              <h3 className="font-semibold">Straw Reaper Available</h3>
              <p className="text-sm text-gray-600">
                High-performance straw reapers with service support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Client Reviews */}
      <section className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Happy Farmers</h2>

            <div className="mt-2 flex justify-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-yellow-400" />
              ))}
            </div>

            <p className="text-sm text-gray-600">
              Trusted by 200+ Farmers
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {clients.map((client) => (
              <article
                key={client.name}
                className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">{client.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {client.location}
                  </p>

                  <p className="mt-3 text-sm italic text-gray-600 flex-1 leading-relaxed">
                    "{client.testimonial}"
                  </p>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">

          <div>
            <h2 className="text-2xl font-bold">
              Ready to Get Your Harvesting Machine?
            </h2>

            <p className="text-sm text-green-100">
              Call us today for best offers.
            </p>
          </div>

          <div className="flex gap-3">

            <a
              href="tel:+919921996694"
              className="flex items-center gap-2 bg-white text-green-700 px-5 py-3 rounded-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 border border-white px-5 py-3 rounded-lg"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

