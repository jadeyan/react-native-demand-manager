/**
 * Created by jadeyan on 2017/7/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    BackAndroid,
    ListView
} from 'react-native';
import HeaderBar from './views/headerBar';
import ProgressLine from './views/progressLine';
import TabView from './views/tabView';
var pr = Util.pixel;
export default class DemandManager extends Component {
    constructor(props){
        super(props);
        console.log('demand', props);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    };
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    };
    onBackAndroid = () => {
        let nav = this.props.navigator;
        nav.pop();
        return true; //阻止默认事件
    };
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar navigator={this.props.navigator}
                           initObj={{
                          title: 'Demand Manager'
                        }}
                           canGoBack={true}/>
                <View style={styles.body}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.solidCircle}>
                            <Text style={styles.boldTxt}>DE</Text>
                        </View>
                        <Text style={[styles.boldTxt, {color:'#000', alignSelf:'center'}]}>{this.props.data.title}</Text>
                    </View>
                    <View style={{marginLeft:20*pr, marginRight:20*pr, marginBottom:pr*20}}>
                        <ProgressLine />
                    </View>
                    <TabView data={this.props.data}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(40,37,66)'
    },
    body: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 10,
        borderRadius: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    solidCircle: {
        height: pr * 50,
        width: pr * 50,
        borderRadius: pr * 25,
        backgroundColor: 'rgb(238,154,35)',
        margin: pr * 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boldTxt: {
        fontWeight: 'bold',
        fontSize: Util.commonFontSize(16),
        color: '#fff'
    }

});