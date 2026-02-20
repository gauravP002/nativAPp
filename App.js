import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCOntainer}>
      <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View>
      <Text style={{margin : 10, borderWidth: 2, borderBlockColor: 'red', padding: 16}}>now we separate the app</Text>
      <Button  title="tap me"/>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstCOntainer:{
    margin:20,
    backgroundColor: '#ccbcbc',
  }
});
