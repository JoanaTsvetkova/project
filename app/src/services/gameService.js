import * as request  from "./requester"

const baseUrl = "http://localhost:3030/jsonstore/games"

export const getAllGames = async () => {
   const result = await request.get(baseUrl);

   const games = Object.values(result);

   return(games);
}

export const createGame = async (data) => {
   const result = await request.post(baseUrl, data);
   console.log(result)
      
      return result;
};

export const getOneGame = async (data) => {
   const result = await request.get(`${baseUrl}/${data}`);

   console.log(result);

   return result;
}