import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import _ from 'lodash';
import Header from './Header';
import SettingsDrawer from './SettingsDrawer';
import TweetDashboard from './TweetDashboard';
import { theme } from '../jss/style';
import '../css/App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            theme: theme,
            showDrawer: false,
            themeColor: localStorage.getItem('theme'),
            tweetCount: JSON.parse(localStorage.getItem('tweetCount') || '{}')
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleTweetCountChange = this.handleTweetCountChange.bind(this);
    }

    toggleDrawer() {
        this.setState({showDrawer: !this.state.showDrawer});
    }

    handleTweetCountChange(value, screenName) {
        value = value ? parseInt(value) : 0;
        let tweetCount = _.cloneDeep(this.state.tweetCount);
        tweetCount[screenName] = Math.min(value, 200);
        this.setState({tweetCount});
        localStorage.setItem('tweetCount', JSON.stringify(tweetCount));
    }

    handleThemeChange() {
        const currentTheme = this.state.themeColor;
        const newTheme = currentTheme === 'light' || !currentTheme ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);

        let theme = createMuiTheme({
            palette: {
                type: newTheme,
            },
            typography: { useNextVariants: true },
        });

        this.setState({ theme, themeColor: newTheme });
    }

    render() {
        return (
            <MuiThemeProvider theme={this.state.theme}>
                <Header toggleDrawer={this.toggleDrawer} />

                <SettingsDrawer theme={this.state.themeColor}
                    handleThemeChange={this.handleThemeChange.bind(this)}
                    toggleDrawer={this.toggleDrawer}
                    handleTweetCountChange={this.handleTweetCountChange}
                    tweetCount={this.state.tweetCount}
                    showDrawer={this.state.showDrawer} />

                <TweetDashboard tweetCount={this.state.tweetCount} />
            </MuiThemeProvider>
        );
    }
}

export default App;