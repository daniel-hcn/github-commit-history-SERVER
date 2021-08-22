import { Test, TestingModule } from '@nestjs/testing';
import { Request, RequestFaker } from 'src/core';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';

describe('GithubController', () => {
  let controller: GithubController;
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService, { provide: Request, useClass: RequestFaker }],
    }).compile();

    controller = module.get<GithubController>(GithubController);
    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get the list of commits', async () => {
    const repositoryName = 'daniel-hcn/github-commit-history-server';
    const result = [
      {
        author: 'Daniel',
        date: '2021-08-21T22:26:16Z',
        message:
          'Add GithubService for data extraction through github public API\n\n- Implement Github Service in GithubController\n- Delete app and github spec files',
        sha: '4b2bc97f03c13591fe63e70edde2222044ba2241',
      },
    ];
    jest.spyOn(service, 'getCommits').mockImplementation(async () => result);

    expect(await controller.getCommits(repositoryName)).toBe(result);
  });

  it('should get the list of branches', async () => {
    const repositoryName = 'daniel-hcn/github-commit-history-server';
    const result = [
      {
        name: 'master',
      },
      {
        name: 'develop',
      },
    ];
    jest.spyOn(service, 'getBranches').mockImplementation(async () => result);

    expect(await controller.getBranches(repositoryName)).toBe(result);
  });
});
