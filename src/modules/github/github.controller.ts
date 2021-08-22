import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import {
  FindBranchesResponseDto,
  FindCommitsResponseDto,
} from './dto/github.dto';
import { GithubService } from './github.service';

@Controller('github/repository/:repositoryName')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits')
  @ApiOperation({ summary: 'Get Commits by Repository' })
  @ApiParam({
    name: 'repositoryName',
    example: 'daniel-hcn/github-commit-history-server',
  })
  @ApiQuery({ name: 'branchName', required: false, example: 'develop' })
  @ApiOkResponse({
    description: 'List of Commits found',
    type: FindCommitsResponseDto,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'Repository not found' })
  async getCommits(
    @Param('repositoryName') repositoryName: string,
    @Query('branchName') branchName?: string,
  ): Promise<FindCommitsResponseDto[]> {
    return await this.githubService.getCommits(repositoryName, branchName);
  }

  @Get('/branches')
  @ApiOperation({ summary: 'Get Branches by Repository' })
  @ApiParam({
    name: 'repositoryName',
    example: 'daniel-hcn/github-commit-history-server',
  })
  @ApiOkResponse({
    description: 'List of Branches found',
    type: FindBranchesResponseDto,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'Repository not found' })
  async getBranches(
    @Param('repositoryName') repositoryName: string,
  ): Promise<FindBranchesResponseDto[]> {
    return await this.githubService.getBranches(repositoryName);
  }
}
