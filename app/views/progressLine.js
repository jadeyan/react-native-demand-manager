/**
 * Created by jadeyan on 2017/7/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from './../common/util';
var pr = Util.pixel;
export default class ProgressLine extends Component {
    render(){
        return (
            <View style={{flexDirection:'column'}}>
                <View style={[styles.container, {marginLeft:pr*15, marginRight:pr*13}]}>
                    <View style={styles.visitedCircle}/>
                    <View style={[styles.line,{backgroundColor:'rgb(238,154,35)'}]}/>
                    <View style={[styles.visitingCircle, {alignItems:'center', justifyContent:'center'}]}>
                        <View style={styles.visitedCircle}/>
                    </View>
                    <View style={[styles.line]}/>
                    <View style={styles.willVisitCircle}/>
                    <View style={[styles.line]}/>
                    <View style={styles.willVisitCircle}/>
                    <View style={[styles.line]}/>
                    <View style={styles.willVisitCircle}/>
                </View>
                <View style={[styles.container]}>
                    <Text
                        numberOfLines={1} style={[styles.txt, {textAlign:'left'}]}>Approval</Text>
                    <Text
                        numberOfLines={1} style={[styles.txt, {color:'rgb(238,154,35)'}]}>Interviewing</Text>
                    <Text
                        numberOfLines={1} style={styles.txt}>Offering</Text>
                    <Text
                        numberOfLines={1} style={styles.txt}>Offered</Text>
                    <Text
                        numberOfLines={1} style={[styles.txt, {textAlign:'right'}]}>Hired</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    visitedCircle:{
        height:pr*8,
        width:pr*8,
        borderRadius:pr*4,
        backgroundColor:'rgb(238,154,35)'

    },
    willVisitCircle:{
        height:pr*8,
        width:pr*8,
        borderRadius:pr*4,
        backgroundColor:'rgb(193,193,193)'
    },
    visitingCircle:{
        height:pr*12,
        width:pr*12,
        borderRadius:pr*6,
        borderColor:'rgb(238,154,35)',
        borderWidth:pr*1
    },
    line:{
        height:pr*1,
        flex:1,
        marginLeft:3*pr,
        marginRight:3*pr,
        backgroundColor:'rgb(193,193,193)'
    },
    txt:{
        fontSize:Util.commonFontSize(10),
        color:'rgb(197,197,197)',
        flex:1,
        textAlign:'center'
    }
});