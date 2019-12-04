import { Injectable } from '@nestjs/common'

import { GithubService } from '../github/github.service'

@Injectable()
export class ProjectsService {
  public constructor(private readonly githubService: GithubService) {}

  public async queryProjects() {
    return [
      {
        id: '1',
        owner: 'Billie Ellish',
        name: 'Im 14 and this is deep',
        url: 'http://example.com',
        stargazersCount: 10,
        forksCount: 10,
        createdAt: '2019-10-10T00:00:00.000',
      },
    ];
  }

  public async createProject(url: string) {
    const repoInfo = await this.githubService.getInfoByUrl(url)
    const createData = {
      owner: repoInfo.owner.login,
      name: repoInfo.name,
      url: repoInfo.html_url,
      stargazersCount: repoInfo.stargazers_count, 
      forksCount: repoInfo.forks_count,
      createdAt: repoInfo.created_at,
    }
    return createData
  }
}
