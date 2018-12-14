import React from 'react';
import TweetsList from './TweetsList';
import { Grid } from '@material-ui/core';
import { twitterAccounts } from '../constants';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getDraggableListStyle, getDraggableItemStyle } from '../jss/style';

class TweetDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tweetOrder: localStorage.getItem('columnsOrder')
                ? localStorage.getItem('columnsOrder').split(',')
                : twitterAccounts
        }

        this.handleColumnsOrderChange = this.handleColumnsOrderChange.bind(this);
    }

    reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    handleColumnsOrderChange(result) {
        if (!result.destination) {
            return;
        }

        const tweetOrder = this.reorder(
            this.state.tweetOrder,
            result.source.index,
            result.destination.index
        );

        this.setState({tweetOrder});
        localStorage.setItem('columnsOrder', tweetOrder);
    }

    render() {
        let tweetOrder = this.state.tweetOrder;
        return (
            <Grid container justify="space-evenly" alignItems="baseline" direction="row" spacing={32}>
                    <DragDropContext onDragEnd={this.handleColumnsOrderChange}>
                        <Droppable droppableId="droppable" direction="horizontal">
                                {
                                    (provided, snapshot) => (
                                        <div ref={provided.innerRef}
                                            style={getDraggableListStyle(snapshot.isDraggingOver)}
                                            {...provided.droppableProps}>
                                            {
                                                tweetOrder.map((screenName, index) => {
                                                    return (
                                                        <Draggable key={screenName} draggableId={screenName} index={index}>
                                                            {
                                                                (provided, snapshot) => (
                                                                    <div ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        style={getDraggableItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}
                                                                        {...provided.dragHandleProps}>
                                                                            <TweetsList screenName={screenName} 
                                                                                count={this.props.tweetCount[screenName]} />
                                                                    </div>
                                                                )
                                                            }
                                                        </Draggable>
                                                    );
                                                })
                                            }
                                        </div>
                                    )
                                }
                        </Droppable>
                    </DragDropContext>
                </Grid>
        );
    }
}

export default TweetDashboard;