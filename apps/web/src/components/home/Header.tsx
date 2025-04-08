import React from "react";
const Header = () => {
  return (
    <React.Fragment>
      <section className="max-w-screen-2xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-[2fr_3fr]">
        <div className="h-[50svh] max-h-96 bg-red-200">dd</div>
        <div className="h-[50svh] max-h-96 bg-amber-200 hidden sm:block">
          dd
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
