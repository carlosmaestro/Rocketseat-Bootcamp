const express = require('express');
const { uuid } = require('uuidv4');


const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {

  const { name } = request.query;

  const filteredProjects = name
    ? projects.filter(project => project.name.includes(name))
    : projects

  return response.json(filteredProjects);
});

app.post('/projects', (request, response) => {

  const { name, category } = request.body;

  const project = { id: uuid(), name, category };

  projects.push(project);

  return response.status(201).json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { name, category } = request.body;

  const indexProject = projects.findIndex(project => project.id === id);

  if (indexProject < 0) {
    return response.status(400).json({ error: 'project not found' });
  }

  const project = { id, name, category };

  projects[indexProject] = project;

  return response.json(project);
});

app.patch('/projects/:id', (request, response) => {
  return response.json({ status: "ok" });
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { name, category } = request.body;

  const indexProject = projects.findIndex(project => project.id === id);

  if (indexProject < 0) {
    return response.status(400).json({ error: 'project not found' });
  }

  projects.splice(indexProject, 1);

  return response.status(204).send();
})

app.listen(3333, () => {
  console.log('Back-end started!.')
})