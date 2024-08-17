import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const ScrollCardMenu = ({text, source, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.bloco1, style]} onPress={onPress}>
      <Image source={source} style={styles.image} />
      <Text style={styles.texto}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bloco1: {
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
  },
  texto: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 10,
  },
});
