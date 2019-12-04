import { Module } from '@nestjs/common';

import { GithubModule } from '../github/github.module'

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

// THOUGHT: Module is redundant. Just import services and controllers directly.
@Module({
  imports: [GithubModule],
  // THOUGHT: This is an extra step.
  // I could import github service directly from ProjectsService
  // Why should I tell module about another module
  providers: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
