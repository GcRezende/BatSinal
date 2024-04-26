import React from 'react';
import { View, Text, Image} from 'react-native';

import { styles } from './styles';

import batLogo from '../assets/bat-logo.png'

export function BatPedido() {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.imagem}
            source={batLogo}
        />
        <Text style={styles.texto}>teste</Text>
    </View>
  );
}