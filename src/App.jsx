import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [proState, setProState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })

  function handleAddTask(text) {
    setProState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => { task.id !== id })
      }
    })
  }

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

  const selectedProject = proState.projects.find(project => project.id === proState.selectedProjectId)

  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDelete}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={proState.tasks}
  />

  if (proState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onClose={handleClose} />
  } else if (proState.selectedProjectId === undefined) {
    content = <NoProjectSelected oSAP={handleStartAddProject} />
  }

  function handleSelectProject(id) {
    setProState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDelete() {
    setProState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => { project.id !== prevState.selectedProjectId })
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

