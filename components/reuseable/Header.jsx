import React from "react";

const Header = ({ title = "" }) => {
  return (
    <>
      <div className="mx-auto my-8 text-balance py-5 text-center text-3xl font-header uppercase sm:my-10 sm:text-5xl">
        {title}
      </div>
    </>
  );
};

export default Header;
