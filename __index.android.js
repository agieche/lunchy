/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  Image
} = React;

var Lunchy = React.createClass({
  getInitialState : function() {
      return {
          lunchPlaces : [],
          text : ''
      }
  },

  addLunchPlace : function(e) {
      let propObject = {
          lunchPlaces : this.state.lunchPlaces,
          text : this.state.text
      };

      propObject['lunchPlaces'].push(this.state.text);
      propObject['text'] = '';

      ToastAndroid.show(this.state.text + ' ist jetzt in der Lostrommel!', ToastAndroid.SHORT);

      this.setState(propObject);
  },

  _onPressButton : function() {
      ToastAndroid.show('Heute geht es zu ' + this.state.lunchPlaces[Math.floor(Math.random()*this.state.lunchPlaces.length)] + '!', ToastAndroid.SHORT);
  },

  render: function() {
    var touchable;

    if (this.state.lunchPlaces.length > 0) {
        touchable = (
          <TouchableHighlight onPress={this._onPressButton}>
            <View>
              <Image
                style={styles.touchable}
                source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              />
              <Text>Los ziehen</Text>
            </View>
          </TouchableHighlight>
        )
    }


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Lunchy
        </Text>
        <TextInput
          style={styles.input}
          autoFocus={true}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.addLunchPlace}
          clearButtonMode='while-editing'
          value={this.state.text}
          blurOnSubmit={false}
          ref='input'
        />
        <Text style={styles.list}>
            {this.state.lunchPlaces.length > 0 ? 'In der Lostrommel: ' : ''}{this.state.lunchPlaces.join(', ')}
        </Text>
        {touchable}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 40
  },
  welcome: {
    fontSize: 40,
    fontWeight : 'bold',
    textAlign: 'center',
    margin: 10
  },
  list: {
    fontSize: 20,
    marginTop: 30,
    color: 'grey',
    textAlign: 'left',
    opacity: 0.4
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  touchable: {
    padding: 20,
    borderWidth: 1
  }
});

AppRegistry.registerComponent('Lunchy', () => Lunchy);
