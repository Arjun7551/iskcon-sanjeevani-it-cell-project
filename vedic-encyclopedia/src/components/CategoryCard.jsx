import Link from "next/link";

export default function CategoryCard({ title, desc, slug, image }) {
  return (
    <Link
      href={`/encyclopedia/${slug}`}
      className="min-w-[320px] bg-white rounded-3xl border border-orange-200 shadow-md p-7 
                 transform transition duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover rounded-2xl mb-6 
                   transform transition duration-300 hover:scale-105"
      />

      <h4 className="text-xl font-semibold text-orange-950 mb-2">
        {title}
      </h4>

      <p className="text-sm text-orange-700">{desc}</p>
    </Link>
  );
}
