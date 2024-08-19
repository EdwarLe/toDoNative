import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, FlatList } from 'react-native';
import RenderItems from './components/RenderItems';
import Styles from './components/Styles';

export default function App() {

  const markDone = () => {
    console.log('Hecho')
  }
  const deleteFunction = () => {
    console.log('borrado')
  }


  const tasks = [
    {
      title: 'Hacer la cama',
      isDone: true,
      date: new Date()
    },
    {
      title: 'Hacer el desayuno',
      isDone: false,
      date: new Date()
    }
  ]
  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
      <Text style={Styles.title} >TO DO LIST</Text>
      <View style={Styles.containerInput} >
        <TextInput style={Styles.textInput} placeholder='Ingresa una tarea' />
        <Pressable style={({ pressed }) => [
          pressed ? Styles.btnAdd : Styles.btnAddPressed
        ]} >
          <Text style={Styles.textWhite} >Agregar</Text>
        </Pressable>
      </View>
      <FlatList renderItem={({ item }) => <RenderItems item={item} markDone={markDone} deleteFunction={deleteFunction} />} data={tasks} style={Styles.containerList} />
    </View>
  );
}


