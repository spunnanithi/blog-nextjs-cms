import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AuthorAvatar = ({ src, alt }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
};

export default AuthorAvatar;
