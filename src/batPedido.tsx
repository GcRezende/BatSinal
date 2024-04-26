import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native';

import { styles } from './styles';

import batLogo from '../assets/bat-logo.png'
import { chamada} from '../src/actions/pedido'

export function BatPedido() {
  const [estado, setEstado] = useState(false)
  return (
    <View style={styles.container}>
        
        <TouchableOpacity onPress={()=> setEstado(chamada(estado))}>
          <Image 
          
            style={[styles.imagem, {display: estado ? "none":"flex"}]}
            source={batLogo}
          />
        </TouchableOpacity>
        <View style={[ {display: estado ? "flex":"none"},styles.form]}>
            <Text style={styles.texto}>Endereço</Text>
            <TextInput style={[styles.input]}></TextInput>
            <Text style={styles.texto}>Número</Text>
            <TextInput style={[styles.input]}></TextInput>
            <Text style={[styles.texto]}>Referência</Text>
            <TextInput style={[styles.input]}></TextInput>
            
        <TouchableOpacity
            onPress={()=> setEstado(chamada(estado))}
            style={styles.botao}>
            
              <Text 
            
              >ENVIAR
              </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}