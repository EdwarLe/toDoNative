import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title} >TO DO LIST</Text>
      <View style={styles.containerInput} >
        <TextInput style={styles.textInput} placeholder='Ingresa una tarea' />
        <Pressable style={styles.btnAdd} >
          <Text style={styles.textWhite} >Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerInput: {
    // backgroundColor: 'green',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '70%',
    borderRadius: 50
  },
  btnAdd: {
    backgroundColor: '#5897fb',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50
  },
  textWhite: {
    color: 'white'
  }

});
