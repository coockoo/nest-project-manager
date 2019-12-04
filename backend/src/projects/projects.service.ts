import { Injectable } from '@nestjs/common'

import { GithubService } from '../github/github.service'

@Injectable()
export class ProjectsService {
  public constructor(private readonly githubService: GithubService) {}

  public async queryProjects() {
    await this.githubService.test()
    return [
      {
        id: '1',
        owner: 'Billie Ellish',
        name: 'Im 14 and this is deep',
        url: 'http://example.com',
        starsCount: 10,
        forksCount: 10,
        createdAt: '2019-10-10T00:00:00.000',
      },
    ];
  }
}
