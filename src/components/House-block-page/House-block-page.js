import React from 'react';
import './House-block-page.css';

import GryffindorLogo from '../pics/Logos/Flags/Gryffindor_logo.png';
import SlytherinLogo from '../pics/Logos/Flags/Slytherin_logo.png';
import RavenclawLogo from '../pics/Logos/Flags/Ravenclaw_logo.png';
import HufflepuffLogo from '../pics/Logos/Flags/Hufflepuff_logo.png';

import HouseBlockItem from '../House-block-item/House-block-item.js';
import ScoreManagerBlock from '../Score-manager-block/Score-manager-block.js';

const HouseBlockPage = (props) => {
    return (
        <div className='main-page'>
            <div className='main-page--container'>
                <div className='greetings-table'>
                    <h2>Приветствую Вас, профессор {props.professor}</h2>
                </div>
                <div className='working-area'>
                    <HouseBlockItem
                        name='Гриффиндор'
                        score={props.housesScore.GryffindorPoints}
                        img={GryffindorLogo}
                        classNm='gryffindor' />
                    <HouseBlockItem
                        name='Слизерин'
                        score={props.housesScore.SlytherinPoints}
                        img={SlytherinLogo}
                        classNm='slytherin' />
                    <HouseBlockItem
                        name='Когтевран'
                        score={props.housesScore.RavenclawPoints}
                        img={RavenclawLogo}
                        classNm='ravenclaw' />
                    <HouseBlockItem
                        name='Пуффендуй'
                        score={props.housesScore.HufflepuffPoints}
                        img={HufflepuffLogo}
                        classNm='hufflepuff' />
                </div>
                <ScoreManagerBlock
                    changeHouseScore={props.changeHouseScore} />
            </div>
        </div>
    )
}

export default HouseBlockPage