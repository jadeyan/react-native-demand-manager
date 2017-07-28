/**
 * Created by jadeyan on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
var pr = Util.pixel;
export default class DetailList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null
        };
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    renderRow(rowData) {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitle}>{rowData.title}</Text>
                <Text style={styles.rowContent}>{rowData.content}</Text>
            </View>
        );
    }

    renderSeparator() {
        return (<View style={styles.line}/>);
    }

    componentWillMount() {
        if (this.props.data) {
            this.setState({
                dataSource: this.ds.cloneWithRows(this.props.data)
            });
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSeparator={this.renderSeparator}
            />
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'column',
        marginLeft: pr * 15
    },
    rowTitle: {
        fontSize: Util.commonFontSize(12),
        color: 'rgb(56,55,55)',
        marginTop: pr * 10
    },
    rowContent: {
        fontSize: Util.commonFontSize(13),
        color: 'rgb(25,25,25)',
        fontWeight: 'bold',
        marginTop: pr * 5,
        marginBottom: pr * 10
    },
    line: {
        height: pr * 1,
        backgroundColor: 'rgb(236,232,232)'
    }
});