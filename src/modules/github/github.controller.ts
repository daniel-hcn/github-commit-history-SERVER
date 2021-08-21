import { Controller, Get, Param } from '@nestjs/common';
import { FindBranchesResponseDto } from './dto/github.dto';
import { GithubService } from './github.service';

@Controller('github/repository/:repositoryName')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits')
  getCommits(): any[] {
    return [];
  }

  @Get('/branches')
  async getBranches(
    @Param('repositoryName') repositoryName: string,
  ): Promise<FindBranchesResponseDto[]> {
    return await this.githubService.getBranches(repositoryName);
  }
}
