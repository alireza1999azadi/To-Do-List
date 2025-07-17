import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [proState, setProState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  function handleAddProject(projectDate) {
    setProState(prevState => {
      const newProject = {
        ...projectDate,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  const handleClose = () => {
    setProState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  console.log(proState)

  const selectedProject=proState.projects.find(project=>project.id===proState.selectedProjectId )

  let content=<SelectedProject project={selectedProject} />

  if (proState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleClose} />
  } else if (proState.selectedProjectId === undefined) {
    content = <NoProjectSelected oSAP={handleStartAddProject} />
  }

  function handleSelectProject(id){
    setProState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar oSAP={handleStartAddProject} projects={proState.projects}
        onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;

