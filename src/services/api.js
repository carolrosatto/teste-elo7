import axios from "axios";

export const api = axios.create({
  baseURL: `http://www.mocky.io/v2/5d6fb6b1310000f89166087b`,
});

export async function getActiveJobs() {
  let activeJobs = await api.get()
    .then((response) => response.data.vagas
      .filter((item) => item.ativa === true)
      .map((res) => res))
    .catch((err) => console.log(err));
  return activeJobs;
}