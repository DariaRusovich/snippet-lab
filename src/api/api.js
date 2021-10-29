import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1234',
  headers: { 'Content-type': 'application/json;charset=utf-8' },
});

api.interceptors.response.use(
  (response) => {
    return [response.data, null];
  },
  (error) => {
    return [null, error];
  }
);

export function getSnippets() {
  return api.get('/snippets');
}
export function getSnippet(id) {
  return api.get(`/snippets/${id}`);
}
export function createSnippet(snippet) {
  return api.post(`/snippets`, snippet);
}
export function updateSnippet(id, snippet) {
  return api.patch(`/snippets/${id}`, snippet);
}
