/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text
} = React;

var Lunchy = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Start coding!</Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('Lunchy', () => Lunchy);
