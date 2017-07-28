/**
 * Created by jadeyan on 2017/7/17.
 */
import React from 'react';
import Dimensions from 'Dimensions';
import {
    PixelRatio,
    View,
    Platform,
    NativeModules,
    Alert
} from 'react-native';
Util = {
    /*最小线宽*/

    pixel: Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? 1.2 : 1) : 1.1,

    lineHeight(height: Number) {
        return Platform.OS === 'ios' ? height : Math.round(height * 1.1 + 0.5);
    },
    naviBarHeight: Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? 1.2 : 1) * 70 : 60,
    /*字体大小*/
    commonFontSize(size: Number) {
        return Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? size + 2 : size) : (size + 2);
    },
    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    isIOS: Platform.OS === 'ios',

    getInjectScript() {
        //android下不能有斜线
        return `
      (function() {
        console.log('init WebViewBridge');
        WebViewBridge={};
        document.addEventListener('message', function(e) {
          var message=e.data;
          var fnName=message.split(';;;')[0];
          var data;
          try{
              data=JSON.parse(message.split(';;;')[1]);
          }catch(e){
            alert(e);
          }
          JSBrigeCallbacks[fnName].call(this,data);
        });
        var JSBrigeCallbacks={};
        WebViewBridge.sendMsgToNative=function(name,params,callback){
          JSBrigeCallbacks[name]=callback;
          console.log(name+';;;'+JSON.stringify(params||{}));
          window.postMessage(name+';;;'+JSON.stringify(params||{}),'*');
        };
        setTimeout(function(){
          WebViewBridgeLoaded && WebViewBridgeLoaded()
        },10);
      }());
    `;
    }
};
module.exports = Util;