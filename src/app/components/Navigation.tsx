import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/machines", label: "Machines" },
  { to: "/spare-parts", label: "Spare Parts" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-green-100 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex flex-col" onClick={handleClose}>
          <span className="text-lg font-extrabold tracking-tight text-green-700 sm:text-2xl">
            Gurudas Agro Machinery
          </span>
          <span className="text-xs font-medium text-gray-600 sm:text-sm">
            Official Dealer of Malkit Harvesting | Sub Dealer of Kartar Harvesting
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm font-semibold transition-colors",
                  isActive ? "text-green-700" : "text-gray-700 hover:text-green-700",
                ].join(" ")
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:+919921996694"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-white lg:hidden">
          <div className="flex h-full flex-col">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-4 text-white">
              <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-base font-bold">
                    Gurudas Agro Machinery
                  </span>
                  <span className="text-[11px] font-medium text-green-100">
                    Official Dealer of Malkit | Sub Dealer of Kartar
                  </span>
                </div>
                <button
                  type="button"
                  className="rounded-md p-1.5 text-white/90"
                  onClick={handleClose}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-4">
              <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={handleClose}
                    className={({ isActive }) =>
                      [
                        "block rounded-xl border px-4 py-3 text-base font-semibold",
                        isActive
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-gray-200 text-gray-800",
                      ].join(" ")
                    }
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-4">
                <a
                  href="tel:+919921996694"
                  className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-base font-semibold text-white shadow-md"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

