import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Animated
} from 'react-native';
import Button from './../components/Button';
import Util from './../common/util';
var pr = Util.pixel;
export default class SelectionTabBar extends Component{
	constructor(props){
		super(props);
	}
	renderTabOption(name,page){
		let isActiveTab = this.props.activeTab == page;
		let textColor = isActiveTab ? 'rgb(253,123,0)' : 'rgb(164,161,161)';
		let textSize = isActiveTab ? Util.commonFontSize(16) : Util.commonFontSize(14);
		return (
			<Button
				style={{flex:1}}
				key={name}
		        accessible={true}
		        accessibilityLabel={name}
		        accessibilityTraits='button'
		        onPress={() => this.props.goToPage(page)}
			>
				<View style={styles.tab}>
					<Text style={{color: textColor,fontSize: textSize}}>{name}</Text>
				</View>
			</Button>
		)
	};
	render(){
		let containerWidth = this.props.containerWidth;
		let tabUnderlineStyle = {
			position: 'absolute',
			width: pr*80,
			height: pr*2,
			backgroundColor: 'rgb(253,106,36)',
			bottom: 0
		};
		let left = this.props.scrollValue.interpolate({
	        inputRange: [0,0.5],
	        outputRange: [(containerWidth/2-tabUnderlineStyle.width)/2,(containerWidth/2-tabUnderlineStyle.width/2)],
	  });
		return (
			 <View style={[styles.tabs, this.props.style ]}>
		        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
		        <Animated.View style={[tabUnderlineStyle,{left}]} />
		     </View>
		)
	}
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Util.pixel * 6
  },
  tabs: {
    height: Util.pixel * 34,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor:'#fff',
    paddingTop:pr*10,
	  borderTopColor:'rgb(251,251,251)',
	  borderTopWidth:pr*2
  }
});