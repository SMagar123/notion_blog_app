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
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>{" "}
      <Image src={image} alt="blog image" width={400} height={300} />
      <h1>{heading}</h1>
      <p>{sub_description}</p>
      <h5>{posted_by}</h5>
      <h5>{date}</h5>
      <p>{description}</p>
    </article>
  );
};
