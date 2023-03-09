const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWJlMWVkMWU2YTZkZjIxM2ExMjc5OGE3ZmZkMTg2ZSIsInN1YiI6IjY0MDk3ODAxNTRmNmViMDA4MTNkODlhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qLNxd5DaR_lBsO079tmz3f_dD2JhuxSUogxk-qZ9dUg",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json);
}
