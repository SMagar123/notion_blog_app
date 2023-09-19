import Link from "next/link";
import ROUTES from "../consts/Routes";
import Image from "next/image";

const BlogCard = ({ slug, cover, heading, sub_description, posted_date }) => {
  return (
    <div className="w-max md:w-max h-96 shadow-md rounded-lg overflow-hidden flex flex-col gap-3">
      <Image
        src={cover}
        alt="CoverImage"
        width={400}
        height={300}
        className="rounded-lg h-4/6 hover:scale-x-150 transition duration-500"
      />
      <div className="px-4 flex flex-col gap-1">
        <h2 className="font-medium text-xl">{heading ? heading : "Heading"}</h2>
        <p className="w-max text-gray-500">
          {sub_description ? sub_description.slice(0, 45) : "sub description"}
        </p>
        <p className="text-sm ">{posted_date ? posted_date : new Date()}</p>

        <Link
          href={ROUTES.BLOG_DETAILS.replace(":slug", slug)}
          className="text-sm text-blue-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
