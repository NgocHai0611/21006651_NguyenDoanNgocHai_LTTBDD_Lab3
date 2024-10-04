import { useMemo, useState } from "react";
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
  ScrollView,
} from "react-native";

export function Screen3({ navigation }) {
  const [fruits, setFruits] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: 8.0,
      image: require("../assets/images/Data/apple.png"),
      qty: 0,
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Pear",
      price: 28.0,
      image: require("../assets/images/Data/pearl.png"),
      qty: 0,
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Coconut",
      price: 18.0,
      image: require("../assets/images/Data/coconut.png"),
      qty: 0,
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Orange",
      price: 38.0,
      image: require("../assets/images/Data/orange.png"),
      qty: 0,
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Breach",
      price: 38.0,
      image: require("../assets/images/Data/beach.png"),
      qty: 0,
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Avocano",
      price: "58.00",
      image: require("../assets/images/Data/avocano.png"),
      qty: 0,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const inCreaseQty = (idItem) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.key === idItem ? { ...fruit, qty: fruit.qty + 1 } : fruit
      )
    );
  };

  const deCreaseQty = (idItem) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.key === idItem && fruit.qty > 0
          ? { ...fruit, qty: fruit.qty - 1 }
          : fruit
      )
    );
  };

  const total = useMemo(() => {
    return fruits.reduce((lastValue, curentItem) => {
      return lastValue + curentItem.price * curentItem.qty;
    }, 0);
  }, [fruits]); // Mỗi khi fruits thay đổi, tổng tiền sẽ được tính lại

  return (
    <ScrollView>
      <View>
        <Text style={styles.headLineCart}>My Basket</Text>

        <FlatList
          data={fruits}
          renderItem={({ item }) => (
            <ScrollView>
              <View style={styles.item}>
                <Image source={item.image}></Image>
                <View>
                  <Text>${item.price}</Text>
                  <Text>{item.name}</Text>

                  {/* Img Start */}
                  <View style={styles.iconStart}>
                    <Image
                      source={require("../assets/images/Data/iconStart.png")}
                    ></Image>
                    <Image
                      source={require("../assets/images/Data/iconStart.png")}
                    ></Image>
                    <Image
                      source={require("../assets/images/Data/iconStart.png")}
                    ></Image>
                    <Image
                      source={require("../assets/images/Data/iconStart.png")}
                    ></Image>
                    <Image
                      source={require("../assets/images/Data/iconStart.png")}
                    ></Image>
                  </View>
                </View>

                <View style={styles.containerQty}>
                  <Pressable onPress={() => deCreaseQty(item.key)}>
                    <Image
                      source={require("../assets/images/Data/iconMinus.png")}
                    ></Image>
                  </Pressable>

                  <Text>{item.qty}</Text>

                  <Pressable onPress={() => inCreaseQty(item.key)}>
                    <Image
                      source={require("../assets/images/Data/iconPlush.png")}
                    ></Image>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          )}
        ></FlatList>

        <View>
          <Text>Total</Text>
          <Text>${total}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headLineCart: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },

  item: {
    marginTop: 10,
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffff",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "black",
  },

  iconStart: {
    flexDirection: "row",
  },

  containerQty: {
    width: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerProduct: {
    flexDirection: "row",
  },
});
