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
  AlertIOS,
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

  handleSubmit : function(e) {
      if (this.state.text.length > 0) {
          this.addLunchPlace();
      }
  },

  addLunchPlace : function() {
      let propObject = {
          lunchPlaces : this.state.lunchPlaces,
          text : this.state.text
      };

      propObject['lunchPlaces'].push(this.state.text);
      propObject['text'] = '';

      AlertIOS.alert(
        'Platz hinzugefügt!',
        this.state.text + ' ist jetzt in der Lostrommel!'
      )

      this.setState(propObject);
  },

  _onPressButton : function() {
      AlertIOS.alert(
        'Heute geht es zu ' + this.state.lunchPlaces[Math.floor(Math.random()*this.state.lunchPlaces.length)] + '!'
      )

  },

  render: function() {
    var touchable;

    if (this.state.lunchPlaces.length > 0) {
        touchable = (
          <TouchableHighlight onPress={this._onPressButton}>
            <View>
              <Text style={styles.touchable}>Los ziehen</Text>
            </View>
          </TouchableHighlight>
        )
    }

    return (
      <View style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo}/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.handleSubmit}
          clearButtonMode='while-editing'
          value={this.state.text}
          blurOnSubmit={false}
          placeholder='Enter a restaurant'
          ref='input'
        />
        <Text style={styles.list}>
          {this.state.lunchPlaces.length > 0 ? this.state.lunchPlaces.length + ' ' + (this.state.lunchPlaces.length === 1 ? 'Restaurant' : 'Restaurants') + ' in der Lostrommel' : ''}
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
  list: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 30,
    color: '#444444',
    textAlign: 'left',
    opacity: 1
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
    backgroundColor: 'orange',
    color: 'white'
  },
  logo: {
    height: 150,
    marginBottom: -30,
    transform : [{
      scale : 0.3
    }]
  }
});

AppRegistry.registerComponent('Lunchy', () => Lunchy);
