import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';

export default class Dyslexia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Header
        backgroundColor={'#CCB7E5'}
            centerComponent={{
              text: 'Learn Ease',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
      />
      </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
});
