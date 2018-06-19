import React from 'react';
// View is used to position elements inside our applicatoin
import { Text, View } from 'react-native';

// Make a component
// When making this function best practice is to name it after the file but uppercase
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	// Using paranthesis because a multi line return
	return (
		// When we pass something from the root to the child we use prop
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		// jsx uses camelcase for styling
		fontSize: 20
	}
};

// Make the component available to other parts of the app
export default Header;
