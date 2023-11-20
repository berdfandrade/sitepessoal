import BackEndDoc from "../ProjetoCard/PaginaBackEndDoc";
import { ProjectsBackEnd } from "../Projetos";



export function RpgApiDocs (p) {
    p = ProjectsBackEnd[0]
    
    return (

         <BackEndDoc projeto={p}/>

    )
}

export function MonsterApiDocs () {
    return (

         <BackEndDoc projeto={ProjectsBackEnd[1]}/>

    )
}

export function AdviceApiDocs () {
    return (
        <>
         <BackEndDoc projeto={ProjectsBackEnd[2]}/>
        </>
    )
}

