import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Machines } from "./components/Machines";
import { SpareParts } from "./components/SpareParts";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "machines", Component: Machines },
      { path: "spare-parts", Component: SpareParts },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);

