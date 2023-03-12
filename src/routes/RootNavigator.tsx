import { StyleSheet, } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import AllScreens from './AllScreens';



export default function RootNavigator() {
    return (
        <NavigationContainer>
            <AllScreens />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})