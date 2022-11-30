import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View , FlatList} from 'react-native';
import news_data from './news_data.json';

import NewsCard from "./src/components/NewsCard";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appTitle}>News App</Text>
        <FlatList data={news_data} renderItem={({item}) => <NewsCard news={item}/>}

        />
      </View>
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
  },
});
