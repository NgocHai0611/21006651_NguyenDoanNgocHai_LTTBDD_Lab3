import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headlineTitle}>Order your favorite</Text>

      <Image
        source={require("../assets/images/Data/HomeCooktail.png")}
        style={styles.marginFirstImg}
      ></Image>

      <Image
        source={require("../assets/images/Data/SeeFoodPage1.png")}
        style={styles.marginSencImg}
      ></Image>

      <Image
        source={require("../assets/images/Data/VegtablesPage1.png")}
        style={styles.marginThirdImg}
      ></Image>

      <Button
        title="Get Started"
        color={"green"}
        onPress={() => navigation.navigate("Screen2")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 610,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headlineTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
  },

  marginFirstImg: {
    marginLeft: 150,
  },
  marginSencImg: {
    marginLeft: -200,
  },
  marginThirdImg: {
    marginLeft: 150,
  },
});
