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
            activeUser: 'Волан-де-морт',
            housesScore: {
                GryffindorPoints: 0,
                SlytherinPoints: 0,
                RavenclawPoints: 0,
                HufflepuffPoints: 0
            },
            historyScore: []

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

    loggingOut = () => {
        this.setState({Login: false})
    }

    changeHouseScore = (house, points) => {
        switch (house) {
            // Here we choose (via switch-case) Hogwarts House for changing their score, then (via setState #1) changes score & (via setState #2) adds a record for history page
            case 'Gryffindor':
                this.setState({ housesScore: { ...this.state.housesScore, GryffindorPoints: this.state.housesScore.GryffindorPoints + points } }, () =>
                    this.setState({ historyScore: [...this.state.historyScore, `Профессор ${this.state.activeUser} присуждает ${points} очков Гриффиндору. Всего у Гриффиндора ${this.state.housesScore.GryffindorPoints} очков`] })
                );
                break;
            case 'Slytherin':
                this.setState({ housesScore: { ...this.state.housesScore, SlytherinPoints: this.state.housesScore.SlytherinPoints + points } }, () =>
                    this.setState({ historyScore: [...this.state.historyScore, `Профессор ${this.state.activeUser} присуждает ${points} очков Слизерину. Всего у Слизерина ${this.state.housesScore.SlytherinPoints} очков`] })
                );
                break;
            case 'Ravenclaw':
                this.setState({ housesScore: { ...this.state.housesScore, RavenclawPoints: this.state.housesScore.RavenclawPoints + points } }, () =>
                    this.setState({ historyScore: [...this.state.historyScore, `Профессор ${this.state.activeUser} присуждает ${points} очков Когтеврану. Всего у Когтеврана ${this.state.housesScore.RavenclawPoints} очков`] })
                );
                break;
            case 'Hufflepuff':
                this.setState({ housesScore: { ...this.state.housesScore, HufflepuffPoints: this.state.housesScore.HufflepuffPoints + points } }, () =>
                    this.setState({ historyScore: [...this.state.historyScore, `Профессор ${this.state.activeUser} присуждает ${points} очков Пуффендую. Всего у Пуффендуя ${this.state.housesScore.HufflepuffPoints} очков`] })
                );
                break;
            default:
                break;
        };
    }

    checkLogin = () => {
        if (this.state.Login) {
            return (<>
                <BrowserRouter>
                    <Header 
                    loggingOut={this.loggingOut}/>
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
                            <HistoryPage 
                                history={this.state.historyScore}/>} />
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