import { alfredo, ScriptItem } from "https://deno.land/x/alfredo@0.4.1/mod.ts";
import Fuse from "https://esm.sh/fuse.js@6.6.2";
import { elements, HTMLElement } from "./data/index.ts";

const searchTableItemToOutput = (item: HTMLElement) => {
  const output: ScriptItem = {
    title: `${item.name} :: "${item.uni}"`,
    subtitle: `HTML: ${item.htmlentity ?? item.htmlcode} ${
      item.htmlentity !== null ? `| HTML: ${item.htmlcode}` : ""
    } | HEX: ${item.hex} | CSS: ${item.css} | RENDER: ${item.uni}`,
    arg: item.htmlentity ?? item.htmlcode,
    mods: {
      alt: {
        arg: item.css,
        subtitle: `Copy CSS code: ${item.css}`,
      },
      cmd: {
        arg: item.uni,
        subtitle: `Copy Unicode symbol: ${item.uni}`,
      },
      shift: {
        arg: item.htmlentity ?? item.htmlcode,
        subtitle: `Paste HTML: ${item.htmlentity ?? item.htmlcode}`,
      },
    },
  };

  return {
    ...item,
    output,
  };
};

const allItems = elements.map(searchTableItemToOutput);

const fuse = new Fuse(allItems, {
  keys: ["name"],
  includeMatches: true,
  includeScore: true,
});

const results = alfredo.input.length > 0 ? fuse.search(alfredo.input) : [];
const output = results.slice(0, 20).map((res) => res.item.output);

alfredo.output(output);
