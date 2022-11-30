import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import styles from "./NewsCard.style";

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <View style={styles.author}>
                    <Text style={styles.author_text}>{news.author}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>Read More</Text>
            </TouchableOpacity>
        </View>
    );
}


export default NewsCard;