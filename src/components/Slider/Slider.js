import React from "react";
import {Dimensions, FlatList, Image, ScrollView, StyleSheet} from "react-native";
import news_banner_data from "../../../news_banner_data.json";
import news_data from "../../../news_data.json";
import NewsCard from "../NewsCard";


const Slider = () => {
    const renderNews = ({item}) => <NewsCard news={item}/>;
    return(
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
    );
}

export default Slider;

const styles = StyleSheet.create({
    bannerImage: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2
    }
});