import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Página Inicial</Text>
        <Text style={styles.subtitle}>Pré-requisito para a disciplina de DDM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f2f3ebff",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    // display: "flex",
    fontSize: 32,
    fontWeight: "bold",
    color: "#9b9728ff",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
    border: 5,
    // marginLeft: 15,
    // paddingLeft: 15,
    justifyContent: "center",
    // textAlign: "center",
    alignItems: "center",
    // alignContent:"center"
    height: 200,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
