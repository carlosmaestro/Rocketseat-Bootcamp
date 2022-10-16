import React, { useState } from 'react';

import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  const handleAddProject = () => {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          {projects.map((project) => <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      </Header>
    </>);
}

export default App;