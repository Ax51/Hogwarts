import React from 'react';
import './House-block-page.css';

import GryffindorLogo from '../pics/Logos/Flags/Gryffindor_logo.png';
import SlytherinLogo from '../pics/Logos/Flags/Slytherin_logo.png';
import RavenclawLogo from '../pics/Logos/Flags/Ravenclaw_logo.png';
import HufflepuffLogo from '../pics/Logos/Flags/Hufflepuff_logo.png';

import HouseBlockItem from '../House-block-item/House-block-item.js';
import ScoreManagerBlock from '../Score-manager-block/Score-manager-block.js';

class HouseBlockPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houseBlockArr: [
                { name: 'Гриффиндор', img: GryffindorLogo, classNm: 'gryffindor' },
                { name: 'Слизерин', img: SlytherinLogo, classNm: 'slytherin' },
                { name: 'Когтевран', img: RavenclawLogo, classNm: 'ravenclaw' },
                { name: 'Пуффендуй', img: HufflepuffLogo, classNm: 'hufflepuff' }
            ]
        }
    }

    // houseBlockItemSort = () => {
    //     const newOrder = this.state.houseBlockArr.map((e) => {
    //         return (
    //             console.log(e.score)
    //         )
    //     })
    //     this.houseBlockItemRender(newOrder)
    // }

    houseBlockItemSort = () => {
        console.log(this.props.housesScore);
    }

    houseBlockItemRender = (houses) => houses.map((e) => {
        const { name, img, classNm } = e;
        let score;
        switch (name) {
            case 'Гриффиндор':
                score = this.props.housesScore.GryffindorPoints;
                break;
            case 'Слизерин':
                score = this.props.housesScore.SlytherinPoints;
                break;
            case 'Когтевран':
                score = this.props.housesScore.RavenclawPoints;
                break;
            case 'Пуффендуй':
                score = this.props.housesScore.HufflepuffPoints;
                break;
            default:
                break;
        }
        return (
            <HouseBlockItem
                key={name}
                name={name}
                score={score}
                img={img}
                classNm={classNm} />
        )
    })

    render() {
        this.houseBlockItemSort()
        return (
            <div className='main-page'>
                <div className='main-page--container'>
                    <div className='greetings-table'>
                        <h2>Приветствую Вас, профессор {this.props.professor}</h2>
                        <h3>Сейчас лидирует {}</h3>
                    </div>
                    <div className='working-area'>
                        {this.houseBlockItemRender(this.state.houseBlockArr)}
                    </div>
                    <ScoreManagerBlock
                        changeHouseScore={this.props.changeHouseScore} />
                </div>
            </div>
        )
    }
}

export default HouseBlockPage