<<<<<<< HEAD
import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);
=======
import kebabcase from "lodash.kebabcase";

export const slugifyStr = (str: string) => kebabcase(str);
>>>>>>> upstream/main

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
