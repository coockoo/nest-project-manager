import { Injectable } from '@nestjs/common'

@Injectable()
export class GithubService {
  public async test() {
    console.log('Kappa')
  }
}
