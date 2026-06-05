import { Link } from "react-router";
import {
  Award,
  BadgeCheck,
  Eye,
  MapPin,
  Target,
  Users,
} from "lucide-react";

import client1 from "../image/31ab8968-57f0-42fb-8280-74a64410a67a.jfif";
import client2 from "../image/client2.jpg";
import client3 from "../image/client3.jpg";
import client4 from "../image/client4.jpg";

export function About() {
  return (
    <div className="pb-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">
            About Gurudas Agro Machinery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-green-100">
            Trusted agricultural machinery dealership in Newasa, Ahilyanagar.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto mt-6 max-w-6xl space-y-3 px-4 text-sm text-gray-700 lg:px-6 sm:text-base">
        <p>
          Gurudas Agro Machinery is a dedicated agricultural machinery dealership based at
          Khadka Phata, in front of Patanjali Dairy Plant, Tal: Newasa, Dist:
          Ahilyanagar, Maharashtra. We focus on providing farmers with reliable harvesting
          solutions that improve productivity and reduce downtime.
        </p>
        <p>
          As an <span className="font-semibold">Official Dealer of Malkit Harvesting</span>{" "}
          and <span className="font-semibold">Sub Dealer of Kartar Harvesting</span>, we
          offer a complete range of combine harvesters, straw reapers and genuine spare
          parts. Our team understands local farming needs and recommends machines that fit
          the crop, land size and budget of each farmer.
        </p>
        <p>
          With a convenient location on the Newasa road and long-term relationships with
          farmers in the region, Gurudas Agro Machinery is committed to honest guidance,
          transparent pricing and timely after-sales support.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              To support farmers in Newasa and surrounding areas with dependable harvesting
              machines, genuine spare parts and trusted guidance, ensuring smooth and
              profitable harvesting seasons year after year.
            </p>
          </div>
          <div className="rounded-xl border border-orange-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Our Vision</h2>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              To become the most trusted harvesting machinery partner for farmers in
              Ahilyanagar district, known for quality machines, fair pricing and reliable
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Why Farmers Choose Us</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Authorized Dealer
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              Official Malkit dealer and Kartar sub dealer with direct company support.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Expert Team</h3>
            <p className="mt-1 text-sm text-gray-700">
              Experienced staff who understand local crops, fields and machinery needs.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Local Service
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              Easy access from Newasa with local support and quick spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* Local service area */}
      <section className="mt-8 bg-green-700">
        <div className="mx-auto max-w-6xl px-4 py-6 text-white lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Local Service Area</h2>
                <p className="mt-1 text-sm text-green-100">
                  Khadka Phata, In Front of Patanjali Dairy Plant, Tal: Newasa, Dist:
                  Ahilyanagar, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-green-600 px-4 py-3 text-sm text-green-50">
              Easy access for farmers from Newasa, Shrirampur, Kopargaon and nearby
              villages.
            </div>
          </div>
        </div>
      </section>

      {/* Client gallery preview */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Our Happy Farmer Clients
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Trusted by 200+ farmers across Newasa and nearby areas.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              View Testimonials
            </Link>
          </div>
          <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-4">
            {[client1, client2, client3, client4].map((img, index) => (
              <div
                key={index}
                className="h-40 rounded-xl bg-cover bg-center shadow-md transition duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto mt-8 max-w-6xl px-4 lg:px-6">
        <div className="rounded-2xl bg-gray-100 p-6 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Work With Us?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Visit our showroom at Khadka Phata or contact us today to discuss your
            harvesting machine and spare part requirements.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-700"
          >
            Contact Gurudas Agro Machinery
          </Link>
        </div>
      </section>
    </div>
  );
}

