import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    width: '88%',
    justifyContent:'center',
    flex:1,
    borderWidth:7,
  },
  
  imagem:{
    resizeMode:'contain',
    height:210,
    alignItems:'center',
    justifyContent:'center',
  },

  texto:{
    fontSize:22,
    fontWeight:'bold',
  },
});