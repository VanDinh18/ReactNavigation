import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

Feed = () => {
    const navigation = useNavigation();
    const route = useRoute();
    let detailResult = route.params;
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Navigation Drawer</Text>
            <Button
                title="Go to detail"
                onPress={() => navigation.navigate("Detail", { nameScreen: "from Feed to Detail" })} />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Feed;
