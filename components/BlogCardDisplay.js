import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({
  heading,
  image,
  date,
  sub_description,
  posted_by,
  description,
  content,
}) => {
  return (
    <article className="col-span-full rounded-lg shadow-xl p-8 px-10 flex flex-col gap-4">
      <div className="flex gap-6 items-center flex-wrap lg:flex-nowrap">
        <figure className="w-3/6 text-center">
          <Image
            src={image}
            alt="blog image"
            width={400}
            height={300}
            className="w-full rounded-lg drop-shadow-lg"
          />
        </figure>
        <div id="details" className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">{heading.toUpperCase()}</h1>
          <p className="text-xl font-medium text-gray-500">{sub_description}</p>
          <h5>{posted_by}</h5>
          <h5 className="text-xl font-medium">{date}</h5>
        </div>
      </div>
      <p className="text-xl text-justify">{description}</p>
      <div className="text-xl text-justify" dangerouslySetInnerHTML={{ __html: content }}></div>{" "}
    </article>
  );
};
