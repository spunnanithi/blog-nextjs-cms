import { slugify } from "@utils/helpers";

const TableOfContents = ({ headings }) => {
  return (
    <div className="rounded-sm border-2 border-myLightGreyBlue bg-slate-800 text-myLightGreyBlue dark:border-slate-800 dark:bg-myLightGreyBlue dark:text-slate-800">
      <h2 className="border-b-2 border-myLightGreyBlue px-10 py-2 text-2xl font-bold dark:border-slate-800">
        Table of Contents
      </h2>
      <nav className="py-2 pl-12">
        <ul>
          {headings?.map((heading) => (
            <li key={heading?._key} className="mb-2 text-lg font-semibold">
              <span className="mr-2">-</span>
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
