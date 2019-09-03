import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RegisterForm from 'components/forms/RegisterForm';
import authStyles from './styles';
import { colors } from '../../assets/styles/baseStyle';

const Register = ({ navigation }) => {
  const [enableScroll, setEnableScroll] = useState(false);
  const { height, width } = Dimensions.get('window');

  function onContentSizeChange(contentWidth, contentHeight) {
    setEnableScroll(contentHeight > height);
  }

  return (
    <ScrollView onContentSizeChange={onContentSizeChange} scrollEnabled={enableScroll}>
      <View style={authStyles.viewAuth}>
        <View style={authStyles.headerContainer}>
          <Text style={authStyles.title}>Regístrate</Text>
        </View>
        <View style={authStyles.formContainer}>
          <RegisterForm navigation={navigation} />
        </View>
        <View style={authStyles.imageContainer}>
          <Image
            source={require('../../assets/img/pet.png')}
            style={{ width, height: height / 3.6 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

Register.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <View>
        <Icon.Button
          backgroundColor={colors.white}
          color="gray"
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    ),
    headerStyle: {
      borderBottomColor: 'transparent',
      elevation: 0,
    },
  };
};

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
