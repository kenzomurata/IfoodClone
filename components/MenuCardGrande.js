import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const MenuCardGrande = ({text, source, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.bloco1, style]} onPress={onPress}>
      <View style={styles.cardGrandeTexto}>
        <Text style={styles.texto}>{text}</Text>
      </View>
      <View style={styles.cardGrandeImagem}>
        <Image source={source} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bloco1: {
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 9,
    justifyContent: 'space-between',
    paddingBottom: 8,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 3,
    paddingVertical: 10,
  },
  texto: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 10,
  },
  cardGrandeTexto: {},
  cardGrandeImagem: {
    justifyContent: 'center',
  },
});
