import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { increaseCount, decreaseCount } from '../actions';

class Counter extends React.Component {

    render() {
        return (

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24 ,marginHorizontal:20}}>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(increaseCount()),
        decreaseCounter: () => dispatch(decreaseCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

