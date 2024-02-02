import dynamic from "next/dynamic";

export const AuthorAvatar = dynamic(() => import("./Author/AuthorAvatar"));
export const ContentTypeTab = dynamic(
  () => import("./ContentTypeTab/ContentTypeTab"),
);
export const Footer = dynamic(() => import("./Footer/Footer"));
export const HeroBanner = dynamic(() => import("./Hero/HeroBanner"));
export const Header = dynamic(() => import("./reuseable/Header"));
export const NavBar = dynamic(() => import("./NavBar/NavBar"));
export const Separator = dynamic(() => import("./reuseable/Separator"));
export const PostCard = dynamic(() => import("./Post/PostCard"));
export const PostHeader = dynamic(() => import("./Post/PostHeader/PostHeader"));
export const TagCard = dynamic(() => import("./Tag/TagCard"));
export const ThemeSwitcher = dynamic(() => import("./reuseable/ThemeSwitcher"));
