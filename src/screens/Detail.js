import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";

import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';

Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const index = useNavigationState(state => state.index);
    console.log("Screen index" + index);
    useFocusEffect(
        React.useCallback(() => {
            fetch('https://restcountries.eu/rest/v2/callingcode/372')
                .then(response => {
                    response.json().then((data) => {
                        //console.log(data);
                    })
                })
            return () => console.log("lost focus");
        })
    );
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>{route.params.nameScreen}</Text>
            <Button
                title="Go to Top Tabs"
                onPress={() => navigation.navigate("TopTabs", { name: "from Detail to TopTab" })} />
            <Button
                title="Go to Bottom Tabs"
                onPress={() => navigation.navigate("BottomTabs")} />
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

export default Detail;
