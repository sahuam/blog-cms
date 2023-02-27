import React, { useEffect, useState } from "react";

export async function getServerSideProps() {
  const num = await new Promise((resolve) => {
    setTimeout(() => resolve(10), 10000);
  });

  return {
    props: { num },
  };
}

function index({ num }) {
  return (
    <div>
      <h1>
        {`SSR = > Hello World`} {num}
      </h1>
    </div>
  );
}

export default index;
