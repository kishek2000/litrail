import React from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { MAIN_PRIMARY_COLOUR, ScreenHeadingStyles } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import opalIcon from '../../assets/opal.png';

export function BalanceScreen({ currentUser }) {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: '#EEEEEE',
					alignItems: 'center',
					position: 'relative',
					paddingHorizontal: 16
				}}
			>
				<Text style={ScreenHeadingStyles}>Balance</Text>
				<Text
					style={{
						fontSize: 18,
						color: MAIN_PRIMARY_COLOUR,
						marginTop: 8,
						fontFamily: 'WorkSans_400Regular'
					}}
				>
					View and manage your Opal Balance.
				</Text>
				<Text
					style={{
						fontFamily: 'WorkSans_700Bold',
						marginTop: 24,
						alignSelf: 'flex-start',
						color: MAIN_PRIMARY_COLOUR
					}}
				>
					OPAL BALANCE
				</Text>
				<OpalCardInput placeholder="Opal Card Number..." />
				<OpalCardInput placeholder="Opal Security Code or Password..." />

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 24,
						paddingHorizontal: 24,
						justifyContent: 'space-between',
						width: '100%'
					}}
				>
					<TouchableOpacity>
						<Text
							style={{
								color: MAIN_PRIMARY_COLOUR,
								fontFamily: 'WorkSans_400Regular',
								fontSize: 10,
								textDecorationLine: 'underline'
							}}
						>
							Forgot username/password
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							backgroundColor: MAIN_PRIMARY_COLOUR,
							borderRadius: 24,
							paddingHorizontal: 12,
							paddingVertical: 8
						}}
					>
						<Image
							source={opalIcon}
							style={{
								width: 30,
								resizeMode: 'contain',
								marginRight: 2
							}}
						/>
						<Text
							style={{
								color: 'white',
								fontFamily: 'WorkSans_700Bold',
								marginTop: -1,
								fontSize: 10
							}}
						>
							SIGN IN
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

function OpalCardInput({ placeholder }) {
	return (
		<TextInput
			style={{
				height: 46,
				backgroundColor: 'white',
				width: '100%',
				borderRadius: 24,
				paddingLeft: 24,
				fontFamily: 'WorkSans_300Light',
				fontSize: 16,
				color: MAIN_PRIMARY_COLOUR,
				marginTop: 8
			}}
			placeholder={placeholder}
		/>
	);
}
