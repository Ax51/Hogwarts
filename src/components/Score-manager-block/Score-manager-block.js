import React from 'react';
import './Score-manager-block.css';

class ScoreManagerBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spellAction: 'Добавить',
            RAMScoreCounter: 0,
            radioActive: null
        }
    }

    addPoints = (e) => {
        if (e.shiftKey) {
            this.setState({ RAMScoreCounter: this.state.RAMScoreCounter + 10 }, this.spellAction)
        } else {
            this.setState({ RAMScoreCounter: this.state.RAMScoreCounter + 1 }, this.spellAction)
        }
    }
    removePoints = (e) => {
        if (e.shiftKey) {
            this.setState({ RAMScoreCounter: this.state.RAMScoreCounter - 10 }, this.spellAction)
        } else {
            this.setState({ RAMScoreCounter: this.state.RAMScoreCounter - 1 }, this.spellAction)
        }
    }
    spellAction = () => {
        if (this.state.RAMScoreCounter >= 0) {
            this.setState({ spellAction: 'Добавить' })
        } else {
            this.setState({ spellAction: 'Вычесть' })
        }
    }

    onRadio = (e) => {
        this.setState({ radioActive: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.RAMScoreCounter !== 0 && this.state.radioActive !== null) {
            this.props.changeHouseScore(this.state.radioActive, this.state.RAMScoreCounter);
            this.setState({ RAMScoreCounter: 0, radioActive: null }, this.spellAction);

        }
    }

    render() {
        return (
            <div className='score-manager'>
                <div className='score-manager--greet'>
                    <h3>Начисление очков:</h3>
                </div>
                <div className='score-manager--calc'>
                    <form onSubmit={this.onSubmit}>
                        <div className='score-manager--calc--counter'>
                            {this.state.spellAction} {this.state.RAMScoreCounter} очков {this.state.radioActive}
                        </div>
                        <div className='score-manager--calc--house'>
                            <div className='gryffindor'>
                                <input
                                    type='radio'
                                    name='house'
                                    value='Gryffindor'
                                    onChange={this.onRadio}
                                    checked={this.state.radioActive === 'Gryffindor'} /> Гриффиндор
                            </div>
                            <div className='slytherin'>
                                <input
                                    type='radio'
                                    name='house'
                                    value='Slytherin'
                                    onChange={this.onRadio}
                                    checked={this.state.radioActive === 'Slytherin'} /> Слизерин
                            </div>
                            <div className='ravenclaw'>
                                <input
                                    type='radio'
                                    name='house'
                                    value='Ravenclaw'
                                    onChange={this.onRadio}
                                    checked={this.state.radioActive === 'Ravenclaw'} /> Когтевран
                            </div>
                            <div className='hufflepuff'>
                                <input
                                    type='radio'
                                    name='house'
                                    value='Hufflepuff'
                                    onChange={this.onRadio}
                                    checked={this.state.radioActive === 'Hufflepuff'} /> Пуффендуй
                            </div>
                        </div>
                        <div className='score-manager--calc--buttons'>
                            <button
                                className='score-manager--calc--buttons--btn'
                                type='button'
                                onClick={this.addPoints}>Добавить</button>
                            <button
                                className='score-manager--calc--buttons--btn'
                                type='button'
                                onClick={this.removePoints}>Вычесть</button>
                            <button
                                className='score-manager--calc--buttons--btn'
                                type='submit'>Начислить</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ScoreManagerBlock;