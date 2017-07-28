/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
var Navigation = require('./app/common/navigation');
import Interviewing from './app/interviewing';

export default class demand_manager extends Component {
    render() {
        return (
            <Navigation component={Interviewing}/>
        );
    }
}

AppRegistry.registerComponent('demand_manager', () => demand_manager);
