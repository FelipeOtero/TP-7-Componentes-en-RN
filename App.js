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
          <Text style={styles.titulo}>Desarrollador Frontend</Text>

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
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    backgroundColor: '#dfe6f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: 300,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#cf8a2f',
    marginBottom: 12,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e3f',
  },
  titulo: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 16,
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
  },
  btnPortfolio: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  btnPortfolioText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 16,
    color: '#333',
  },
  btnContactar: {
    backgroundColor: '#6a74c9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnContactarText: {
    color: '#fff',
    fontWeight: 'bold',
  }, 
  iconoImg: {
    width: 24,
    height: 24,
    marginHorizontal: 6,
  },
  
});