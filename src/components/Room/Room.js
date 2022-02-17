import React from 'react';
import './Room.css';
import Player from '../Player/Player'
import Card from '../Card/Card'

let deck = [
  {
    animal: "Mouse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-rTB_ZbxfqKzV_nvmVwa1llgQHbhe_o8vg&usqp=CAU",
  },
  {
    animal: "Dog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iihmfc8uOKXbMnKj_oGx-42LTb6xQCs_2w&usqp=CAU",
  },
  {
    animal: "Horse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHCmR3CF8_dq58mnvKW2UPqEj3OnQc8gC_Q&usqp=CAU",
  },
  {
    animal: "T-rex",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WPKr_LxZ4cupla9p-MRQWzFjX-4osJLobw&usqp=CAU",
  },
  {
    animal: "Unicorn",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszSehtD4UWtUokavIi0Qv9Z2VizgJ27g5ig&usqp=CAU",
  }
]

let players = [
  {playerName: "Huevos", vote: deck[0]},
  {playerName: "Rancheros", vote: deck[2]},
  { playerName: "Doritos", vote: deck[0]},
  {playerName: "Taqitos", vote: deck[1]},
  {playerName: "Bagel", vote: deck[1]},
  {playerName: "Haogie", vote: deck[2]},
  {playerName: "Meth", vote: deck[3]},
  {playerName: "Blueberries", vote: deck[4]}
]


class Room extends React.Component {
  
  constructor (props){
    super(props);
    this.state={showCards:false, vote:{}, currentPlayer: ''}
  }
  
  render(){
    const flipCards = (()=>{
      this.setState(prevState => ({
        showCards: !prevState.showCards
      }));
    })
    const vote = ((card)=>{
      this.setState(()=>({vote: card}));
    })
    const updatePlayerName = ((name)=>{
      this.setState(()=>({currentPlayer: name}));
    })
    
    return(
      <div className="Room">
      Room: {this.props.name}
        <div>Hello {this.state.currentPlayer}, it's nice to see you</div>
        <input type="text" placeholder="Enter Name" onKeyUp={e=>updatePlayerName(e.target.value)}></input>
      <div className="Table">
        {
          players.map((player)=><Player name={player.playerName} vote={player.vote} show={this.state.showCards}/>)
        }
        <Player name={this.state.currentPlayer || 'You'} vote={this.state.vote} show={this.state.showCards}/>
      </div>
      <div className="RoomControls">
          <button onClick={flipCards}>
            Flip em
          </button>
        </div>
      
      <div className="VotingInstructions">Click a card to vote</div>
      <div className="Deck">
        {deck.map((card)=> 
          <div onClick={e=>vote(card)} style={this.state.vote === card? {border:'3px dashed yellow'}: {border: 'none'}}>
            <Card animal={card.animal} image={card.image}/>
          </div>
        )}
      </div>
      
    </div>
    );
  }
}



export default Room;
