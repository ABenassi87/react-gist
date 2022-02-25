import { GistDetails } from './model';
import { GIST_API_URL, USER_GISTS_API_URL } from './constants';

export async function getGistDetails(id: string): Promise<GistDetails> {
  const url = GIST_API_URL(id);
  const response: Response = await fetch(url);

  if (response.status >= 200 && response.status < 300) {
    const jsonData = await response.json();
    if (jsonData) {
      return jsonData as GistDetails;
    } else {
      throw new Error('Error processing the response');
    }
  } else {
    throw new Error(response.statusText);
  }
}

export async function getGistsDetails(username: string): Promise<GistDetails[]> {
  if (!username) {
    return [];
  }

  const url = USER_GISTS_API_URL(username);
  const response: Response = await fetch(url);

  if (response.status >= 200 && response.status < 300) {
    const jsonData = await response.json();
    if (jsonData) {
      return jsonData as GistDetails[];
    } else {
      throw new Error('Error processing the response');
    }
  } else {
    throw new Error(response.statusText);
  }
}

// TEST 3
