import * as request from "./requester"

const baseUrl = "http://localhost:3030/jsonstore/games"

export const getAllGames = async () => {
   const result = await request.get(baseUrl);

   const games = Object.values(result);

   return (games);
}

export const createGame = async (data) => {
   const result = await request.post(baseUrl, data);

   return result;
};

export const getOneGame = async (id) => {
   const result = await request.get(`${baseUrl}/${id}`);

   console.log(result);

   return result;
};