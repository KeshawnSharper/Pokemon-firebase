import axios from "axios";
let url = "https://pokeapi.co/api/v2/pokemon?limit=1118"
export function getCharacters() {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTERS"
    });
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results)

        dispatch({
          type: "GET_CHARACTERS_SUCCESS",
          characters: res.data.pokemon ? res.data.pokemon.results : res.data.results
        })
      })
      .catch((err) => {
        dispatch({ type: "GET_CHARACTERS_FAILED", characters: err });
      });
  };
}
export function getCharacter(url) {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTER"
    });
    axios.get(url).then((res) => {
      dispatch({
        type: "GET_CHARACTER_SUCCESS",
        character: res.data
      });
      if (res.data.moves.length > 0) {
        getMove1(res.data.moves[0].move.url, dispatch);
        if (res.data.moves.length > 1) {
          getMove2(res.data.moves[1].move.url, dispatch);
        }
      }
    });
  };
}
export function getMove1(url, dispatch) {
  dispatch({
    type: "GET_MOVES"
  });
  axios.get(url).then((res) => {
    dispatch({
      type: "GET_MOVE1_SUCCESS",
      move: res.data
    });
  });
}

export function getMove2(url, dispatch) {
  axios.get(url).then((res) => {
    dispatch({
      type: "GET_MOVE2_SUCCESS",
      move: res.data
    });
  });
}
export function getLiked(user) {
return (dispatch) => {
  dispatch({
    type: "GET_LIKED"
  });
 axios.get(`https://helloworld-pa2uv36pdq-uc.a.run.app/pokemon/${user.username}`)
    .then((res) => {
      console.log(res)
      let obj = {}
      res.data.pokemon.map(
        character => (
          obj[character.name] = true
        )
      )
      dispatch({
        type: "GET_LIKED_SUCCESS",
        likedCharacters: res.data.pokemon,
        isLiked:obj
      });
    })
    .catch((err) => {
      dispatch({ type: "GET_LIKED_FAILED", characters: err });
    });
};
}
export function addLiked(pokemon) {
  console.log(pokemon)
  return (dispatch) => {
    dispatch({
      type: "ADD_LIKED"
    });
   axios.post(`https://helloworld-pa2uv36pdq-uc.a.run.app/pokemon`,pokemon)
      .then((res) => {
        dispatch({
          type: "ADD_LIKED_SUCCESS",
          pokemon: res.data.pokemon,
          isLiked:pokemon.name
        });
      })
      .catch((err) => {
        dispatch({ type: "ADD_LIKED_FAILED", characters: err });
      });
  };
  }
  export function deleteLiked(pokemon) {
    console.log("hey",pokemon)
    return (dispatch) => {
      dispatch({
        type: "DELETE_LIKED"
      });
     axios.delete(`https://helloworld-pa2uv36pdq-uc.a.run.app/pokemon/${pokemon.id}`)
        .then((res) => {
          dispatch({
            type: "DELETE_LIKED_SUCCESS",
            likedCharacters: res.data.pokemon,
            name: pokemon.name
          });
        })
        .catch((err) => {
          dispatch({ type: "DELETE_LIKED_FAILED", characters: err });
        });
    };
    }
