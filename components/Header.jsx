import React from "react";

const Header = ({ title = "" }) => {
  return (
    <header>
      <div className="mx-auto mb-10 mt-5 text-balance py-5 text-center text-5xl font-header uppercase">
        {title}
      </div>
    </header>
  );
};

export default Header;
