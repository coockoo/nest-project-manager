import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import s from './styles.less';

export default function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const doFetchProjects = async () => {
      const projects = await api.get('/projects');
      setProjects(projects);
    };
    doFetchProjects();
  }, []);
  return (
    <div className={s.page}>
      <Link to="/projects/new">Create project</Link>
      <div className={s.projects}>
        {projects.map((project) => (
          <div className={s.project}>
            <div>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </div>
            <div>Owner: {project.owner}</div>
            <div>{project.url}</div>
            <div>Stargazers Count: {project.stargazersCount}</div>
            <div>Forks Count: {project.forksCount}</div>
            <div>Created At: {project.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
