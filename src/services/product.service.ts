import { get } from "./apollo.service";

export function getProducts() {
  return get(`
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  `);
}
