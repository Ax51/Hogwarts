import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import LoginPage from '../Login-page/Login-page.js'
import HouseBlockPage from '../House-block-page/House-block-page.js';
import Header from '../Header/Header.js';
import HistoryPage from '../History-page/History-page.js';
import ForumPage from '../Forum-page/Forum-page.js'

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
            Login: true,
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
                this.setState({ housesScore: { ...this.state.housesScore, GryffindorPoints: this.state.housesScore.GryffindorPoints + points } }, () =>
                    console.log(`Gryffindor gains ${points} points. Total: ${this.state.housesScore.GryffindorPoints}`)
                );
                break;
            case 'Slytherin':
                this.setState({ housesScore: { ...this.state.housesScore, SlytherinPoints: this.state.housesScore.SlytherinPoints + points } }, () =>
                    console.log(`Slytherin gains ${points} points. Total: ${this.state.housesScore.SlytherinPoints}`)
                );
                break;
            case 'Ravenclaw':
                this.setState({ housesScore: { ...this.state.housesScore, RavenclawPoints: this.state.housesScore.RavenclawPoints + points } }, () =>
                    console.log(`Ravenclaw gains ${points} points. Total: ${this.state.housesScore.RavenclawPoints}`)
                );
                break;
            case 'Hufflepuff':
                this.setState({ housesScore: { ...this.state.housesScore, HufflepuffPoints: this.state.housesScore.HufflepuffPoints + points } }, () =>
                    console.log(`Huffelpuff gains ${points} points. Total: ${this.state.housesScore.HufflepuffPoints}`)
                );
                break;
            default:
                break;
        }
    }

    checkLogin = () => {
        if (this.state.Login) {
            return (<>
                <BrowserRouter>
                    <Header />
                    <Route
                        exact path='/'
                        render={() =>
                            <HouseBlockPage
                                professor={this.state.activeUser}
                                housesScore={this.state.housesScore}
                                changeHouseScore={this.changeHouseScore} />} />
                    <Route
                        path='/history'
                        render={() =>
                            <HistoryPage />} />
                    <Route
                        path='/forum'
                        render={() =>
                            <ForumPage />} />

                </BrowserRouter>

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