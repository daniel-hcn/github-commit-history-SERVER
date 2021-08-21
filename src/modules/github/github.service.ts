import { HttpException, Injectable } from '@nestjs/common';
import { Request } from 'src/core/request';
import {
  FindBranchesResponseDto,
  FindCommitsResponseDto,
} from './dto/github.dto';

@Injectable()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/repos';

  async getCommits(
    repositoryName: string,
    branchName?: string,
  ): Promise<FindCommitsResponseDto[]> {
    const request = new Request();
    const parameters = {};
    if (branchName) parameters['sha'] = branchName;
    try {
      const response = await request.get(
        `${this.apiUrl}/${repositoryName}/commits`,
        parameters,
      );
      return response.data.map((commit) => ({
        author: commit.commit.author.name,
        date: commit.commit.author.date,
        message: commit.commit.message,
        sha: commit.sha,
      }));
    } catch (err) {
      console.error(err.response);
      throw new HttpException('Repository not found', 404);
    }
  }

  async getBranches(
    repositoryName: string,
  ): Promise<FindBranchesResponseDto[]> {
    const request = new Request();
    try {
      const response = await request.get(
        `${this.apiUrl}/${repositoryName}/branches`,
      );
      return response.data.map((branch) => ({
        name: branch.name,
      }));
    } catch (err) {
      console.error(err.response);
      throw new HttpException('Repository not found', 404);
    }
  }
}
