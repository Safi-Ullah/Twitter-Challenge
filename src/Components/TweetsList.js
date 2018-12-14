import React from 'react';
import axios from 'axios';
import TweetCard from './TweetCard';
import { Grid } from '@material-ui/core';
import { BounceLoader } from 'halogenium';
import { withStyles } from '@material-ui/core/styles';
import { dashboardStyles, blue } from '../jss/style';
import { BASE_URL } from '../config';
import _ from 'lodash';

class TweetsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            loading: false
        };

        this.getTweets = this.getTweets.bind(this);
        this.getThrottledTweets = _.throttle(this.getTweets, 1000, {trailing: true, leading: false});
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.count !== this.props.count) {
            this.getThrottledTweets(nextProps.count);
        }
        return true;
    }

    getTweets(tweetCount) {
        this.setState({loading: true});
        const screenName = this.props.screenName;
        const count = tweetCount ? tweetCount : this.props.count;
        axios.get(`${BASE_URL}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${screenName}&tweet_mode=extended`)
            .then(response => {
            this.setState({
                tweets: response.data,
                loading: false
            });
        }, error => {
            console.error(error);
        });
    }

    componentDidMount() {
        this.getTweets();
    }

    handleExpandClick() {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} direction='column' alignItems="center" justify="center" spacing={16}>
                { this.state.loading ? <div className="loading-component"><BounceLoader color={ blue }/></div> : null }
                {
                    this.state.tweets.map(tweet => {
                        return (
                            <Grid key={tweet.id} item xs={12}>
                                <TweetCard tweet={tweet}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        );
    }
}

export default withStyles(dashboardStyles)(TweetsList);