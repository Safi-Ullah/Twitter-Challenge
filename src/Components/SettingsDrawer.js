import React from 'react';
import { 
    Drawer, List, ListItemIcon, ListItem,
    ListItemText, Divider, Switch, TextField
} from '@material-ui/core';
import SunIcon from '@material-ui/icons/WbSunny';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'
import { withStyles } from '@material-ui/core/styles';
import { drawerStyles } from "../jss/style";

class SettingsDrawer extends React.Component {

    render() {
        const { classes, tweetCount } = this.props;
        console.log(tweetCount['newsycombinator']);
        return (
            <Drawer open={this.props.showDrawer} onClose={this.props.toggleDrawer}>
                <div className={classes.list}>
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <SunIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Theme
                            </ListItemText>
                            <Switch checked={this.props.theme === 'dark'}
                                onChange={this.props.handleThemeChange}
                                value="theme"
                                color="secondary" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <ViewHeadlineIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Tweets Count
                            </ListItemText>
                        </ListItem>
                        {
                            ['newsycombinator', 'MakeSchool', 'ycombinator'].map((screenName, index) => {
                                return (
                                    <ListItem key={index}>
                                        <TextField
                                            value={tweetCount[screenName]}
                                            onChange={(event) => this.props.handleTweetCountChange(event.target.value, screenName)}
                                            type="number"
                                            label={screenName}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin="normal"
                                        />
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                    <Divider />
                </div>
            </Drawer>
        );
    }
}

export default withStyles(drawerStyles)(SettingsDrawer);