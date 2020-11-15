import './App.scss';
import React from 'react';

class ScoreBoard extends React.Component {
    render() {
        const pos = this.props.pos;
        return (
            <div className={`score-board-${pos} center`}>
                <div className="score-board center">
                    <div className="score">
                        <div>
                            <h1>{this.props.v1} </h1>
                            <p>{this.props.type}</p>
                        </div>
                        <div>
                            <h1>{this.props.v2} </h1>
                            <p>{this.props.type}</p>
                        </div>
                    </div>
                    <div className="team-names">
                        <p style={{"color":"red"}}>red team</p>
                        <p style={{"color":"blue"}}>blue team</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        const left = this.props.left;
        const leftMargin = left * 25;
        const cardType = this.props.type;

        console.log(cardType);

        const cardStyle = {
            "left": `${leftMargin}px`,
            "zIndex": `${left}`
        };
        return (
            <div className="card" style={cardStyle}>
                {/* source of cards: https://www.me.uk/cards */}
                <img src={`/cards/${cardType}.svg`} alt="card" />
            </div>
        );
    }
}

class Player extends React.Component {
    render() {
        const cards = this.props.cards.map((card, index) =>
            <Card type={card} left={index} key={index} />
        );
        const place = this.props.place;
        return (
            <div className={`player player-${place}`}>
                <div className={`player-list player-list-${place}`}>
                    {cards}
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redTeamPoints: 1,
            blueTeamPoints: 1,
            redTeamTricks: 2,
            blueTeamTricks: 2,
            playerTopCards: ["2D", "2C", "6H", "KC", "JH", "5D", "QH", "AS", "TC", "6S", "5C", "KS", "TH"],
            playerLeftCards: ["2D", "2C", "6H", "KC", "JH", "5D", "QH", "AS", "TC", "6S", "5C", "KS", "TH"],
            playerRightCards: ["2D", "2C", "6H", "KC", "JH", "5D", "QH", "AS", "TC", "6S", "5C", "KS", "TH"],
            playerBottomCards: ["2D", "2C", "6H", "KC", "JH", "5D", "QH", "AS", "TC", "6S", "5C", "KS", "TH"]
        };
    }
    render() {
        return (
            <div className="App">

                <ScoreBoard type="points" pos="left" v1={this.state.redTeamPoints} v2={this.state.blueTeamPoints} />
                <div className="center">
                    <h1>MyWhist</h1>
                </div>
                <ScoreBoard type="tricks" pos="right" v1={this.state.redTeamTricks} v2={this.state.blueTeamTricks} />
                <Player place="top" cards={this.state.playerTopCards} />
                <Player place="left" cards={this.state.playerLeftCards}  />
                <div className="middle-area"></div>
                <Player place="right" cards={this.state.playerRightCards}  />
                <Player place="bottom" cards={this.state.playerBottomCards}  />
            </div>
        );
    }
}

export default App;
