import React from "react";

import {
  getPageContent,
  getPageBySlug,
  notionClient,
  getPages,
} from "@/utils/notion";

import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { BlogCard } from "@/components/BlogCardDisplay";

const Blog = ({ post, html }) => {
  return (
    <div>
      <BlogCard
        image={post[0].properties.Image.files[0].name}
        heading={post[0].properties.Heading.title[0].plain_text}
        description={post[0].properties.Description.rich_text[0].plain_text}
        date={post[0].properties.Date.date.start}
        content={html}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPages();

  const paths = posts.map((post) => ({
    params: { slug: post.properties.Slug.rich_text[0].plain_text },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const post = await getPageBySlug(params.slug);
  if (!post) notFound();

  const content = await getPageContent(post[0].id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return { props: { post, html } };
}

export default Blog;
