import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');

  const handleContactar = () => {
    Alert.alert('Mensaje enviado', mensaje);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4b4b88" />

      <View style={styles.background}>
        <View style={styles.card}>
          <Image
            source={require('./assets/avatar.png')} 
            style={styles.avatar}
          />

          <Text style={styles.nombre}>Goku</Text>
          <Text style={styles.titulo}>Personaje de Dragon Ball</Text>

          <View style={styles.iconos}>
        <Image source={require('./assets/github.png')} style={styles.iconoImg} />
        <Image source={require('./assets/linkedin.png')} style={styles.iconoImg} />
        <Image source={require('./assets/mail.png')} style={styles.iconoImg} />
        <Image source={require('./assets/phone.png')} style={styles.iconoImg} />
        </View>

          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              styles.btnPortfolio,
              { backgroundColor: pressed ? '#2f2f50' : '#1e1e3f' },
            ]}
          >
            <Text style={styles.btnPortfolioText}>Ver Portfolio</Text>
          </Pressable>

          <TextInput
            placeholder="Escribe un mensaje..."
            style={styles.input}
            placeholderTextColor="#999"
            onChangeText={setMensaje}
            value={mensaje}
          />

          <TouchableOpacity style={styles.btnContactar} onPress={handleContactar}>
            <Text style={styles.btnContactarText}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5', 
  },
  background: {
    flex: 1,
    backgroundColor: '#E6E6FA', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: 300,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FF8000', 
    marginBottom: 1,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A635D', 
  },
  titulo: {
    color: '#black', 
    marginBottom: 14,
  },
  iconos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  icono: {
    fontSize: 24,
    marginHorizontal: 5,
    color: '#444444', 
  },
  btnPortfolio: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#black', 
    marginBottom: 16,
  },
  btnPortfolioText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },
  btnContactar: {
    backgroundColor: '#A7C7E7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnContactarText: {
    color: '#2F3E46', 
    fontWeight: 'bold',
  },
  iconoImg: {
    width: 24,
    height: 24,
    marginHorizontal: 6,
  },
});

