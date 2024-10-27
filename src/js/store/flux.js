// AQUI VAMOS A DEJAR EL CODIGO PARA FETCHEAR TODOS LOS PERSONAJES DE UNA PERO LO AÑADIEREMOS SI CREAMOS UN VEW CON ALL THE DATA 
// const getAllCharacters = async () => {
//     let allCharacters = [];
//     let nextPage = `${getStore().urlBase}/people`; // initial API URL

//     while (nextPage) {
//         const response = await fetch(nextPage);
//         const data = await response.json();

//         // Append the characters from the current page to the allCharacters array
//         allCharacters = [...allCharacters, ...data.results];

//         // Update nextPage with the URL for the next page (or null if there are no more pages)
//         nextPage = data.next;
//     }

//     setStore({ characters: allCharacters });
// };


const getState = ({ getStore, getActions, setStore }) => {
	// https://swapi.dev/api/ aqui si puedo renderizar las propiedades de los personajes
	
	const apiURL = "https://www.swapi.tech/api/";
	return {
		store: {
			characters: [],
			detailCharacter: [],
			allCharacters: [],
			planets: [],
			detailPlanet: [],
			allPlanets: [],
			spaceships: [],
			detailSpaceship: [],
			allSpaceships: [],
			favorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			detailCharacter: async (id) => {
				try {
					const response = await fetch(apiURL + "people/" + id);
					if (!response.ok) {
						throw new Error("Failed to fetch character");

					}
					const detailCharacter = await response.json();
					setStore({ detailCharacter: detailCharacter.result.properties });
					
				}catch (error){
					console.log(error);
				}
				console.log(getStore().detailCharacter);
			},
			
			
			loadCharacters: async () => {
				try {
					const randomPage = Math.floor(Math.random() * 8) + 1;
					const response = await fetch(apiURL + `people?page=${randomPage}&limit=10`);
					if (!response.ok) {
						throw new Error("Failed to fetch characters");
					}
					const charactersData = await response.json();
					setStore({ characters: charactersData.results });

				} catch (error) {
					console.log(error);
				}
				console.log(getStore().characters);
			},

			getAllCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=99");
					if(!response.ok) {
						throw new Error("Failed to fetch all characters");
					}
					const allCharactersData = await response.json();
					setStore({ allCharacters: allCharactersData.results });
				} catch (error) {
					console.log(error);
				}
				console.log(getStore().allCharacters);
			},
			detailPlanet: async (id) => {
				try {
					const response = await fetch(apiURL + "planets/" + id);
					if (!response.ok) {
						throw new Error("Failed to fetch character");

					}
					const data = await response.json();
					setStore({ detailPlanet: data.result.properties });
					
				}catch (error){
					console.log(error);
				}
				console.log(getStore().detailPlanet);
			},
			

			loadPlanets: async() => {
				try {
					const randomPage = Math.floor(Math.random() * 2) + 1;
					const response = await fetch(`https://www.swapi.tech/api/planets?page=${randomPage}&limit=10`);
					if(!response.ok) {
						throw new Error("Failed to fetch planets");
					}
					const planetsData = await response.json();
					setStore({planets: planetsData.results});
				} catch (error){
					console.log(error);
					setStore({planets: false});
				}
				console.log(getStore().planets);
			},

			getAllPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=40");
					if(!response.ok){
						throw new Error ("Failed to fetch all planets");
					}
					const allPlanetsData = await response.json();
					setStore({allPlanets: allPlanetsData.results});
				} catch (error) {
					console.log(error);
				}
				console.log(getStore().allPlanets);
			},
			

			loadSpaceships: async() => {
				try {
					const randomPage = Math.floor(Math.random() * 3) + 1;
					const response = await fetch(`https://www.swapi.tech/api/starships?page=${randomPage}&limit=10`);
					if(!response.ok) {
						throw new Error("Failed to fetch starships");
					}
					const starshipsData = await response.json();
					setStore({spaceships: starshipsData.results});
				} catch (error){
					console.log(error);
				}
				console.log(getStore().spaceships);
			},

			detailSpaceship: async (id) => {
				try {
					const response = await fetch(apiURL + "starships/" + id);
					if (!response.ok) {
						throw new Error("Failed to fetch starship");
					}
					const data = await response.json();
					setStore({ detailSpaceship: data.result.properties });
					
				}catch (error){
					console.log(error);
				}
				console.log(getStore().detailStarship);
			},

			getAllSpaceships: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/starships?page=1&limit=40");
					if(!response.ok){
						throw new Error ("Failed to fetch all starships");
					}
					const allStarshipsData = await response.json();
					setStore({allStarships: allStarshipsData.results});
				} catch (error) {
					console.log(error);
				}
				console.log(getStore().allStarships);
			},

			addFavorites: (favorite) => {
				const store = getStore();
				const actions = getActions();
				const result = actions.isFavorite(favorite);
				if(result) {
					actions.deleteFavorite(favorite);
				} else {
					setStore({
						favorites: [...store.favorites, favorite]
					})
				}
				console.log(getStore().favorites);
			},

			deleteFavorite: (favorite) => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(
					item => favorite.uid !== item.uid || item.type !== favorite.type
				);
				setStore({ favorites: updateFavorites });
			},
			
			isFavorite: (favorite) => {
				const store = getStore();
				const result = store.favorites.some(item => favorite.uid == item.uid && favorite.type == item.type)
				return result
			}
		}
	};
};

export default getState;
