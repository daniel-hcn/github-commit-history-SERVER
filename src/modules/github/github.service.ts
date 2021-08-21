import { HttpException, Injectable } from '@nestjs/common';
import { Request } from 'src/core/request';
import { FindBranchesResponseDto } from './dto/github.dto';

@Injectable()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/repos';

  async getBranches(
    repositoryName: string,
  ): Promise<FindBranchesResponseDto[]> {
    const request = new Request();
    try {
      const response = await request.get(
        `${this.apiUrl}/${repositoryName}/branches`,
        {
          sha: 'feature/github-endpoints',
        },
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
