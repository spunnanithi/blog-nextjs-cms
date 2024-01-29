import { Rule } from "sanity";

const HighlightDecorator = (props) => (
  <span style={{ backgroundColor: "orange" }}>{props.children}</span>
);

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              {
                title: "Highlight",
                value: "highlight",
                icon: () => "H",
                component: HighlightDecorator,
              },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
          },
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alternative text" }],
        },
        { name: "codeField", name: "codeField", type: "code" },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
};
