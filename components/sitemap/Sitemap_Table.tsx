import sitemap from '@data/sitemap'

function Sitemap_Table({ category }) {
  return (
    <section id={'sitemap-' + category} className=''>
      <div className='mx-auto mt-16 max-w-5xl'>
        <h2 className='text-3xl text-blue pb-0 mb-0'> {category} Content </h2>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='text-md font-semibold text-wine text-opacity-90'>
              <th className='z-20 pt-8 sticky bg-pink-light top-0 p-0 '>
                <div className='pb-3 pr-2 border-b border-wine-300'>Page</div>
              </th>
              <th className='z-20 pt-8 sticky bg-pink-light top-0 p-0'>
                <div className='pb-3 px-2 border-b border-wine-300'>Path</div>
              </th>
              <th className='z-20 pt-8 sticky bg-pink-light top-0 p-0'>
                <div className='pb-3 px-2 border-b border-wine-300'>React Component</div>
              </th>
              <th className='z-20 pt-8 sticky bg-pink-light top-0 p-0'>
                <div className='pb-3 pl-2 border-b border-wine-300 text-center'>Active</div>
              </th>
            </tr>
          </thead>
          <tbody className='align-baseline'>
            {sitemap.map((location) =>
              location.category === category ? (
                <tr key={location.page} className='py-3 pr-2  border-b border-wine-100'>
                  <td className='py-3 pr-2 whitespace-nowrap'>{location.page}</td>
                  <td className='py-3 px-2  whitespace-nowrap'>
                    <a href={location.path} className=''>
                      <span className='text-left'>{location.path}</span>
                      <span className='float-right pr-16'>→</span>
                    </a>
                  </td>
                  <td className='py-3 px-2 whitespace-nowrap'>{location.component}</td>
                  <td className='py-3 text-center px-2 whitespace-nowrap'>
                    {location.active === true ? <span>✅</span> : <span>⛔</span>}
                  </td>
                </tr>
              ) : null,
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Sitemap_Table
