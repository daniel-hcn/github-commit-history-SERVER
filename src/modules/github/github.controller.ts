import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  FindBranchesResponseDto,
  FindCommitsResponseDto,
} from './dto/github.dto';
import { GithubService } from './github.service';

@Controller('github/repository/:repositoryName')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits')
  async getCommits(
    @Param('repositoryName') repositoryName: string,
    @Query('branch') branchName?: string,
  ): Promise<FindCommitsResponseDto[]> {
    return await this.githubService.getCommits(repositoryName, branchName);
  }

  @Get('/branches')
  async getBranches(
    @Param('repositoryName') repositoryName: string,
  ): Promise<FindBranchesResponseDto[]> {
    return await this.githubService.getBranches(repositoryName);
  }
}
