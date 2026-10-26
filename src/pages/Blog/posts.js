import { BLOG_INDEX_PATH, blogEntries, blogPostPath } from "../../config/blogIndex";
import CationResinDMPlantGuide from "./articles/CationResinDMPlantGuide";
import DMPlantResinReplacementGuide from "./articles/DMPlantResinReplacementGuide";
import ResinSpecificationsExplained from "./articles/ResinSpecificationsExplained";
import WaterSoftenerNotRemovingHardness from "./articles/WaterSoftenerNotRemovingHardness";

// Slug and title come from src/config/blogIndex.js so the navigation, the
// search index and these posts can never drift apart. Everything else about a
// post lives here, next to the component that renders it.
const postDetails = {
  "how-to-select-cation-resin-dm-plant": {
    category: "Selection guide",
    description:
      "The cation stage sets the tone for the whole demineraliser. How to match a strong acid cation resin to your feedwater, duty and outlet spec — without over-buying or under-specifying.",
    excerpt:
      "Match capacity, form and bead size to your DM duty — and pick the AGRION cation grade that fits.",
    published: "2026-01-12",
    Component: CationResinDMPlantGuide,
  },
  "dm-plant-resin-replacement-guide": {
    category: "Maintenance",
    description:
      "Every ion exchange charge reaches the end of its working life. How to know when a DM plant resin replacement is due, and how to plan a clean change without an unplanned outage.",
    excerpt:
      "The signs your DM resin is due for a change, and how to plan a clean replacement.",
    published: "2026-01-20",
    Component: DMPlantResinReplacementGuide,
  },
  "water-softener-not-removing-hardness": {
    category: "Troubleshooting",
    description:
      "Scale is back and the plant is complaining. How to diagnose a water softener that is no longer removing hardness — fouling, degradation or exhaustion — and how to fix it.",
    excerpt:
      "Fouling, degradation or exhaustion — how to diagnose a softener that no longer softens.",
    published: "2026-01-27",
    Component: WaterSoftenerNotRemovingHardness,
  },
  "resin-specifications-explained": {
    category: "Technical",
    description:
      "The three ion exchange resin specifications every engineer checks first — what total exchange capacity, bead size and sieve analysis mean, why they matter, and how to compare grades.",
    excerpt:
      "The three specifications every engineer checks first — what they mean and why they matter.",
    published: "2026-02-03",
    Component: ResinSpecificationsExplained,
  },
};

export const blogPosts = blogEntries.map((entry) => ({
  ...entry,
  ...postDetails[entry.slug],
}));

export { BLOG_INDEX_PATH, blogPostPath };

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}
