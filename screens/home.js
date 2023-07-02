import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';

export default class Home extends React.Component {
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
        <View>
          <Text style={styles.captionText}>Adapt To Your Needs</Text>
        </View>
        <TouchableOpacity
          style={styles.adhdButton}
          onPress={() => this.props.navigation.navigate('adhd')}>
          <Text style={styles.adhdTitle}>ADHD</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dyslexiaButton}
          onPress={() => this.props.navigation.navigate('dyslexia')}>
          <Text style={styles.dyslexiaTitle}>Dyslexia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dyscalculiaButton}
          onPress={() => this.props.navigation.navigate('dyscalculia')}>
          <Text style={styles.dyscalculiaTitle}>Dyscalculia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.avatarButton}
          onPress={() => this.props.navigation.navigate('avatar')}>
          <img
            source={require('../assets/avatar.png')}
            style={styles.avatarImage}></img>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  captionText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 75,
    marginTop: 10,
  },

  adhdButton: {
    flex: 0.24,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 45,
    borderRadius: 30,
    backgroundColor: '#EFCFD4',
  },

  adhdTitle: {
    fontSize: 30,
    color: 'white',
    marginTop: 35,
    paddingLeft: 75,
  },

  dyslexiaButton: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#FBEE95',
  },

  dyslexiaTitle: {
    fontSize: 30,
    color: 'white',
    marginTop: 35,
    paddingLeft: 60,
  },

  dyscalculiaButton: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#C3EEFA',
  },

  dyscalculiaTitle: {
    fontSize: 30,
    color: 'white',
    marginTop: 40,
    paddingLeft: 40,
  },

  avatarButton: {
    flex: 0.12,
    width: 50,
    height: 20,
    marginLeft: 270,
    top: 35,
    backgroundColor: 'white',
  },

  avatarImage: {
    height: 50,
    width: 50,
    right: -5,
    top: 40,
  },
});
