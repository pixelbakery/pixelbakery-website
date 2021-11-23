import React from "react";
import { NavLink } from "react-router-dom";
import SitemapTable from "../components/parts/sitemap-table";

function ComponentName() {
  return (
    <main id='' className='my-4 py-24 bg-pink-light'>
      <div className='mx-auto pt-14 max-w-5xl'>
        <h1 className='text-6xl text-wine-200'>Sitemap</h1>
      </div>
      <SitemapTable category={"primary"} />
      <SitemapTable category={"secondary"} />
      <SitemapTable category={"utility"} />
    </main>
  );
}

export default ComponentName;
