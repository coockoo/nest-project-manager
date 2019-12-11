import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import { Link, useParams } from 'react-router-dom';

import Button from '../../components/button';

import api from '../../services/api';

import s from './styles.less';

export default function ProjectsPage(props) {
  const { id } = useParams();

  const [url, setUrl] = useState('');
  const [project, setProject] = useState({ url });

  const isNew = id === 'new';

  useEffect(() => {
    const fetchProject = async () => {
      const project = await api.get(`/projects/${id}`);
      setProject(project);
      setUrl(project.url);
    };
    !isNew ? fetchProject() : null;
  }, [id, isNew]);

  const saveProject = useCallback(() => {
    const createProject = async () => {
      const project = await api.post('/projects', { url });
      setProject(project);
    };
    const updateProject = async () => {
      const project = await api.put(`/projects/${id}`, { url });
      setProject(project);
    };
    isNew ? createProject() : updateProject();
  }, [id, isNew, url]);

  return (
    <div className={s.page}>
      <Link to="/projects">To projects</Link>
      <form>
        <label htmlFor="url">URL</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} id="url" />
        <Button onClick={saveProject} className={s.submit}>
          {isNew ? 'Create' : 'Update'}
        </Button>
      </form>
      <div>Owner: {project.owner}</div>
      <div>Name: {project.name}</div>
      <div>URL: {project.url}</div>
      <div>Stargazers Count: {project.stargazersCount}</div>
      <div>Forks Count: {project.forksCount}</div>
      <div>Created At: {project.createdAt}</div>
    </div>
  );
}
