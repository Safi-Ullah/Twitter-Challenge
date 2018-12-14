import React from 'react';
import {
    Card, CardHeader, Divider, Avatar,
    CardContent, Typography, CardActions, Button
} from '@material-ui/core';
import moment from 'moment';
import { BounceLoader } from 'halogenium';
import { withStyles } from '@material-ui/core/styles';
import { cardStyles, blue } from '../jss/style';

class TweetCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    render() {
        const { classes, tweet } = this.props;
        const isRetweeted = tweet.retweeted_status;
        return (
            <Card className={classes.card}>
                { this.state.loading ? <div className="loading-component"><BounceLoader color={ blue }/></div> : null }
                <CardHeader
                    avatar={
                        <Avatar alt={isRetweeted ? tweet.retweeted_status.user.name : tweet.user.name}
                            src={isRetweeted ? tweet.retweeted_status.user.profile_image_url : tweet.user.profile_image_url}
                            className={classes.avatar} />
                    }
                    title={`${isRetweeted ? tweet.retweeted_status.user.name : tweet.user.name} 
                            (${isRetweeted ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name})`}
                    subheader={ moment(new Date(tweet.created_at)).format('LLLL') }
                />
                <CardContent>
                    {
                        isRetweeted
                            ? <Typography component="p" color='secondary'>
                                {`${tweet.user.name} retweeted`}
                            </Typography>
                            : null
                    }
                    <Typography component="p">
                        { tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text }
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        <Button color="secondary" className={classes.button}
                            href={`https://twitter.com/statuses/${tweet.id_str}`}>
                            Visit Tweet
                        </Button>
                    }
                </CardActions>
                <Divider component="li" />
            </Card>
        );
    }
}

export default withStyles(cardStyles)(TweetCard);