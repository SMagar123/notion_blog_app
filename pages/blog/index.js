import { getPages } from "@/utils/notion";
import BlogCard from "@/components/BlogCard";

const BlogLandingPage = ({ posts }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-4 grid grid-cols-4 gap-8 md:mx-0 md:grid-cols-12 md:gap-8">
        <h1 className="text-4xl font-bold col-span-4 md:col-span-full">
          BLOG LIST
        </h1>
        <div className="col-span-4 md:col-span-full flex items-center gap-8 flex-wrap overflow-hidden">
          {posts.map((blogitem) => {
            return (
              <BlogCard
                key={blogitem.id}
                slug={blogitem.properties.Slug.rich_text[0].plain_text}
                cover={blogitem.properties.Image.files[0].name}
                heading={blogitem.properties.Heading.title[0].plain_text}
                sub_description={
                  blogitem.properties.Sub_description.rich_text[0].plain_text
                }
                posted_date={blogitem.properties.Date.date.start}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPages();

  return {
    props: {
      posts,
    },
  };
};

export default BlogLandingPage;
