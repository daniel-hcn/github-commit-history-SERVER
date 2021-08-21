import { Controller, Get } from '@nestjs/common';

@Controller('github/repository/:repositoryName')
export class GithubController {
  @Get('/commits')
  getCommits(): any[] {
    return [];
  }

  @Get('/branches')
  getBranches(): any[] {
    return [];
  }
}
