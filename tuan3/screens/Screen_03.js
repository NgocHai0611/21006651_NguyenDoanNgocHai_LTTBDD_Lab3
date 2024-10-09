import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useMemo } from "react";

export default function App({}) {
  const [data, setData] = useState([
    {
      key: 1,
      type: "Vegetable",
      name: "Apple",
      price: 28.0,
      image: require("../assets/Data/Image_101.png"),
      qty: 0,
    },
    {
      key: 2,
      type: "Vegetable",
      name: "Pear",
      price: 28.0,
      image: require("../assets/Data/Image102.png"),
      qty: 0,
    },
    {
      key: 3,
      type: "Vegetable",
      name: "Coconut",
      price: 28.0,
      qty: 0,
    },
    {
      key: 4,
      type: "Vegetable",
      name: "Pear",
      price: 28.0,
      image: require("../assets/Data/Image105.png"),
      qty: 0,
    },
    {
      key: 5,
      type: "Vegetable",
      name: "Coconut",
      price: 28.0,
      image: require("../assets/Data/Image106.png"),
      qty: 0,
    },
    {
      key: 6,
      type: "Vegetable",
      name: "Coconut",
      price: 28.0,
      image: require("../assets/Data/Image107.png"),
      qty: 0,
    },
    {
      key: 7,
      type: "Vegetable",
      name: "Pear",
      price: 28.0,
      image: require("../assets/Data/Image105.png"),
      qty: 0,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const inCreaseQty = (idItem) => {
    setData(
      data.map((fruit) =>
        fruit.key === idItem ? { ...fruit, qty: fruit.qty + 1 } : fruit
      )
    );
  };

  const deCreaseQty = (idItem) => {
    setData(
      data.map((fruit) =>
        fruit.key === idItem && fruit.qty > 0
          ? { ...fruit, qty: fruit.qty - 1 }
          : fruit
      )
    );
  };

  const total = useMemo(() => {
    return data.reduce((lastValue, curentItem) => {
      return lastValue + curentItem.price * curentItem.qty;
    }, 0);
  }, [data]);

  const [type, setType] = useState("Vegetable");
  const [selectedBtn, setSelectedBtn] = useState("Vegetable");

  return (
    <ScrollView stickyHeaderIndices={[0, -1]}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Image
            source={require("../assets/Data/Image183.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          height: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 25, color: "green", fontWeight: "bold" }}>
          My Basket
        </Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                marginHorizontal: "2.5%",
                padding: 15,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 70, height: 70, marginRight: 10 }}
                resizeMode="contain"
              />
              <View>
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "green" }}
                >
                  ${item.price}
                </Text>
                <Text style={{ fontSize: 18, color: "silver" }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/Data/Image180.png")}
                    style={{ width: 15, height: 15, marginTop: 10 }}
                  />
                  <Image
                    source={require("../assets/Data/Image180.png")}
                    style={{ width: 15, height: 15, marginTop: 10 }}
                  />
                  <Image
                    source={require("../assets/Data/Image180.png")}
                    style={{ width: 15, height: 15, marginTop: 10 }}
                  />
                  <Image
                    source={require("../assets/Data/Image180.png")}
                    style={{ width: 15, height: 15, marginTop: 10 }}
                  />
                  <Image
                    source={require("../assets/Data/Image180.png")}
                    style={{ width: 15, height: 15, marginTop: 10 }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginLeft: 140,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Pressable onPress={() => deCreaseQty(item.key)}>
                  <Image
                    source={require("../assets/Data/Image176.png")}
                    style={{ width: 15, height: 15, marginRight: 10 }}
                  />
                </Pressable>

                <Text style={{ fontSize: 15 }}>{item.qty}</Text>

                <Pressable onPress={() => inCreaseQty(item.key)}>
                  <Image
                    source={require("../assets/Data/Image175.png")}
                    style={{ width: 15, height: 15, marginRight: 10 }}
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>

      <View style={{ justifyContent: "center", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 30 }}>Total</Text>
          <Text style={{ fontSize: 30 }}>$ {total}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 90,
            marginVertical: 20,
          }}
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
