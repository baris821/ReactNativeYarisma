import React from 'react';
import {Text , View , TouchableOpacity} from 'react-native';


const soru = ['Soru 1','soru 222222','SORU 33333'];
const secenek = [['Cevap 1.1','1.2','1.3','1.4'],['Cevap 1.','1.','1.','1.'],['Cevap 1.','1.','1.','1.']];
const cevaplar = [3,2,1];
const SURE = 10.0;

var interval = null;

export default class soruView extends React.Component {
    state = {
        soru : 0,
        tiklanan : 0,
        cevap : cevaplar[0],
        tiklandi : false,
        puan : 0.0,
        time : SURE,
    };
    constructor(props){
        super(props);

        butonRengi = styles.cevapButton;
        
        this.Cevap = this.Cevap.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.yeniSoru = this.yeniSoru.bind(this);

        this.startCountdown(SURE);
    }

    startCountdown(seconds){
        var counter = seconds;
      
        this.interval = setInterval(() => {
          this.setState({time : parseFloat(counter).toFixed(1)});
          counter = counter - 0.1;
    
          if(counter < 0.0 ){
            clearInterval(this.interval);
          };
        }, 100);
      };
    yeniSoru(){
        clearInterval(this.interval);
        sira = this.state.soru + 1;
        if(sira < soru.length){
            this.setState({soru : sira,cevap : cevaplar[sira] , tiklandi : false , tiklanan : 0});
            this.startCountdown(SURE);
        }else{
        }
    };
    Cevap(key){
        if(!this.state.tiklandi){
            if(this.state.cevap ==  key){
                butonRengi = styles.cevapDogru;
                let yeniPuan = parseFloat(this.state.puan) + parseFloat(this.state.time);
                this.setState({puan : parseFloat(yeniPuan).toFixed(1)});
            }else{
                butonRengi = styles.cevapYanlis;
                let yeniPuan = parseFloat(this.state.puan) - parseFloat(this.state.time);
                this.setState({puan : parseFloat(yeniPuan).toFixed(1)});
            }
            this.setState({tiklanan : key , tiklandi : true});
            this.yeniSoru();
        }

    };

    render(){
        return(
            <View style = {{flex : 1 , backgroundColor : 'gray'}}>
                <View style = {styles.PuanView}>
                    <Text style = {styles.PuanText}>
                        Sıralama : 25
                    </Text>
                    <Text style = {styles.PuanText}>
                        Puan : {this.state.puan} 
                    </Text>
                    <Text style = {styles.PuanText}>
                        Süre : {this.state.time}
                    </Text>
                </View>
                <View style = {{height : 1 , backgroundColor : 'black' , margin : 8}}></View>
                <View style = {styles.SoruView}>
                    <Text style = {styles.SoruText}>
                        {soru[this.state.soru]}
                    </Text>
                </View>
                <View style = {{height : 1 , backgroundColor : 'black' , margin : 8}}></View>
                <View style = {styles.CevapView}>
                    <View style={this.state.tiklanan == 1 ? butonRengi : styles.cevapButton}>
                        <TouchableOpacity onPress = {() => this.Cevap(1)} style = {styles.touch}>
                            <Text style={{color : 'black',fontSize : 16}}>
                            {secenek[this.state.soru][0]}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.tiklanan == 2 ? butonRengi : styles.cevapButton}>
                        <TouchableOpacity onPress = {() => this.Cevap(2)} style = {styles.touch}>
                            <Text style={{color : 'black',fontSize : 16}}>
                            {secenek[this.state.soru][1]}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.tiklanan == 3 ? butonRengi : styles.cevapButton}>
                        <TouchableOpacity onPress = {() => this.Cevap(3)} style = {styles.touch}>
                            <Text style={{color : 'black',fontSize : 16}}>
                            {secenek[this.state.soru][2]}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.tiklanan == 4 ? butonRengi : styles.cevapButton}>
                        <TouchableOpacity onPress = {() => this.Cevap(4)} style = {styles.touch}>
                            <Text style={{color : 'black',fontSize : 16}}>
                            {secenek[this.state.soru][3]}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

}

const styles = {
    PuanView : {
        flex : 1,
        backgroundColor : 'black',
        margin : 8,
        borderWidth : 4  ,
        borderRadius : 8 ,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    PuanText : {
        flex : 1,
        fontSize : 16,
        color : 'white',
    },
    SoruView : {
        flex : 5,
        backgroundColor : 'pink',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 4  ,
        borderRadius : 8 ,
        margin : 8
    },
    SoruText : {
        fontSize : 16,
        color : 'black',
        padding : 8

    },
    CevapView :{
        flex : 10,
    },
    cevapButton : {
        flex : 1,
        margin : 8,
        borderWidth : 4,
        borderRadius : 8,
        backgroundColor : 'aqua'
    },
    cevapDogru : {
        flex : 1,
        margin : 8,
        borderWidth : 4,
        borderRadius : 8,
        backgroundColor : 'green',
    },
    cevapYanlis : {
        flex : 1,
        margin : 8,
        borderWidth : 4,
        borderRadius : 8,
        backgroundColor : 'red',
    },
    touch : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
};
