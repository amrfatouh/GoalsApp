import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalsData, setGoalsData] = useState([]);

  function addGoal(goal) {
    setGoalsData([...goalsData, { id: Date.now(), text: goal }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput
        isVisible={modalVisible}
        addGoal={(goal) => addGoal(goal)}
        closeModal={() => setModalVisible(false)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Goal"
          color="#7a00d1"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={goalsData}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              deleteGoal={() =>
                setGoalsData(
                  goalsData.filter(
                    (goalData) => goalData.id !== itemData.item.id
                  )
                )
              }
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "strech",
    justifyContent: "center",
    width: "80%",
  },
  listContainer: {
    flex: 6,
    alignItems: "center",
  },
});
