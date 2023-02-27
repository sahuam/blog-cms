import React from "react";

function DasboardMenu({ setType }) {
  const handleMenuNav = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={handleMenuNav} value="PAGES">
            Pages
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DasboardMenu;
