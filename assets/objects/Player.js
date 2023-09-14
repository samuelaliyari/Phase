import React, { useState, useEffect } from "react";
import {
	View,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	Modal,
	TextInput,
	ImageBackground,
	Platform
} from "react-native";

import * as ImagePicker from 'expo-image-picker';



const Player = () => {
	const [show, setShow] = useState(false);
	const [playerImages, setPlayerImages] = useState({
		player2Img: null,
		player3Img: null,
		player4Img: null,
		player1Img: null,
	});

	const player2Img = require("../Images/blue.png")
	const player3Img = require("../Images/blue.png")
	const player4Img = require("../Images/blue.png")
	const player1Img = require("../Images/blue.png")


	const handleAddImage = async (playerKey) => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status !== "granted") {
			console.log("Permission denied to access camera");
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 1,

		});

		if (!result.canceled && result.assets.length > 0) {
			setPlayerImages((prevImages) => ({
				...prevImages,
				[playerKey]: result.assets[0].uri,

			}));
		}

	};

	const [playerNames, setPlayerNames] = useState({
		player1: "player 1",
		player2: "Player 2",
		player3: "Player 3",
		player4: "Player 4",
	});

	const [playerPoints, setPlayerPoints] = useState({
		player1Points: 0 ,
		player2Points: 0 ,
		player3Points: 0 ,
		player4Points: 0 ,
	});

	const [inputValues, setInputValues] = useState({
		player1Points: "",
		player2Points: "",
		player3Points: "",
		player4Points: "",
	  });
	  
	  const submitPoints = () => {
		// Update playerPoints with the values from inputValues
		setPlayerPoints((prevPoints) => ({
		  ...prevPoints,
		  player1Points: parseInt(inputValues.player1Points, 10) || 0,
		  player2Points: parseInt(inputValues.player2Points, 10) || 0,
		  player3Points: parseInt(inputValues.player3Points, 10) || 0,
		  player4Points: parseInt(inputValues.player4Points, 10) || 0,
		}));
	
		setShow(false);
	  };  

	const submit = () => {
		setShow(false);
		console.log(playerNames)
	};

	const setNames = () => {
		setShow(true);
	};

	const nextRound = () => {
		setShow(true);
	};


	const handleNameChange = (playerKey, newName) => {
		setPlayerNames((prevNames) => ({
			...prevNames,
			[playerKey]: newName,
		}));
	};




	return (

		<View style={styles.container}>
			<View style={styles.PlayerBox1}>
				<ImageBackground source={require('../Images/blueBG.png')} style={styles.backgroundImage}>

					<View style={styles.imgBox}>
						<TouchableOpacity onPress={() => handleAddImage(playerImages.player1Img)}>
							<Image source={playerImages.player1Img ? { uri: playerImages.player1Img } : player1Img} style={styles.imgLeft}/>
						</TouchableOpacity>
					</View>

					<View style={styles.nameBox}>
						<Text style={styles.playerName} value={""}>
							{playerNames.player1}
						</Text>
					</View>

					<View style={styles.phaseBox}>
						<Text style={styles.phase}>
							3
						</Text>
					</View>

					<View style={styles.pointsBox}>
						<Text style={styles.pointsp1}>
							{playerPoints.player1Points}
						</Text>
					</View>

				</ImageBackground>

			</View>

			<View style={styles.PlayerBox2}>
				<ImageBackground
					source={require('../Images/yellowBG.png')}
					style={styles.backgroundImage}
				>
					<View style={styles.imgBox}>
						<TouchableOpacity onPress={() => handleAddImage(playerImages.player2Img)}>
							<Image
								source={playerImages.player2Img ? { uri: playerImages.player2Img } : player2Img}
								style={styles.imgLeft}
							/>
						</TouchableOpacity>
					</View>

					<View>
						<Text style={styles.playerName} value={"player2"}>
							{playerNames.player2}
						</Text>
					</View>

					<View style={styles.phaseBox}>
						<Text style={styles.phase}>
							1
						</Text>
					</View>

					<View style={styles.pointsBox}>
						<Text style={styles.pointsp2}>
							{playerPoints.player2Points}
						</Text>
					</View>

				</ImageBackground>

			</View>

			<View style={styles.PlayerBox4}>
				<ImageBackground
					source={require('../Images/redBG.png')}
					style={styles.backgroundImage}
				>
					<View style={styles.imgBox}>
						<TouchableOpacity onPress={() => handleAddImage(playerImages.player4Img)}>
							<Image
								source={playerImages.player4Img ? { uri: playerImages.player4Img } : player4Img}
								style={styles.imgRight}
							/>
						</TouchableOpacity>

					</View>

					<View>
						<Text style={styles.playerName} value={"player4"}>
							{playerNames.player4}
						</Text>
					</View>

					<View style={styles.phaseBox}>
						<Text style={styles.phase}>
							1
						</Text>
					</View>

					<View style={styles.pointsBox}>
						<Text style={styles.pointsp4}>
							{playerPoints.player4Points}
						</Text>
					</View>

				</ImageBackground>

			</View>

			<View style={styles.PlayerBox3}>
				<ImageBackground
					source={require('../Images/greenBG.png')}
					style={styles.backgroundImage}
				>
					<View style={styles.imgBox}>
						<TouchableOpacity onPress={() => handleAddImage(playerImages.player3Img)}>
							<Image
								source={playerImages.player3Img ? { uri: playerImages.player3Img } : player3Img}
								style={styles.imgRight}
							/>
						</TouchableOpacity>
					</View>

					<View>
						<Text style={styles.playerName} value={"player3"}>
							{playerNames.player3}

						</Text>
					</View>

					<View style={styles.phaseBox}>
						<Text style={styles.phase}>
							2
						</Text>
					</View>

					<View style={styles.pointsBox}>
						<Text style={styles.pointsp3}>
							{playerPoints.player3Points}
						</Text>
					</View>

				</ImageBackground>

			</View>
			{/* enter player names Modal */}
			<View style={styles.popUp}>
				<Modal transparent={true} visible={show}>
					<View style={styles.Modal}>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder="Player 1"
								onChangeText={(text) => handleNameChange("player1", text)}
								style={[styles.input, styles.upperPlayer]}
							/>
							<TextInput
								placeholder="Player 2"
								onChangeText={(text) => handleNameChange("player2", text)}
								style={styles.input}
							/>
							<TextInput
								placeholder="Player 3"
								onChangeText={(text) => handleNameChange("player3", text)}
								style={styles.input}
							/>
							<TextInput
								placeholder="Player 4"
								onChangeText={(text) => handleNameChange("player4", text)}
								style={styles.input}
							/>
						</View>
						<View style={styles.buttonContainer}>
							<View  >
								<TouchableOpacity
									style={styles.button}
									onPress={submit}
								>
									<Text style={styles.modalButtonText}>Submit</Text>
								</TouchableOpacity>
							</View>

						</View>
					</View>
				</Modal>
			</View>
			{/*  next round Modal */}
			<View style={styles.popUp}>
			<Modal transparent={true} visible={show}>
          <View style={styles.Modal}>
            <View style={styles.inputContainer}>
              {Object.keys(playerNames).map((playerKey) => (
                <TextInput
                  key={playerKey}
                  placeholder={playerNames[playerKey]}
                  value={inputValues[`${playerKey}Points`]}
                  style={[styles.input, playerKey === "player1" && styles.upperPlayer]}
                  
                />
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={submitPoints}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
			</View>
			<View style={styles.buttonBox}>
				<TouchableOpacity style={styles.touchable}
					onPress={setNames}
				>
					<Text style={styles.buttonText}>Set Names</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.touchable} >
					<Text style={styles.buttonText}>Restart</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.touchable}
					onPress={nextRound}
				>
					<Text style={styles.buttonText}>Next Round</Text>
				</TouchableOpacity>

			</View>

		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},

	PlayerBox1: {
		width: "50%",
		height: "45%",
	},

	PlayerBox2: {
		width: "50%",
		height: "45%",
	},

	PlayerBox3: {
		width: "50%",
		height: "45%",
	},

	PlayerBox4: {
		width: "50%",
		height: "45%",
	},

	imgLeft: {
		width: 100,
		height: 100,
		marginTop: 10,
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 50,
		opacity: 1
	},

	imgRight: {
		width: 100,
		height: 100,
		marginTop: 10,
		borderColor: "black",
		borderWidth: 3,
		borderRadius: 50,
		opacity: 1
	},

	playerName: {
		fontSize: 25,
		fontFamily: "Impact",
		fontWeight: "600"
	},

	buttonBox: {
		width: "100%",
		height: "9%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},

	touchable: {
		height: 30,
		width: 100,
		backgroundColor: "rgb(60, 148, 250)",
		borderRadius: 10,
		margin: 10
	},

	buttonText: {
		textAlign: 'center',
		color: "white",
		fontSize: 15,
		fontWeight: Platform.OS === "ios" ? 800 : "800",
		justifyContent: "center",
		marginTop: Platform.OS === "ios" ? 7 : 7
	},

	popUp: {
		justifyContent: "center",
		alignContent: "center",
		position: "absolute"
	},

	Modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex start",
		backgroundColor: "#615F5FEF",
		marginHorizontal: 10,
		marginVertical: 100,
		marginBottom: 360,
		borderRadius: 20,
	},

	inputContainer: {
		width: "80%"
	},

	input: {
		backgroundColor: "white",
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderColor: "black",
		borderWidth: 0.5,
		fontSize: 20,
		marginTop: 25,
		borderRadius: 10
	},

	upperPlayer: {

		marginTop: 40,
		borderRadius: 10
	},

	button: {
		paddingHorizontal: 40,
		paddingVertical: 10,
		marginTop: 20,
		alignContent: "center",
		justifyContent: "center",
		borderRadius: 10,
		borderColor: "#1eb6ff",
		borderWidth: 2,
		backgroundColor: "#1eb6ff",
		marginHorizontal: 10
	},

	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around"
	},

	modalButtonText: {
		fontSize: 20,
		color: "white",
		fontWeight: Platform.OS === "ios" ? 800 : "800",
	},

	backgroundImage: {
		flex: 1,
		resizeMode: "center",
		alignItems: "center",
		borderWidth: 2,
		borderBottomColor: "black"
	},

	phase: {
		fontSize: 100,
		fontFamily: "bigNum",
		marginTop: 30,
		opacity: 1,
		color: "black",
	},

	phaseBox: {
	
	},

	pointsBox: {
		padding: 0,
		width: "100%",
	},

	pointsp1: {
		fontSize: 40,
		marginTop: 25,
		width: "100%",
		color: "white",
		fontWeight: Platform.OS === "ios" ? 800 : "800",
		textAlign: "center",
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 1
	},

	pointsp2: {
		fontSize: 40,
		marginTop: 25,
		width: "100%",
		color: "white",
		fontWeight: Platform.OS === "ios" ? 800 : "800",
		textAlign: "center",
		textShadowColor: 'rgba(2, 2, 2, 10)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 1
	}
	,

	pointsp3: {
		fontSize: 40,
		marginTop: 25,
		width: "100%",
		color: "white",
		fontWeight: Platform.OS === "ios" ? 800 : "800",
		textAlign: "center",
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 1
	}
	,

	pointsp4: {
		fontSize: 40,
		marginTop: 25,
		width: "100%",
		color: "white",
		fontWeight: Platform.OS === "ios" ? 800 : "800",
		textAlign: "center",
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 1
	}

});

export default Player;







