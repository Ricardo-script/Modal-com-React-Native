// Arquivo App.js:
//component Entrar recebeu uma props chamada 'fechar' dentro de onPress em ./src/Entrar

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default function App(){
  
    const [modalVisible, setModalVisible] = useState(false);

    function entrar(){
        setModalVisible(true);
    }

    function sair(paramFalse){
        setModalVisible(paramFalse);
    }

    return(
        <View style={styles.container}>
            <Button title="Entrar" onPress={entrar}/>

            <Modal transparent={true} animationType="slide" visible={modalVisible}>
                <View style={{margin: 15, flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Entrar fechar={() => sair(false)}/>
                </View>
            </Modal>

        </View>
    );
    
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

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Entrar(props){

    return(
        
        <View style={{backgroundColor:'#292929', 
            width:'100%', height:350, borderRadius:15}}
        >
            <Text style={{paddingTop: 15, color: '#FFF', fontSize:28, textAlign:'center'}}>
                Seja bem vindo
            </Text>
            <Button title="Sair" onPress={props.fechar}/>
        </View>

    );
}


// ao exportar o component Entrar precisa-se enviar as props na function = Entrar(props) e no button = props.fechar, para
// receber no import no component App.