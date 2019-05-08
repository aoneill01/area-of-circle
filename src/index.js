import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "area-of-a-circle";

Runtime.load(notebook, Inspector.into(document.body));
