import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Screen2({ navigation }) {
  const [fruits, setFruits] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: "28.00",
      image: require("../assets/images/Data/apple.png"),
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("../assets/images/Data/pearl.png"),
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("../assets/images/Data/coconut.png"),
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Orange",
      price: "28.00",
      image: require("../assets/images/Data/orange.png"),
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Breach",
      price: "28.00",
      image: require("../assets/images/Data/beach.png"),
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Avocano",
      price: "28.00",
      image: require("../assets/images/Data/avocano.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputSearch} placeholder="Search"></TextInput>

      <View style={styles.containerNav}>
        <Button title="Vegetable" color={"green"}></Button>
        <Button title="Seafood"></Button>
        <Button title="Drinks"></Button>
      </View>

      <View style={styles.headlineSearch}>
        <Text style={styles.textHeadLine}>Order Your favorite</Text>
        <Text style={styles.textSize}>See All</Text>
      </View>

      {/* List Item */}
      <View>
        <FlatList
          data={fruits}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Screen3");
              }}
            >
              <View style={styles.containerListItem}>
                <Image source={item.image} style={styles.imgSize}></Image>
                <Text style={styles.textItem}>{item.name}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.key}
          numColumns={2}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 500,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },

  headlineSearch: {
    marginTop: 30,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputSearch: {
    marginTop: 20,
    width: 350,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
  },
  containerNav: {
    marginTop: 30,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerList: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textHeadLine: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },

  textSize: {
    fontSize: 25,
    color: "orange",
  },

  containerListItem: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    height: 140,
    backgroundColor: "#f3f4f6",
  },

  imgSize: {
    width: 130,
    height: 100,
  },

  imgMargin: {
    marginTop: 20,
    marginLeft: 30,
  },

  textItem: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
