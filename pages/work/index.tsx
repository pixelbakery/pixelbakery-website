import React from 'react'

import Work_Services from '../../components/Work/Work_Services'
import Work_Portfolio from '../../components/Work/Work_Portfolio'
import Work_Client from '../../components/Work/Work_Client'
import Work_Awards from '../../components/Work/Work_Awards'
import PageHeader_VariableHeight from '../../components/PageHeader/PageHeader_VarH'
// import Work_TestPortfolio from '../../components/Work/Work_TestPortfolio'
import Link from 'next/link'
// import { getAllProjects } from '../../lib/api_project'
import Project from '../../types/project'
import Main from '../../components/Main'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
type Props = {
  allProjects: Project[]
}
const Work = () => {
  // console.log(allProjects)

  return (
    <Main>
      <PageHeader_VariableHeight header='What We Make' subheader='copy copy copy ' />

      {/* <Work_Services /> */}
      {/* <Work_TestPortfolio allProjects={allProjects} /> */}
      <Work_Portfolio />
      {/* <div>
          <ul>
            {allProjects.map((post) => {
              const { row, path } = post
              return (
                <Link key={path} href={path}>
                  <a>
                    <h3>
                      {post.path} {row}
                    </h3>
                  </a>
                </Link>
              )
            })    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))}
          </ul>
        </div> */}
      <Work_Client />
      <Work_Awards />
    </Main>
  )
}
export default Work
// export async function getStaticProps() {
//   const projectDirectory = path.join(process.cwd(), 'pages/work/projects')
//   const filenames = await fs.readdir(projectDirectory)

//   const files = await Promise.all(
//     filenames.map(async (filename) => {
//       const filePath = path.join(projectDirectory, filename)
//       const content = await fs.readFile(filePath, 'utf8')
//       const matter = grayMatter(content)
//       return {
//         filename,
//         content,
//       }
//     }),
//   )

//   const allProjects = files.map((file) => {
//     return {
//       path: `/projects/${file.filename.replace('.tsx', '')}`,
//     }
//   })

//   return {
//     props: {
//       allProjects,
//     },
//   }
// }
