import React from 'react';
import {Text , View , TouchableOpacity } from 'react-native';

const bekle = 'yellow';
const yanlis = 'red';
const dogru = 'green';
const varsayilan = 'aqua';

export default class myButton extends React.Component {

   
    constructor(props){
        super(props);
        this.state = {
            renk : varsayilan
        };
        this.butonDuzen = this.butonDuzen.bind(this);
    }

    butonDuzen(){
        if((this.props.sira == this.props.tiklandi)){
            if(this.props.tiklandi == this.props.cevap ){
                this.setState({renk : dogru});
                console.warn('dogru');
            }
            else{
                this.setState({renk : yanlis});
                console.warn('yanlis');
            }
        }
    }

    componentDidUpdate(){
        this.butonDuzen();
        console.warn('girdi');
    }

    render(){
        button = {
            flex : 1,
            margin : 8,
            borderWidth : 4,
            borderRadius : 8,
            backgroundColor : this.state.renk
        };
        return(
            <View style = {button}>
                <TouchableOpacity onPress = {this.props.onPress} style = {styles.touch}>
                    <Text style = {styles.text}> 
                        {this.props.text}
                    </Text>    
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = {
    text : {
        color : 'black',
        fontSize : 16,   
    },
    touch : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center', 
    }

};
