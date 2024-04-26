import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#EEEEE0',
    width: '91%',
    alignItems:'center',
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
  botao:{
    margin:13,
    padding:4,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffff22',
    width:100,
    borderWidth:4,
    borderRadius:27,
    borderColor:'black',
  },
  form:{
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    marginBottom:13,
    backgroundColor:'#E0E0E0',
    width:300,
    borderWidth:4,
    borderRadius:27,
    borderColor:'black',
  },
  texto:{
    fontSize:22,
    fontWeight:'bold',
  },
});