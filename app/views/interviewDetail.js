/**
 * Created by jadeyan on 2017/7/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';
import LadderView from './ladder'
var pr = Util.pixel;
export default class InterviewDetail extends Component{
    render(){
        return(
            <View style={{flexDirection:'column', height:pr*50}}>
                <Text style={{fontSize:Util.commonFontSize(11), color:'rgb(238,154,35)', marginLeft:pr*50, marginTop:pr*40}}>
                    Start Time: 23 JUN  End Time: tbd
                </Text>
                <View style={{paddingLeft:pr*10,paddingTop:pr*20}}>
                    <LadderView/>
                </View>
            </View>
        );
    }
}
// <Image source={require('./../img/gj-banner.png')} style={{resizeMode:'cover', width:100*pr, height:100*pr}}/>