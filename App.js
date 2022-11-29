import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import news_data from './news_data.json';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>News App</Text>

        <FlatList data={news_data} renderItem={({item}) => <Text>{item.title}</Text>}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 35
  },
});
