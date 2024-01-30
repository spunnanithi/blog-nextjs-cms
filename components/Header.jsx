import React from "react";

const Header = ({ title = "" }) => {
  return (
    <>
      <div className="mx-auto mb-10 mt-10 text-balance py-5 text-center text-5xl font-header uppercase">
        {title}
      </div>
    </>
  );
};

export default Header;
