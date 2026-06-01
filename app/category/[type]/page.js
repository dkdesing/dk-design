import projects from '../../../data/projects.json'
import site from '../../../data/site.json'
import {ArrowLeft} from 'lucide-react'
import LangThemeControls from '../../LangThemeControls'
import T from '../../Text'
export function generateStaticParams(){return[{type:'visualizations'},{type:'drawings'}]}
export default function CategoryPage({params}){const items=projects.filter(p=>p.type===params.type);const isDrawings=params.type==='drawings';return <><header className="header"><nav className="nav"><a href="/" className="logo">{site.brand}</a><div className="actions"><LangThemeControls/><a className="btn" href="/"><ArrowLeft size={16}/> <T ua="Назад" en="Back"/></a></div></nav></header><main><section className="section"><p className="label">Portfolio folder</p><h1><T ua={isDrawings?'Креслення':'Візуалізації'} en={isDrawings?'Drawings':'Visualizations'}/></h1><p className="lead"><T ua={isDrawings?'Приклади пакетів креслень.':'Оберіть проєкт, щоб переглянути галерею візуалізацій.'} en={isDrawings?'Examples of drawing packages.':'Choose a project to view the visualization gallery.'}/></p><div className="cards" style={{marginTop:40}}>

{isDrawings ? (
  <>
    <a className="card" href="/drawings/base-package.pdf" target="_blank">
      <div className="cardBody">
        <h3>BASE</h3>
        <p>Приклад пакету креслень BASE</p>
      </div>
    </a>

    <a className="card" href="/drawings/max-package.pdf" target="_blank">
      <div className="cardBody">
        <h3>MAX</h3>
        <p>Приклад пакету креслень MAX</p>
      </div>
    </a>
  </>
) : (
  items.map(project=>
    <a key={project.slug} className="card" href={`/project/${project.slug}`}>
      <img src={project.cover} alt={project.title}/>
      <div className="cardBody">
        <p className="muted">
          <T ua={project.category} en={project.categoryEn}/>
        </p>
        <h3 style={{fontSize:28,margin:'8px 0'}}>
          <T ua={project.title} en={project.titleEn}/>
        </h3>
        <p className="text" style={{fontSize:16}}>
          <T ua={project.description} en={project.descriptionEn}/>
        </p>
      </div>
    </a>
  )
)}

</div></section></main></>