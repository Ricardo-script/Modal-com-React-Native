// Arquivo App.js:
//component Entrar recebeu uma props chamada 'fechar' dentro de onPress em ./src/Entrar
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({modalVisible:true});  
    }

    sair(paramFalse){
        this.setState({modalVisible:paramFalse});
    }

    render(){
        return(
            <View style={styles.container}>
                <Button title="Entrar" onPress={this.entrar}/>

                <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
                   <Entrar fechar={() => this.sair(false)}/>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DDD',
    },
});

//----------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//

//Arquivo Entrar.js

import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';

export default class Entrar extends Component{

    render(){
        return(
           
            <View style={{backgroundColor:'#292929', width:'100%', height:500}}>	
                <Text style={{color: '#FFF', fontSize:28}}>Seja bem vindo</Text>
                <Button title="Sair" onPress={ this.props.fechar }/>
            </View>

        );
    }
}

// ao exportar o component Entrar precisa-se enviar as props = this.props.fechar, para
// receber no import no component App.
