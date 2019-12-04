import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  public query() {
    return [
      { id: '1', name: 'lkasdjf', url: 'alsdkfj' },
      { id: '2', name: 'Octocat', url: 'Sool goo ni' },
    ];
  }
}
