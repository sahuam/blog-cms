import React, { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: {
      num: await new Promise((resolve) => setTimeout(() => resolve(10), 5000)),
    },
  };
}

function index({ num }) {

  return (
    <div>
      <h1>Hello World {num}</h1>
    </div>
  );
}

export default index;
