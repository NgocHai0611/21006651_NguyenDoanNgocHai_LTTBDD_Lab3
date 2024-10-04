import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "@/screen/screen1";
import Screen2 from "@/screen/screen2";
import { Screen3 } from "@/screen/screen3";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Stack = createStackNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={({ navigation }) => ({
          headerTitle: "", // Ẩn tên màn hình
          headerStyle: {
            backgroundColor: "#f3f4f6", // Tùy chỉnh màu nền cho header
          },
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Screen3")}>
              <Image
                style={styles.marginImg}
                source={require("../../assets/images/Data/iconCart.png")}
              />
            </Pressable>
          ),
        })}
      />

      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerTitle: "", // Ẩn tên màn hình
          headerStyle: {
            backgroundColor: "#f3f4f6", // Tùy chỉnh màu nền cho header
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  marginImg: {
    marginRight: 20,
  },
});
