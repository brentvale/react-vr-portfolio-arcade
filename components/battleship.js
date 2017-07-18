import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
	Model
} from 'react-vr';

export default class Battleship extends Component {
	constructor(){
		super();
		this.state = {
			hoverBattleShip: false
		}
		this.hoverBattleship = this.hoverBattleship.bind(this);
		this.unHoverBattleship = this.unHoverBattleship.bind(this);
	}
	
	hoverBattleship(){
		this.setState({hoverBattleShip: true});
	}
	
	unHoverBattleship(){
		this.setState({hoverBattleShip: false});
	}
	
  render() {
		const fakeBlueScreen = <View style={{backgroundColor: 'blue', height: 0.5, width: 0.6, transform: [{rotateX:-7, rotateY: 0},{translate: [0.34,1.25,0.55]}] }}></View>;
		const fakeGreenScreen = <View style={{backgroundColor: 'green', height: 0.55, width: 0.65, transform: [{rotateX:-7, rotateY: 0},{translate: [-0.51,1.3,.3]}] }}></View>;
		console.log(`this.state.hoverBattleShip = ${this.state.hoverBattleShip}`);
		let arcadeRight, arcadeLeft;
		if(this.state.hoverBattleShip){
			arcadeRight = <Model source={{
										    obj: asset('battleship_right_final.obj'),
												mtl: asset('battleship_right_final_hover.mtl'),
										  }}
										/>
			arcadeLeft = <Model source={{
										    obj: asset('battleship_left_final.obj'),
												mtl: asset('battleship_left_final_hover.mtl'),
										  }}
										/>
		} else {
			arcadeRight = <Model source={{
										    obj: asset('battleship_right_final.obj'),
												mtl: asset('battleship_right_final.mtl'),
										  }}
										/>
			arcadeLeft = <Model source={{
										    obj: asset('battleship_left_final.obj'),
												mtl: asset('battleship_left_final.mtl'),
										  }}
										/>
		}
    return (
			
				<View style={{
						flex: 1,
		        flexDirection: 'column',
		        width: 2,
		        alignItems: 'stretch',
		        transform: [{translate: [-1, -1, -4]}]
					}}>
					<Text
	          style={{
	            backgroundColor: 'black',
	            fontSize: 0.8,
	            layoutOrigin: [.4, 0],
	            paddingLeft: 0.2,
	            paddingRight: 0.2,
	            textAlign: 'center',
	            textAlignVertical: 'center',
	            transform: [{translate: [0, 2, -2]}],
							width: 4
	          }}>Games</Text>
					<Pano source={{uri: 'office_lobby.jpg'}} />
		      <View style={{
									flex: 1,
					        flexDirection: 'row',
					      	}}
									onEnter={this.hoverBattleship}
									onExit={this.unHoverBattleship}>
					
						<View style={{
							flex: 1,
	        		flexDirection: 'row',
							transform: [{rotateY: -45},{translate: [0,0,0.2]}],
							marginRight: 0.3
							}}>
							
							{arcadeLeft}
							
						</View>
								
						<View style={{
							flex: 1,
	        		flexDirection: 'row',
							transform: [{rotateY: 45}, {translate: [0,0,-0.5]}],
							marginLeft: 0.3
							}}>
							
							{ arcadeRight }
							
						</View>
		    	</View>
		    </View>
    );
  }
};
