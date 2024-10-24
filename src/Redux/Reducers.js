import initState from "./InitState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        loading: false,
        characters: action.characters
      };
    case "GET_CHARACTER_FAILED":
      return {
        ...state,
        loading: false
      };
    case "GET_CHARACTERS":
      return {
        ...state,
        loading: true
      };
    case "GET_CHARACTER":
      return {
        ...state,
        loading: true
      };
    case "GET_CHARACTER_SUCCESS":
      return {
        ...state,
        character: action.character,
        loading: false
      };
    case "GET_MOVES":
      return {
        ...state,
        loading: true
      };
    case "GET_MOVE1_SUCCESS":
      return {
        ...state,
        moves: [action.move]
      };
    case "GET_MOVE2_SUCCESS":
      return {
        ...state,
        moves: [...state.moves, action.move],
        loading: false
      };
      case "GET_LIKED":
        return {
          ...state,
        };
      case "GET_LIKED_SUCCESS":
        return {
          ...state,
          likedCharacters: action.likedCharacters,
          isLiked: action.isLiked,
          loading: false
        };
        case "GET_LIKED_FAILED":
            return {
              ...state,
            };
         case "GET_LIKED":
        return {
          ...state,
        };
      case "GET_LIKED_SUCCESS":
        return {
          ...state,
          likedCharacters:action.likedCharacters[0],
          isLiked: action.isLiked,
          loading: false
        };
        case "GET_LIKED_FAILED":
            return {
              ...state,
            };
      case "ADD_LIKED":
      return {
        ...state,
        };
      case "ADD_LIKED_SUCCESS":
        console.log(action.likedCharacters)
        return {
          ...state,
          likedCharacters: action.pokemon,
          isLiked: {...state.isLiked,[action.isLiked]:true},
          loading: false
        };
        case "ADD_LIKED_FAILED":
            return {
              ...state,
            };
            case "DELETE_LIKED":
              return {
                ...state,
                };
              case "DELETE_LIKED_SUCCESS":
                console.log(action.likedCharacters)
                return {
                  ...state,
                  likedCharacters: action.likedCharacters,
                  isLiked: {...state.isLiked,[action.name]:false},
                  loading: false
                };
                case "DELETE_LIKED_FAILED":
                    return {
                      ...state,
                    };
    default:
      return initState;
  }
};
