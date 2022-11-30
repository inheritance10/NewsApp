import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const heightStyle = windowHeight * 1/4;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin: 8,
        padding: 8,
        borderRadius: 5
    },
    inner_container:{
        padding: 8
    },
    title:{
        marginTop: 8,
        marginBottom:8,
        fontWeight: "bold",
        fontSize: 18
    },
    image:{
        height: heightStyle,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    description:{
        letterSpacing: 0.5,
        lineHeight: 18
    },
    button:{
        backgroundColor: '#80ced6',
        borderRadius: 10,
        alignItems: "center",
        marginTop: 12
    },
    button_text:{
        padding:8,
        fontWeight: "bold"
    },
    author:{
        alignItems:"flex-end",
        marginTop:10
    },
    author_text:{
        fontWeight:"bold"
    }

});

export default styles;