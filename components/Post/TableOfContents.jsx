import { slugify } from "@utils/helpers";

const TableOfContents = ({ headings }) => {
  return (
    <div className="rounded-sm border-2 border-mySteelBlue">
      <h2 className="border-b-2 border-mySteelBlue px-10 py-2 text-2xl font-bold">
        Table of Contents
      </h2>
      <nav className="py-2 pl-10">
        <ul>
          {headings?.map((heading) => (
            <li key={heading?._key} className="mb-2 text-lg font-semibold">
              <a
                className="hover:underline"
                href={`#${slugify(heading?.children[0]?.text)}`}
              >
                {heading?.children[0]?.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
