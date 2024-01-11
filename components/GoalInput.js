import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({ isVisible, closeModal, addGoal }) {
  const [goalText, setGoalText] = useState("");

  function submitGoal() {
    addGoal(goalText);
    closeModal();
    setGoalText("");
  }

  return (
    <View style={{ backgroundColor: "#690060" }}>
      <Modal animationType="slide" visible={isVisible}>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.image}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter a goal"
            value={goalText}
            onChangeText={setGoalText}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ ...styles.buttonStretcher, marginLeft: 8 }}>
              <Button
                title="Submit"
                color="#7a00d1"
                onPress={submitGoal}
                disabled={!goalText}
              />
            </View>
            <View style={styles.buttonDivider}></View>
            <View style={{ ...styles.buttonStretcher, marginRight: 8 }}>
              <Button title="Cancel" color="#7a00d1" onPress={closeModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#690060",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#ad69c2",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#a8a8a8",
    padding: 8,
    margin: 8,
    borderRadius: 6,
    color: "white",
  },
  buttonStretcher: {
    flex: 1,
    alignItems: "stretch",
  },
  buttonDivider: {
    width: 8,
  },
});
