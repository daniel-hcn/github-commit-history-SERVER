import { ApiResponseProperty } from '@nestjs/swagger';

export class FindBranchesResponseDto {
  @ApiResponseProperty({ example: 'develop' })
  name: string;
}

export class FindCommitsResponseDto {
  @ApiResponseProperty({ example: 'Daniel' })
  author: string;

  @ApiResponseProperty({ example: '2021-08-21T22:41:51Z' })
  date: string;

  @ApiResponseProperty({ example: 'Lorem Ipsum' })
  message: string;

  @ApiResponseProperty({ example: '6b16637841d2228b970e90975eef4a4aa7185dd7' })
  sha: string;
}
