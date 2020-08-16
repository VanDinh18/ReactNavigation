import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

class Screen3 extends Component{
    render(){
        return(
            <View>
                <Text>Screen3</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 30,
    },
});

export default Screen3;
