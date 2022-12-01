
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import NewsCard from "./src/components/NewsCard";
import Slider from "./src/components/Slider";

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.appTitle}>News App</Text>
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle:{
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
    marginTop: 22,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  }
});
