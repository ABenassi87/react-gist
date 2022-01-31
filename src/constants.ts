const GITHUB_BASE_API_URL="https://api.github.com"
export const GIST_API_URL= (id: string): string => `${GITHUB_BASE_API_URL}/gists/${id}`;
export const USER_GISTS_API_URL = (username: string): string => `${GITHUB_BASE_API_URL}/users/${username}/gists`;
