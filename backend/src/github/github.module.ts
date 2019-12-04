import { Module } from '@nestjs/common';

import { GithubService } from './github.service';

// THOUGHT: redundant file. Just import service directly.
// service = providers = Injectable mess (same stuff different names)
@Module({
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
