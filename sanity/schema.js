import { author } from "./schemas/author";
import { blockContent } from "./schemas/blockContent";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";

export const schema = {
  types: [post, tag, author, blockContent],
};
