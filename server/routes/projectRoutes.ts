import dotenv from 'dotenv';
dotenv.config();
import { Router } from 'express';
import Project from '../models/Project';

const projectRouter = Router();

projectRouter.get('/getCurrentProjects', async (req, res) => {
  const projects = await Project.find(
    {
      ossNumber: process.env.OSS_NUMBER,
    },
    {}
  );
  res.json(projects);
});

projectRouter.post('/createProject', async (req, res) => {
  const project = req.body;
  if (project) {
    const newProject = new Project({
      ossNumber: process.env.OSS_NUMBER,
      name: project.name,
      description: project.description,
      youtubeLink: project.youtubeLink,
      githubLink: project.githubLink,
      websiteLink: project.websiteLink,
      email: project.email,
      createdAt: new Date().getTime(),
      createdBy: project.createdBy,
    });
    const savedProject = await newProject.save();
    res.json(savedProject);
  }
});

export default projectRouter;
