import React from "react";

const Header = ({ title = "" }) => {
  return (
    <header>
      <div className="mx-auto max-w-2xl text-center text-4xl font-header uppercase">
        {title}
      </div>
    </header>
  );
};

export default Header;
