import { defineType } from "sanity";

const HighlightDecorator = (props) => (
  <span style={{ backgroundColor: "orange" }}>{props.children}</span>
);

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
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
});
