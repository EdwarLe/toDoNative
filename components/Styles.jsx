import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
        paddingHorizontal: 20,
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
        backgroundColor: '#77e10d',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    btnAddPressed: {
        backgroundColor: '#2fcf08',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    textWhite: {
        color: 'white',
        fontWeight: 'bold'
    },
    containerList: {
      // backgroundColor: 'blue',
      // // justifyContent: 'center',
      // gap: 25,
      // padding: 30
    },
    btnDelete: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 40,
    },
    containerTask: {
      // backgroundColor: 'green',
        borderBottomWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    textPressed: {
        textDecorationLine: 'line-through'
    }
    });