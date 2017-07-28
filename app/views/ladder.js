/**
 * Created by jadeyan on 2017/7/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
var pr = Util.pixel;
export default class Ladder extends Component{

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.ladderView1}/>
                <View style={styles.ladderView3}/>
                <View style={styles.ladderView2}/>
                <Text style={[styles.boldTxt, {position:'absolute', top:pr*20, left:100*pr}]}>15</Text>
                <Text style={[styles.txt, {position:'absolute', top:pr*23, left:210*pr}]}>HR sourcing</Text>
                <View style={styles.ladderView4}/>
                <View style={styles.ladderView6}/>
                <View style={styles.ladderView5}/>
                <Text style={[styles.boldTxt, {position:'absolute', top:pr*60, left:100*pr}]}>15</Text>
                <Text style={[styles.txt, {position:'absolute', top:pr*63, left:193*pr}]}>HR interviewed</Text>
                <View style={styles.ladderView7}/>
                <View style={styles.ladderView9}/>
                <View style={styles.ladderView8}/>
                <Text style={[styles.boldTxt, {position:'absolute', top:pr*100, left:100*pr}]}>15</Text>
                <Text style={[styles.txt, {position:'absolute', top:pr*103, left:176*pr}]}>Short list to BU</Text>
                <View style={styles.ladderView10}/>
                <View style={styles.ladderView12}/>
                <View style={styles.ladderView11}/>
                <Text style={[styles.boldTxt, {position:'absolute', top:pr*140, left:100*pr}]}>15</Text>
                <Text style={[styles.txt, {position:'absolute', top:pr*143, left:159*pr}]}>BU interviewed</Text>
            </View>
        );
    }
}

const bgColor1 = 'rgb(254,184,71)';
const bgColor2 = 'rgb(253,134,28)';
const bgColor3 = 'rgb(251,101,18)';
const bgColor4 = 'rgb(252,198,44)';
const bgColor5 = 'rgb(250,153,17)';
const bgColor6 = 'rgb(249,120,14)';
const bgColor7 = 'rgb(254,231,136)';
const bgColor8 = 'rgb(254,211,79)';
const bgColor9 = 'rgb(253,191,53)';
const bgColor10 = 'rgb(254,235,174)';
const bgColor11 = 'rgb(254,218,123)';
const bgColor12 = 'rgb(254,201,91)';

const styles  = StyleSheet.create({
    ladderView1:{
        top:pr*10,
        borderTopWidth:pr*40,
        borderTopColor:bgColor1,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*200,
        position:'absolute'
    },
    ladderView2:{
        top:pr*10,
        left:pr*30,
        borderTopWidth:pr*40,
        borderTopColor:bgColor2,
        borderLeftWidth:pr*12,
        borderLeftColor:'transparent',
        borderRightWidth:pr*12,
        borderRightColor:'transparent',
        width:pr*140,
        position:'absolute'
    },
    ladderView3:{
        top:pr*10,
        left:pr*141,
        borderTopWidth:pr*40,
        borderTopColor:bgColor3,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*59,
        position:'absolute'
    },
    ladderView4:{
        top:pr*50,
        left:pr*17,
        borderTopWidth:pr*40,
        borderTopColor:bgColor4,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*166,
        position:'absolute'
    },
    ladderView5:{
        top:pr*50,
        left:pr*42,
        borderTopWidth:pr*40,
        borderTopColor:bgColor5,
        borderLeftWidth:pr*12,
        borderLeftColor:'transparent',
        borderRightWidth:pr*12,
        borderRightColor:'transparent',
        width:pr*116,
        position:'absolute'
    },
    ladderView6:{
        top:pr*50,
        left:pr*129,
        borderTopWidth:pr*40,
        borderTopColor:bgColor6,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*54,
        position:'absolute'
    },
    ladderView7:{
        top:pr*90,
        left:pr*34,
        borderTopWidth:pr*40,
        borderTopColor:bgColor7,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*132,
        position:'absolute'
    },
    ladderView8:{
        top:pr*90,
        left:pr*54,
        borderTopWidth:pr*40,
        borderTopColor:bgColor8,
        borderLeftWidth:pr*12,
        borderLeftColor:'transparent',
        borderRightWidth:pr*12,
        borderRightColor:'transparent',
        width:pr*92,
        position:'absolute'
    },
    ladderView9:{
        top:pr*90,
        left:pr*117,
        borderTopWidth:pr*40,
        borderTopColor:bgColor9,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*49,
        position:'absolute'
    },
    ladderView10:{
        top:pr*130,
        left:pr*51,
        borderTopWidth:pr*40,
        borderTopColor:bgColor10,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*98,
        position:'absolute'
    },
    ladderView11:{
        top:pr*130,
        left:pr*66,
        borderTopWidth:pr*40,
        borderTopColor:bgColor11,
        borderLeftWidth:pr*12,
        borderLeftColor:'transparent',
        borderRightWidth:pr*12,
        borderRightColor:'transparent',
        width:pr*68,
        position:'absolute'
    },
    ladderView12:{
        top:pr*130,
        left:pr*105,
        borderTopWidth:pr*40,
        borderTopColor:bgColor12,
        borderLeftWidth:pr*17,
        borderLeftColor:'transparent',
        borderRightWidth:pr*17,
        borderRightColor:'transparent',
        width:pr*44,
        position:'absolute'
    },
    txt:{
        fontSize:Util.commonFontSize(12),
        color:'rgb(103,101,101)'
    },
    boldTxt:{
        fontSize:Util.commonFontSize(16),
        color:'#fff',
        fontWeight:'bold'
    }
});