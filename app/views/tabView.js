/**
 * Created by jadeyan on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from './../common/util';
import SelectionTabBar from './selectionTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DetailList from './detailList';
import InterViewDetail from './interviewDetail'
export default class TabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabData: ['Detail', 'Interview']
        };
        if(this.props.data){
            this.data = [{title: 'Position Title', content:this.props.data.title},
                {title: 'Position Level', content:this.props.data.level}].concat(detailDataList);
        }
    }

    _onChangeTab(index) {
    }

    render() {
        return (
            <ScrollableTabView
                page={this.state.index}
                onChangeTab={(index)=>this._onChangeTab(index)}
                renderTabBar={() => <SelectionTabBar />}
            >
                {
                    this.state.tabData.map((item, key) =>
                        <View tabLabel={item}
                              key={key}
                              style={{flex:1}}>
                            <View
                                style={{width: Util.size.width,height: Util.pixel*2,backgroundColor: '#f6f7fa',marginTop:Util.pixel*3}}/>
                            <View style={{marginLeft:Util.pixel*10, marginRight:Util.pixel*10}}>
                                {key == 0 ?
                                    <DetailList data={this.data}
                                    />
                                    :
                                    <InterViewDetail/>
                                }
                            </View>
                        </View>
                    )
                }
            </ScrollableTabView>
        );
    }
}

const detailDataList = [
    {
        title: 'Hire Type',
        content: 'New Hire'
    },
    {
        title: 'Team Category',
        content: 'ITS/CD'
    },
    {
        title: 'Owner / Full Name',
        content: 'Yuan Shuo'
    },
    {
        title: 'KA / Full Name',
        content: 'Yuan Shuo'
    },
    {
        title: 'HR / Full Name',
        content: 'John Zhang'
    },
    {
        title: 'Owner / Sex',
        content: 'Male'
    },
    {
        title: 'Owner / Academic',
        content: 'Bachelor'
    },
    {
        title: 'Position',
        content: 'Android Developer'
    },
    {
        title: 'Position Tile',
        content: 'Senior Engineer'
    },
    {
        title: 'ABC',
        content: 'ABVNC'
    },
    {
        title: 'ABC',
        content: 'ABVNC'
    },
    {
        title: 'ABC',
        content: 'ABVNC'
    },
    {
        title: 'ABC',
        content: 'ABVNC'
    },
    {
        title: 'ABC',
        content: 'ABVNC'
    }];