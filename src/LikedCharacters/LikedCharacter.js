import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Alert from '@mui/material/Alert';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { getCharacter, getMove1, getMove2, addLiked,deleteLiked} from "../Redux/actions";
import "./Character.css";
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Character(props) {
  const { name, url, loading, character } = props;
  console.log("hey", props.isLiked[`${character.name}`]);
  const background = {
    water:
      "https://res.cloudinary.com/di449masi/image/upload/v1610330429/d3inhf4-271fd765-dfec-44fc-9985-3538b0bceb36.png_gosjkc.png"
  };
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    props.getCharacter(url);
    console.log("liked", character);
    // props.getMove1(character.moves[0].move.url);
    // props.getMove2(character.moves[0].move.url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
      {loading ? (
        <></>
      ) : (
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
             
            <img
                width="320px"
                height="448px"
                src="https://res.cloudinary.com/di449masi/image/upload/v1610294575/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png_uqyvtq.png"
              />
            </div>
            <div class="flip-card-back">
            <div
                className={`cardBody ${
                  character.types ? character.types[0].type.name : null
                }`}
              >
                <div className="header">
                  <p className="basic">Basic Pokémon</p>
                  <div className="nameAndHealth">
                    <p className="name">{character.name}</p>
                    <div className="floatRight">
                      <p className="health">{character.base_experience} HP</p>
                      <img
                        src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                        alt="Water Energy Symbol"
                      />
                    </div>
                  </div>
                </div>
                <div className="squirtle">
                  <img
                    src={
                      character.sprites ? character.sprites.front_default : null
                    }
                    alt="Squirtle"
                    width="170px"
                    height="170px"
                  />
                </div>
                <div className="stats">
                  <p>Tiny Turtle Pokémon, Length: 1' 8", Weight: 20lbs.</p>
                </div>
                <div className="attacks">
                  <div className="specificAttack">
                    <div className="energy">
                      <img
                        src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                        alt="Water Energy Symbol"
                      />
                    </div>
                    <div className="attackDescription">
                      <p>
                        <span className="attackName">
                          {props.moves[0] ? props.moves[0].name : null}
                        </span>{" "}
                        {props.moves[0]
                          ? props.moves[0].flavor_text_entries[0].flavor_text
                          : null}
                      </p>
                    </div>
                    <div className="power">
                      {props.moves[0] ? props.moves[0].power : null}
                    </div>
                  </div>
                  <hr />
                  <div className="specificAttack">
                    <div className="energy">
                      <img
                        src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                        alt="Water Energy Symbol"
                      />
                    </div>
                    <div className="attackDescription">
                      <p>
                        <span className="attackName">
                          {props.moves[1] ? props.moves[1].name : null}
                        </span>{" "}
                        {props.moves[1]
                          ? props.moves[1].flavor_text_entries[1].flavor_text
                          : null}
                      </p>
                    </div>
                    <div className="power">
                      {props.moves[1] ? props.moves[1].power : null}
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="attributes">
                  <div className="weakness">
                    <p>weakness</p>
                    <img
                      src="https://jcr08.github.io/pokemon-card/images/electric-energy.png"
                      alt="Electric Energy Symbol"
                    />
                  </div>
                  <div className="resistance">
                    <p>resistance</p>
                  </div>
                  <div className="retreatCost">
                    <p>retreat cost</p>
                    <img
                      src="https://jcr08.github.io/pokemon-card/images/normal-energy.png"
                      alt="Normal Energy Symbol"
                    />
                  </div>
                </div>
                <div className="description">
                  <p>
                    After birth, its back swells and hardens into a shell. It
                    powerfully sprays foam from its mouth. LV. 8 #7
                  </p>
                </div>
                <div className="footer">
                {
                  props.isLiked[`${character.name}`] ? 
                  <i class="fa fa-heart" style={{color:"red"}} onClick={() => props.deleteLiked(
                   props.likedCharacters.filter(i => i.name === character.name)[0].id
                  )}/>
                  :
<i class="fa fa-heart" style={{color:"white"}} onClick={() => props.addLiked({
                  img:character.sprites ? character.sprites.front_default : "",
                  move_1_name:props.moves[0]   ? props.moves[0].name : null,
                  move_1_power:props.moves[0] && props.moves[0].power != null ? props.moves[0].power : 0,
                  move_1_text:props.moves[0]  ? props.moves[0].flavor_text_entries[0].flavor_text: null,
                  move_2_name:props.moves[1] ? props.moves[1].name : null,
                  move_2_power:props.moves[1] && props.moves[1].power != null ? props.moves[1].power : 0,
                  move_2_text:props.moves[1] ? props.moves[1].flavor_text_entries[1].flavor_text: null,
                  type: character.types ? character.types[0].type.name : "",
                  base_experience:character.base_experience,
                  name:character.name,
                  pokemon_id:character.id,
                  username:JSON.parse(localStorage.getItem("user")).username
                  })}/>

                }
                </div>
               
                

              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div>
      <Alert onClick={handleOpen} severity="success">
        {name}
        
      </Alert>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    characters: state.characters,
    loading: state.loading,
    moves: state.moves,
    character: state.character,
    isLiked: state.isLiked,
    likedCharacters: state.likedCharacters.pokemon ? state.likedCharacters.pokemon : state.likedCharacters
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (id) => {
      dispatch(getCharacter(id));
    },
    addLiked: (character) => {
      dispatch(addLiked(character));
    },
    deleteLiked: (id) => {
      dispatch(deleteLiked(id));
    },
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
