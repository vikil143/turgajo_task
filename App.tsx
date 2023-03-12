import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import RootNavigator from '@myapp/routes/RootNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={[styles.container]}>
      <SafeAreaView style={[styles.container]}>
        <RootNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
