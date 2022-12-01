import { StatusBar } from 'expo-status-bar';

import {StyleSheet, Text, View, FlatList, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from "./src/components/NewsCard";



export default function App() {

  const renderNews = ({item}) => <NewsCard news={item}/>;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appTitle}>News App</Text>

        <FlatList
            ListHeaderComponent=
                {() =>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {news_banner_data.map(bannerData => <Image style={styles.bannerImage} source={{uri: bannerData.imageUrl}}/>)}
                    </ScrollView>
                }
            keyExtractor={(item, index) => item.u_id.toString()}
            data={news_data}
            renderItem={renderNews}

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
  bannerImage: {
     height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2
  }
});
