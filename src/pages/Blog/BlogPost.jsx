import { useParams } from "react-router";

import NotFound from "../NotFound/NotFound";
import { getBlogPost } from "./posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <NotFound />;
  }

  const { Component } = post;
  return <Component />;
}
