import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, View, TextInput, Dimensions, FlatList, Text, TouchableOpacity
} from 'react-native';

import { MyButton, MyInput } from './components'

const App = () => {

  const [list, setList] = useState([])
  const [subject, setSubject] = useState({ isDone: false, entry: "" })

  const changeText = (text) => {
    subject.isDone = false;
    subject.entry = text;
    setSubject(subject)
  }


  const addToList = () => {
    let newToDo = [...list];
    newToDo.push({ myEntry: subject.entry, myTodo: subject.isDone })
    setList(newToDo)
  }

  const onSelectChangeStatus = (index) => {
    let newList = [...list];
    newList[index].myTodo = !newList[index].myTodo;
    setList(newList)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainViewStyle}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={({ item, index }) =>

            <View style={styles.touchableViewStyle}>
              <TouchableOpacity onPress={() => onSelectChangeStatus(index)} style={styles.container}>
                <View style={styles.dot} />
                <Text style={styles.text}>
                  {item.myEntry}
                </Text>
                {
                  item.myTodo === true ?
                    <Text style={{ color: "green" }}>Yapıldı</Text>
                    :

                    <Text style={{ color: "red" }}>Yapılmadı</Text>
                }

              </TouchableOpacity>
            </View>
          }

        />
      </View>

      <View style={styles.bottomViewStyle}>
        <MyInput myPlace="Yeni görevinizi buraya giriniz.." textChange={changeText} />
        <MyButton myTitle="Ekle" myPress={addToList} />
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 3,
    backgroundColor: "#ffad42"
  },

  inputView: {
    backgroundColor: '#e4e65e',
    padding: 1,
    margin: 15,
    borderRadius: 15,
    alignSelf: "center",
    width: Dimensions.get("window").width / 1.2
  },

  textInputContainer: {
    marginLeft: 15
  },

  bottomViewStyle: {
    flex: 1,
    alignContent: "flex-end",
    backgroundColor: "#ffad42"
  },

  touchableViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  container: {
    backgroundColor: '#fffdd0',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get("window").width / 1.1
  },
  text: {
    fontSize: 20,
    marginLeft: 10,

  },

  dot: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 10
  },


})


export { App };
