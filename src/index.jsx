import React from "react";
import {createRoot} from "react-dom/client";
import "./Styles/style.css"
import LinksApp from "./Components/LinksApp";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
document.head.appendChild(link);

const root = createRoot(document.getElementById("root"));
root.render(<LinksApp />);