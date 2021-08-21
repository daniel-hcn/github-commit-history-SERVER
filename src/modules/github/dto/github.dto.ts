export class FindBranchesResponseDto {
  name: string;
}

export class FindCommitsResponseDto {
  author: string;
  date: string;
  message: string;
  sha: string;
}
