 import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10 w-full">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between gap-6">

        {/* Company */}
        <div className="max-w-sm">
          <h2 className="text-lg font-bold text-white">
            Gurudas Agro Machinery
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Dealer of harvesting machines and spare parts.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <div className="mt-2 text-sm space-y-2">
            <div className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919921996694" className="hover:underline hover:text-white">
                  +91 99219 96694
                </a>
                <a href="tel:+919921919105" className="hover:underline hover:text-white">
                  +91 99219 19105
                </a>
              </div>
            </div>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@gurudasagro.com
            </p>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 border-t border-gray-800 py-3">
        © {new Date().getFullYear()} Gurudas Agro Machinery
      </div>
    </footer>
  );
}