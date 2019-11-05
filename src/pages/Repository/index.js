import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation'


import { Browser } from './styles';

export default function Repository({navigation}) {
  const repository = navigation.getParam('repository')
  return (
    <Browser source={{uri: repository.html_url}}/>
  );
}

Repository.propTypes ={
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.anvigationOptions = ({navigation}) => ({
  title: navigation.getParam('repository').name,
})
