import React from 'react';
import {Text , View} from 'react-native';

const Header = () => {
    const { textStyle , viewStyle} = styles;
    return( 
        <View style={{flex: 1}}>
            <View style={viewStyle}>
                <Text style={textStyle} >QuizRank</Text>
            </View>
            <View style={viewStyle}>
                <Text style={textStyle} >kAdi</Text>
            </View>
         </View>
    );
};

const styles = {
    textStyle: {
        fontSize : 30,
        color : 'black'
    },
    viewStyle:{
        flex : 1,
       /// backgroundColor : 'aqua',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 10,
        borderColor : 'black',
        borderWidth : 0.5,
        borderRadius : 10

    }
};


export default Header;