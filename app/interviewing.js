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
    TouchableOpacity,
} from 'react-native';
import HeaderBar from './views/headerBar';
import DemandManager from './demandManager';
var EventEmitter = require('RCTDeviceEventEmitter');
var pr = Util.pixel;
export default class Interviewing extends Component {
    constructor(props){
        super(props);
        EventEmitter.addListener('setAndroidCallback', (fun, setNUll) => {
            this.setState({
                androidBackCallBack: fun,
                setNUll: setNUll
            })
        });

        EventEmitter.addListener('reSetAndroidCallback', () => {
            this.setOnBackAndroid();
        });
        this.state={
            androidBackCallBack: null,
            setNUll: true,
            dataSource: null
        };

        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        AppManager.quite();
    }

    setOnBackAndroid() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid() {
        const {
            navigator
        } = this.props;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            if (this.state.androidBackCallBack) {
                this.state.androidBackCallBack();
                if (this.state.setNUll) {
                    this.setState({
                        androidBackCallBack: null
                    })
                }
            } else {
                navigator.pop();
            }
            return true; //接管默认行为
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
    }

    componentWillMount() {
        this.setState({
            dataSource:this.ds.cloneWithRows(interviews)
        });
    }
    render() {

        return(
            <View style={styles.container}>
                <HeaderBar navigator={this.props.navigator}
                           initObj={{
                          title: 'Interviewing'
                        }}
                           canGoBack={false}/>
                {
                    this.state.dataSource ?
                        <ListView
                            renderRow={this.renderRow.bind(this)}
                            dataSource={this.state.dataSource}
                        />
                        :
                        null
                }
            </View>
        );
    }

    goDetail(data){
        console.log('props', this.props);
        console.log(data);
        this.props.navigator.push({
            component: DemandManager,
            passProps: {data:data}
        });
    }

    renderRow(rowData){
        return(
            <TouchableOpacity onPress={this.goDetail.bind(this, rowData)}>
                <View style={styles.rowContainer}>
                    <Text style={[styles.rowText, {fontWeight:'bold', marginBottom:pr*3}]}>{rowData.title}</Text>
                    <Text style={[styles.rowText]}>Level: {rowData.level}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(40,37,66)'
    },
    rowContainer:{
        flexDirection:'column',
        borderWidth:4,
        borderRadius:pr*10,
        borderColor:'rgb(40,37,66)',
        backgroundColor:'#fff',
        padding:pr*20
    },
    rowText:{
        fontSize:Util.commonFontSize(14),
        color:'#000',
    }
});

const interviews = [
    {title:'Senior Manager', level:'5.2'},
    {title:'Senior Manager', level:'5.1'},
    {title:'Demand Manager', level:'4.8'},
    {title:'Senior Manager', level:'5.4'},
    {title:'Senior Manager', level:'5.9'},
    {title:'Demand Manager', level:'4.5'},
    {title:'Demand Manager', level:'4.5'},
    {title:'Demand engineer', level:'3.1'},
    {title:'Demand engineer', level:'3.6'},
    {title:'Demand engineer', level:'3.6'},
    {title:'Demand engineer', level:'3.6'},
    {title:'Demand Manager', level:'4.2'},
    {title:'Demand Manager', level:'4.2'},
    {title:'Senior Manager', level:'5.4'},


];
