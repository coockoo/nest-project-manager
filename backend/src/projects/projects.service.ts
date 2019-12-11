import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PROJECT_REPOSITORY } from '../constants';

import { GithubService } from '../github/github.service';

import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  public constructor(
    private readonly githubService: GithubService,
    @Inject(PROJECT_REPOSITORY)
    private readonly projectRepository: Repository<Project>
  ) {}

  public async queryProjects() {
    return this.projectRepository.find();
  }

  public async findById(id: string) {
    return this.projectRepository.findOne({ id });
  }

  public async createProject(url: string) {
    const repoInfo = await this.githubService.getInfoByUrl(url);
    return this.projectRepository.save({
      owner: repoInfo.owner.login,
      name: repoInfo.name,
      url: repoInfo.html_url,
      stargazersCount: repoInfo.stargazers_count,
      forksCount: repoInfo.forks_count,
      createdAt: repoInfo.created_at,
    });
  }

  public async updateProject(id: string, url: string) {
    const repoInfo = await this.githubService.getInfoByUrl(url);
    return this.projectRepository.save({
      id,
      owner: repoInfo.owner.login,
      name: repoInfo.name,
      url: repoInfo.html_url,
      stargazersCount: repoInfo.stargazers_count,
      forksCount: repoInfo.forks_count,
      createdAt: repoInfo.created_at,
    });
  }

  public async deleteProject(id: string) {
    const { affected } = await this.projectRepository.delete(id);
    return { affected };
  }
}
