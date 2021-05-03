import React from 'react';
import './App.css';

import LoginPage from '../Login-page/Login-page.js'
import HouseBlockPage from '../House-block-page/House-block-page.js';
import Header from '../Header/Header.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: {
                Dumbledore: 'sherbet-lemon',
                McGonagall: 'piertotum-locomotor',
                Flitwick: 'wingardium-leviosa',
                Snegg: 'legilimens',
                Test: '1234'
            },
            Login: false,
            activeUser: null,
            housesScore: {
                GryffindorPoints: 0,
                SlytherinPoints: 0,
                RavenclawPoints: 0,
                HufflepuffPoints: 0
            }

        }
    }

    loggingIn = (user, password) => {
        let counterFalse = 0;
        // Object.keys(this.state.users).forEach((e, i) => {
        //     if (user === e) {
        //         if (password === this.state.users[e]) {
        //             console.log('Введен верный пароль');
        //         } else {
        //             console.log('Неверный пароль!');
        //         }
        //     }
        // })
        for (let u in this.state.users) {
            if (user === u) {
                console.log('Пользователь найден');
                if (password === this.state.users[u]) {
                    console.log('Введен верный пароль');
                    this.setState({ Login: true, activeUser: user })
                    break;
                } else {
                    console.log('Пароль неверный');
                }
            } else {
                counterFalse += 1;
            }
            if (counterFalse === Object.keys(this.state.users).length) {
                console.log('Нет совпадений пользователя');
            }
        }
    }

    changeHouseScore = (house, points) => {
        switch (house) {
            case 'Gryffindor':
                this.setState({ housesScore: { ...this.state.housesScore, GryffindorPoints: this.state.housesScore.GryffindorPoints + points } });
                console.log(`Gryffindor gains ${points} points`);
                break;
            case 'Slytherin':
                this.setState({ housesScore: { ...this.state.housesScore, SlytherinPoints: this.state.housesScore.SlytherinPoints + points } });
                console.log(`Slytherin gains ${points} points`);
                break;
            case 'Ravenclaw':
                this.setState({ housesScore: { ...this.state.housesScore, RavenclawPoints: this.state.housesScore.RavenclawPoints + points } });
                console.log(`Ravenclaw gains ${points} points`);
                break;
            case 'Hufflepuff':
                this.setState({ housesScore: { ...this.state.housesScore, HufflepuffPoints: this.state.housesScore.HufflepuffPoints + points } });
                console.log(`Huffelpuff gains ${points} points`);
                break;
            default:
                break;
        }
    }

    checkLogin = () => {
        if (this.state.Login) {
            return (<>
                <Header />
                <HouseBlockPage
                    professor={this.state.activeUser}
                    housesScore={this.state.housesScore}
                    changeHouseScore={this.changeHouseScore} />
            </>)
        } else {
            return (<>
                <LoginPage
                    loggingIn={this.loggingIn} />
            </>)
        }
    }

    render() {
        return (
            this.checkLogin()
            // <>
            //     <LoginPage
            //         loggingIn={this.loggingIn} />
            //     <Header />
            //     <HouseBlockPage
            //         housesScore={this.state.housesScore}
            //         changeHouseScore={this.changeHouseScore} />
            // </>
        )
    }
}

export default App;