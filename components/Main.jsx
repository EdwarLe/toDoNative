import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { FlatList, Pressable, StatusBar, Text, TextInput, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Styles from "./Styles"
import RenderItems from "./RenderItems"


const Main = () => {
    const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [taskExist, setTaskExist] = useState(null)

  const inset = useSafeAreaInsets()

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('todo-task', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('todo-task');
      if (value !== null) {
        const tasksLocal = JSON.parse(value)
        setTasks(tasksLocal)
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTaskExist(null)
    }, 2000);
  }, [taskExist])

  const addTask = () => {
    const tmp = [...tasks]
    const index = tmp.findIndex(el => el.title === text)
    if (index !== -1) {
      setTaskExist(false)
      return
    }
    const newTask = {
      title: text,
      isDone: false,
      date: new Date()
    }
    tmp.push(newTask)
    setTasks(tmp)
    storeData(tmp)
    setTaskExist(true)
    setText('')
  }

  const markDone = (task) => {
    const tmp = [...tasks]
    const index = tmp.findIndex(el => el.title === task.title)
    const toDo = tmp[index]
    toDo.isDone = !toDo.isDone
    setTasks(tmp)
    storeData(tmp)
  }
  const deleteFunction = (task) => {
    const tmp = [...tasks]
    const index = tmp.findIndex(el => el.title === task.title)
    tmp.splice(index, 1)
    setTasks(tmp)
    storeData(tmp)
    }
    return (
        <View style={[Styles.container, { paddingBottom: inset.bottom, paddingTop: inset.top }]}>
            <StatusBar style="auto" />
            <Text style={Styles.title} >TO DO LIST</Text>
            <View style={Styles.containerInput} >
                <TextInput value={text} onChangeText={(t) => setText(t)} style={Styles.textInput} placeholder='Ingresa una tarea' />
                <Pressable onPress={addTask} style={({ pressed }) => [
                    pressed ? Styles.btnAdd : Styles.btnAddPressed
                ]} >
                    <Text style={Styles.textWhite} >Agregar</Text>
                </Pressable>
            </View>
            {taskExist === null
            ? <Text style={Styles.textAlert} ></Text>
            : taskExist
                ? <Text style={Styles.textAlertSuccess} >Tarea agregada exitosamente!</Text>
                : <Text style={Styles.textAlertError} >Esta tarea ya existe!</Text>
            }
            <FlatList renderItem={({ item }) => <RenderItems item={item} markDone={markDone} deleteFunction={deleteFunction} />} data={tasks} style={Styles.containerList} />
        </View>
    )
}

export default Main