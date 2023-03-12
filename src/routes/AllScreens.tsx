import { Platform, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { AllScreenParams, KeysOfAllScreenParams } from './types';
import { ParamListBase } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { EXAMPLES } from './data';

const Stack = createStackNavigator<AllScreenParams>();


const isHeaderShow = (screenName: KeysOfAllScreenParams) => {
    switch (screenName) {
        default: {
            return true
        }
    }
}


const AllScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{ title: '✌️ Test D3 examples' }}
                component={MainScreen}
            />
            {EXAMPLES.flatMap(({ data }) => data).flatMap(({ name, component }) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    getComponent={() => component}
                    options={{ title: name, headerShown: isHeaderShow(name) }}
                />
            ))}
        </Stack.Navigator>
    );
};


interface MainScreenItemProps {
    name: string
    onPressItem: (name: string) => void
}

function MainScreenItem({ name, onPressItem }: MainScreenItemProps) {
    return (
        <RectButton style={[styles.button]} onPress={() => onPressItem(name)}>
            <Text style={[styles.blackColor]}>{name}</Text>
        </RectButton>
    );
}

function MainScreen({ navigation }: StackScreenProps<ParamListBase>) {
    return (
        <SectionList
            style={styles.list}
            sections={EXAMPLES}
            keyExtractor={example => example.name}
            renderItem={({ item }) => (
                <MainScreenItem
                    name={item.name}
                    onPressItem={name => navigation.navigate(name)}
                />
            )}
            renderSectionHeader={({ section: { sectionTitle } }) => (
                <Text style={[styles.sectionTitle, styles.blackColor]}>{sectionTitle}</Text>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}

        />
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    sectionTitle: {
        ...Platform.select({
            ios: {
                fontSize: 17,
                fontWeight: '500',
            },
            android: {
                fontSize: 19,
                fontFamily: 'sans-serif-medium',
            },
        }),
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#efefef',
    },
    list: {},
    separator: {
        height: 2,
    },
    button: {
        flex: 1,
        height: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    blackColor: {
        color: "black"
    }
})

export default AllScreens
