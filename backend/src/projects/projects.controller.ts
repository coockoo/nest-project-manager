import { Controller, Get, Post, Body } from '@nestjs/common';

import { ProjectsService } from './projects.service'
import { CreateProjectDto } from './dto/create-project.dto'

@Controller('projects')
export class ProjectsController {
  public constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  public query() {
    return this.projectsService.queryProjects()
  }

  @Post()
  public async create(@Body() dto: CreateProjectDto) {
    return this.projectsService.createProject(dto.url)
  }
}
