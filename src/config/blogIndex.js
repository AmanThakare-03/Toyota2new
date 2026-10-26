// Single source of truth for the published blog posts.
//
// Deliberately dependency-free: src/config/navigation.js and
// src/config/searchIndex.js import this, so it must not pull any page
// component into the header bundle.
//
// Slugs are the ones that shipped with the project (src/pages/Blog/posts.js
// and the cards in src/pages/Blog/Blog.jsx). No slug is invented here.

export const blogEntries = [
  {
    slug: "how-to-select-cation-resin-dm-plant",
    title: "How to Select the Right Cation Resin for Your DM Plant",
  },
  {
    slug: "dm-plant-resin-replacement-guide",
    title: "DM Plant Resin Replacement: When and How to Change Resin",
  },
  {
    slug: "water-softener-not-removing-hardness",
    title: "Why Your Water Softener Stopped Removing Hardness",
  },
  {
    slug: "resin-specifications-explained",
    title: "Total Exchange Capacity, Bead Size & Sieve Analysis Explained",
  },
];

export const BLOG_INDEX_PATH = "/blog";

export function blogPostPath(slug) {
  return `${BLOG_INDEX_PATH}/${slug}`;
}
