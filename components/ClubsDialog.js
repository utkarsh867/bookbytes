import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Form } from "native-base";
import { TextInput, Button } from "react-native-paper";

class ClubsDialog extends Component {
  render() {
    return (
      <Form style={styles.form}>
        <TextInput
          theme={{
            colors: {
              primary: "#000"
            }
          }}
          label={"New Title"}
          onChangeText={this.props.title}
          placeholder={"Type the Title here"}
          mode="outlined"
          style={{ marginBottom: 20 }}
        />
        <TextInput
          theme={{
            colors: {
              primary: "#000"
            }
          }}
          label={"New Description"}
          onChangeText={this.props.desc}
          placeholder={"Type the Description here"}
          mode="outlined"
          style={{ height: 100, marginBottom: 15 }}
        />
        <Button
          theme={{
            colors: {
              primary: "#FFFFFF"
            }
          }}
          mode="contained"
          onPress={this.props.createClub}
          compact={true}
          contentStyle={styles.buttonInner}
          style={styles.button}
        >
          {"Create Club"}
        </Button>
        <Button
          theme={{
            colors: {
              primary: "#FFFFFF"
            }
          }}
          mode="contained"
          onPress={this.props.requestClose}
          compact={true}
          contentStyle={styles.buttonInner}
          style={styles.button}
        >
          {"Close"}
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 10
  },
  button: {
    marginTop: 10
  },
  buttonInner: {
    height: 50
  }
});

export default ClubsDialog;
