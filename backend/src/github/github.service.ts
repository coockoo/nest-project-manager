import fetch from 'node-fetch';

import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  public async getInfoByUrl(url: string) {
    // https://github.com/feathericons/feather
    const re = /^(?:https?:\/\/)github.com\/(.+)\/(.+)\/?$/;
    const match = url.match(re);
    if (!match) {
      throw new Error('cannot parse github url');
    }
    const [_, user, repo] = match;

    // This probably belongs to config variables (BASE_URL)
    const fetchUrl = `https://api.github.com/repos/${user}/${repo}`;
    const res = await fetch(fetchUrl);
    const data = await res.json();

    return data;
  }
}
