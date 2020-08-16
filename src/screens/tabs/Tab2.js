import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

class Tab2 extends Component{
    render(){
        return(
            <View>
                <Text>Tab2</Text>
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

export default Tab2;
