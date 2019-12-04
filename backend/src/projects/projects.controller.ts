import { Controller, Get } from '@nestjs/common';

import { ProjectsService } from './projects.service'

@Controller('projects')
export class ProjectsController {
  public constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  public query() {
    return this.projectsService.queryProjects()
  }
}
