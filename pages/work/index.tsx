import Work_Services from '@work/Work_Services'
import Work_Portfolio from '@work/Work_Portfolio'
import Work_Clients from '@work/Work_Clients'
import Work_Awards from '@work/Work_Awards'
import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'

import Main from '@parts/Main'

const Work = () => {
  // console.log(allProjects)

  return (
    <Main className='max-w-screen overflow-hidden'>
      <PageHeader_VariableHeight header='What We Make' subheader='knead the dough, baby' />

      <Work_Services />
      <Work_Portfolio />

      <Work_Clients />
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
