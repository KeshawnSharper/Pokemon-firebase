import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import { connect } from "react-redux";
import {deleteLiked} from "../Redux/actions";

import Grid from '@mui/material/Grid2';
import "./LikedCharacters.css";
class LikedCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchBtn: false,
      characters: this.props.characters
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      ...this.state,
      value: e.target.value,

      characters: this.props.characters.filter((character) =>
        character.name.includes(this.state.value)
      )
    });

    console.log(this.state.value);
    console.log(
      this.props.characters.filter((character) =>
        character.name.includes(this.state.value)
      )
    );
  }
  handleClick() {
    this.setState({
      ...this.state,
      searchBtn: true,
      input: true
    });
  }
  // searchBtn.classList.toggle("close");
  // input.classList.toggle("square");
  render() {

    return (
      <div class="grid-container">
        {this.props.likedCharacters.map(character => (
          <div class="flip-card grid-item">
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
                  character.type
                }`}
                style={{"margin-bottom":"500px"}}
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
                      character.img
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
                          {character.move_1_name}
                        </span>{" "}
                        {character.move_1_text}
                      </p>
                    </div>
                    <div className="power">
                      {character.move_1_power}
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
                          {character.move_2_name}
                        </span>{" "}
                        {character.move_2_text}
                      </p>
                    </div>
                    <div className="power">
                      {character.move_2_power}
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
                  <div>
                  <i class="fa fa-heart" style={{color:"red"}} onClick={() => this.props.deleteLiked({
                    name: character.name,
                    id: this.props.likedCharacters.filter(i => i.name === character.name).length === 1 ? this.props.likedCharacters.filter(i => i.name === character.name)[0].id : null
                  }
                  )}/>
                  </div>
                </div>
                
                  
                 
                  

                
                

              </div>
             
            </div>
          </div>

        </div>
        ))}
    </div>
    );
  }
}const mapDispatchToProps = (dispatch) => {
  return {
    deleteLiked: (character) => {
      dispatch(deleteLiked(character));
    }
  }
};
function mapStateToProps(state) {
  return {
    character: state.character,
    characters: state.characters,
    likedCharacters: state.likedCharacters.pokemon ? state.likedCharacters.pokemon : state.likedCharacters,

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LikedCharacters);
