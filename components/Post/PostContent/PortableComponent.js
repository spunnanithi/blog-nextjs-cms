import { slugify } from "@utils/helpers";
import CopyableCodeBlock from "./CopyableCodeBlock";
import CopyableCodeSnippet from "./CopyableCodeSnippet";
import ImagePortableComponent from "./ImagePortableComponent";

// Styling for post block content
const myPortableTextComponents = {
  // Block
  block: {
    normal: ({ children }) => (
      <p className="my-8 text-base dark:text-myGreyBlue md:text-lg">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="my-8 text-3xl font-bold leading-tight md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={slugify(children)}
        className="my-8 pt-24 text-2xl font-semibold leading-tight md:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(children)}
        className="my-8 text-xl font-semibold leading-tight md:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={slugify(children)}
        className="my-8 text-lg font-semibold leading-tight md:text-xl"
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        id={slugify(children)}
        className="my-8 text-base font-semibold leading-tight md:text-lg"
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        id={slugify(children)}
        className="my-8 text-sm font-semibold leading-tight md:text-base"
      >
        {children}
      </h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl font-medium italic leading-relaxed text-gray-900 dark:text-white">
          {children}
        </p>
      </blockquote>
    ),
  },

  // List
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc pl-7">{children}</ul>
    ),
    number: ({ children }) => <ol className="my-4 pl-7">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="my-2 pl-1 dark:text-myGreyBlue">{children}</li>
    ),
    number: ({ children }) => (
      <li className="my-1.5 list-decimal pl-1 dark:text-myGreyBlue">
        {children}
      </li>
    ),
  },

  // Marks
  marks: {
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const targ = !value?.href?.startsWith("/") ? "_blank" : undefined;
      return !value?.href?.startsWith("/") ? (
        <a
          href={value.href}
          rel={rel}
          target={targ}
          className=" font-semibold text-mySteelBlue hover:underline"
          aria-label={`${children}`}
        >
          {children}
        </a>
      ) : (
        <Link
          href={value.href}
          className=" font-semibold text-mySteelBlue hover:underline"
        >
          {children}
        </Link>
      );
    },
    highlight: ({ children }) => (
      <span className="rounded-md bg-myDarkBlue bg-opacity-15 px-2 py-2 font-mono text-sm font-bold leading-normal text-myLightGreyBlue dark:bg-myLightGreyBlue dark:text-myDarkBlue">
        {children}
      </span>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold dark:text-myLightGreyBlue">
        {children}
      </strong>
    ),
    emphasis: ({ children }) => <em className="font-italic ">{children}</em>,
    code: ({ children }) => (
      <CopyableCodeSnippet>{children}</CopyableCodeSnippet>
    ),
  },

  // Types
  types: {
    codeField: ({ value }) => <CopyableCodeBlock>{value}</CopyableCodeBlock>,
    image: ({ value }) => <ImagePortableComponent value={value} />,
  },
};

export default myPortableTextComponents;
