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
export default class HeaderBar extends Component {

    constructor(props){
        super(props);
    }

    _pop(){
        this.props.navigator&&this.props.navigator.pop();
    }

    render(){
        var obj = this.props.initObj;
        return(
            <View style={[styles.row]}>
                <View style={{position:'absolute',height: Util.pixel * 42,justifyContent:'center',alignItems:'center',width:Util.size.width,}}>
                    <Text style={styles.text} numberOfLines={1}>{obj.title}</Text>
                </View>
                <View style={[styles.headerBtnCont, this.props.canGoBack?{flex:0.4}:{}]}>
                    {this.props.canGoBack ?
                        <TouchableOpacity
                            onPress={obj.popToTop ? this._pop.bind(this,true) :(this.props.leftPress||this._pop.bind(this)) }
                            style={[styles.headerBtn]}>
                            <Image source={require('./../img/back.png')}/>
                        </TouchableOpacity>
                        :
                        <View style={styles.headerBtn}/>
                    }
                </View>
                <View style={{flex:1}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: Util.naviBarHeight,
        paddingTop: Util.isIOS ? Util.pixel * 20 : null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBtnCont: {
        flex: 0.2,
        flexDirection: 'row',
    },
    headerBtn: {
        height: Util.pixel * 42,
        paddingLeft: Util.pixel * 12,
        paddingRight: Util.pixel * 12,
        paddingTop: Util.pixel * 16,
    },
    row: {
        backgroundColor: 'rgb(40,37,66)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{
        color:'#fff',
        fontSize:Util.commonFontSize(20),
        alignSelf:'center',
        textAlign:'center',
        marginLeft:Util.pixel*50,
        marginRight:Util.pixel*60,
        width:Util.size.width-100,
        fontWeight:'bold'
    }
});