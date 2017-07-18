import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
	Box,
	Model
} from 'react-vr';
import Battleship from './components/battleship';

export default class Arcade extends Component {
	
  render() {
    return (
			<View style={{
						flexDirection: 'column',
		        width: 2}}>
				<Battleship />
			</View>
    );
  }
};

AppRegistry.registerComponent('Arcade', () => Arcade);