import { slugify } from "@utils/helpers";

const TableOfContents = ({ headings }) => {
  return (
    <div className=" max-w-2xl rounded-md border-2 dark:border-mySteelBlue">
      <h2 className="border-b py-2 pl-10 text-2xl font-bold dark:border-mySteelBlue">
        Table of Contents
      </h2>
      <nav className="py-2 pl-10">
        <ul>
          {headings?.map((heading) => (
            <li key={heading?._key} className="mb-2">
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
