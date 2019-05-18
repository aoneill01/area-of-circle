import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@aoneill/area-of-a-circle";

new Runtime().module(notebook, Inspector.into(document.body));
