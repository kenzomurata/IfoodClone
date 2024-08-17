import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

import {MenuCard} from './components/MenuCard';

import {MenuCardGrande} from './components/MenuCardGrande';

import {ScrollCardMenu} from './components/ScrollCardMenu';

export default function App() {
  function handlePress() {
    Alert.alert('Pressionou');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCardGrande}>
        <MenuCardGrande
          style={styles.menuCardDetail}
          text="Restaurante"
          source={require('./assets/cupons.png')}
        />
        <MenuCardGrande
          style={styles.menuCardDetail}
          text="Mercado"
          source={require('./assets/farmacia.png')}
        />
      </View>
      <View style={styles.containerTopMenu}>
        <MenuCard
          style={styles.menuCard}
          text="Farmácia"
          source={require('./assets/farmacia.png')}
          onPress={handlePress}
        />
        <MenuCard
          style={styles.menuCard}
          text="Bebidas"
          source={require('./assets/bebidas.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Cupons"
          source={require('./assets/cupons.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
      </View>
      <ScrollView style={styles.scrollMenu} horizontal>
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
        <MenuCard
          style={styles.menuCard}
          text="Ver mais"
          source={require('./assets/mais.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    //padding: 8,
    //margin: 10
  },
  containerTopMenu: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
  },
  containerCardGrande: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
  },
  menuCardDetail: {
    flex: 1,
    marginHorizontal: 5,
  },
  menuCard: {
    flex: 1,
    marginHorizontal: 5,
  },
  scrollMenu: {},
});
