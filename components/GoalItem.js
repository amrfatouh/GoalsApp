import { Pressable, View } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function GoalItem({ text, deleteGoal, id }) {
  return (
    <View key={id} style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ca1124", foreground: true }}
        onPress={deleteGoal}
      >
        <Text style={styles.goal}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 8,
  },
  goal: {
    backgroundColor: "#e6ea1e",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});
