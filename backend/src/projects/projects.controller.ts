import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  public constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  public query() {
    return this.projectsService.queryProjects();
  }

  @Post()
  public async create(@Body() dto: CreateProjectDto) {
    return this.projectsService.createProject(dto.url);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: CreateProjectDto) {
    // Same dto as for create project
    return this.projectsService.updateProject(id, dto.url);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
