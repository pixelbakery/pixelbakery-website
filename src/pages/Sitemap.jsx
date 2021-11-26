import React from "react";
import { NavLink } from "react-router-dom";
import SitemapTable from "../components/parts/sitemap-table";

function SiteMap() {
  return (
    <main id='' className='my-4 py-24 bg-pink-light'>
      <div className='mx-auto pt-14 max-w-5xl'>
        <div className='my-16'>
          <h1 className='text-6xl text-wine-200'>Quick Links</h1>
          <ul className='text-wine text-lg mt-8 py-3 pr-2 list-disc list-inside'>
            <li>
              <NavLink
                to='https://github.com/jordanlambrecht/pb-oct-2022'
                className='underline'
                target='_blank'
              >
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink
                to='https://pixelbakery.monday.com/boards/911081678/'
                className='underline'
                target='_blank'
              >
                Monday Board
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className='text-6xl text-wine-200'>Sitemap</h1>
      </div>
      <SitemapTable category={"primary"} />
      <SitemapTable category={"secondary"} />
      <SitemapTable category={"utility"} />
    </main>
  );
}

export default SiteMap;
