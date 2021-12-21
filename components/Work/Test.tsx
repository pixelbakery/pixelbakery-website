import React, { useEffect, useState } from 'react'
import portfolio from '../../data/portfolio'

const test = [
  {
    name: 'My best client',
    category: ['all', 'front-end', 'ux-ui', 'mobile', 'others'],
  },
  {
    name: 'My best client',
    category: ['all', 'front-end', 'ux-ui', 'mobile', 'others'],
  },
  {
    name: 'My best client',
    category: ['all', 'front-end', 'ux-ui', 'mobile', 'others'],
  },
  {
    name: 'My best client',
    category: ['all', 'front-end', 'ux-ui', 'mobile', 'others'],
  },
  {
    name: 'My best client',
    category: ['all', 'front-end', 'ux-ui', 'mobile', 'others'],
  },
]

function Test() {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(portfolio)
  }, [])

  useEffect(() => {
    setProjects([])

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }))
    setProjects(filtered)
  }, [filter])
  return (
    <>
      <div className='portfolio__labels'>
        <a href='/#' active={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </a>
        <a href='/#' active={filter === 'frontend'} onClick={() => setFilter('frontend')}>
          Frontend
        </a>
        <a href='/#' active={filter === 'mobile'} onClick={() => setFilter('mobile')}>
          Mobile
        </a>
        <a href='/#' active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>
          UX/UI
        </a>
        <a href='/#' active={filter === 'others'} onClick={() => setFilter('others')}>
          Others
        </a>
      </div>
      <div className='portfolio__container'>
        {projects.map((item) =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : '',
        )}
      </div>
    </>
  )
}
export default Test
