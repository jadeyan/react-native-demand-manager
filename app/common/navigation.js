/**
 * Credit Life React Native App
 * This is navigator each page change will call this component
 * in this component will check the next page need user must authenticated or not
 * @John
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBar
} from 'react-native';

var Util = require("./util");
var Dimensions = require('Dimensions');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      loginModalVisible: false,
      couldLogin: false,
      uuid: "",
      haveLogin: true
    };
  },
  componentWillMount() {

  },
  componentDidMount() {},
  _showLogin: function(visible) {
    this.setState({
      loginModalVisible: visible
    });
  },

  render: function() {
    let initProps = this.props.initProps;
    return ( < Navigator initialRoute = {
        {
          name: '',
          component: this.props.component,
          index: 0,
          authenticate: false,
          animate: 0,
          initProps: initProps,
          loginModalVisible: false,
        }
      }
      configureScene = {
        (route,routeStack) => {
        if(route.passProps){
          if(route.passProps.disableGestures){
              var conf = Navigator.SceneConfigs.HorizontalSwipeJump;
              conf.gestures = null;
              return conf;
          }else{
            let move = route.animate == 1 ? Navigator.SceneConfigs.FloatFromBottom : Navigator.SceneConfigs.FloatFromRight
            return move;
          }

        }else{
          let move = route.animate == 1 ? Navigator.SceneConfigs.FloatFromBottom : Navigator.SceneConfigs.FloatFromRight
            return move;
        }

          // to do depend on route.passProps can deal with default animat
          // with diferent paramater
          //return route.scene ? route.scene : Navigator.SceneConfigs.FloatFromRight;
          // animate default value is 0, if we need other case we need change this condition

        }
      }
      renderScene = {
        (route, navigator) => {
          let Component = null
          let bgColor=Util.isIOS?'transparent':'black'
          //android状态栏默认黑底白字
          if(!Util.isIOS){
            route.StatusBar='light'
          }
          // to do need to validate the check user is authenticated or not condition
          Component = route.component;
          //use initProps to transfer navigation top properties,set once and set it to null
          if (route.initProps) {
            return (
              <View style={{flex: 1}}>
                <Component navigator={navigator} route={route} {...route.initProps} fromWelcomePage={this.props.fromWelcomePage}/>
              </View>
            );
          } else {
            return (
              <View style={{flex: 1}}>
                {
                  //IOS状态栏默认黑色字体
                  route.StatusBar&&route.StatusBar=='light'?
                  <StatusBar backgroundColor={bgColor} barStyle="light-content"/>
                  :
                  <StatusBar backgroundColor={bgColor} barStyle="dark-content"/>
                }
                <Component navigator={navigator} route={route} {...route.passProps}/>
              </View>
            );
          }
        }
      }
      />
    );



  }
});