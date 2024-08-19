import { Pressable, Text, View } from 'react-native'

const RenderItems = ({item, markDone, deleteFunction}) => {
    return  (
    <View style={styles.containerTask} >
        <Pressable onPress={markDone}>
            <Text style={item.isDone ? styles.textPressed : null} >{item.title}</Text>
            <Text>{item.date.toLocaleDateString()}</Text>
        </Pressable>
        {item.isDone &&
        <Pressable style={styles.btnDelete} onPress={deleteFunction}>
            <Text style={styles.textWhite} >Eliminar</Text>
        </Pressable>
        }
    </View>
    )
}

export default RenderItems