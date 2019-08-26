import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import RegisterForm from './forms/RegisterForm';

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  register: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img_container: {
    zIndex: -1,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const Register = ({ navigation }) => {
  const [enableScroll, setEnableScroll] = useState(false);
  const { height, width } = Dimensions.get('window');

  function onContentSizeChange(contentWidth, contentHeight) {
    setEnableScroll(contentHeight > height);
  }

  return (
    <ScrollView onContentSizeChange={onContentSizeChange} scrollEnabled={enableScroll}>
      <View style={styles.register}>
        <View style={[helperStyles.mh_2, helperStyles.mt_1]}>
          <Text style={styles.header_title}>Regístrate</Text>
        </View>
        <View style={helperStyles.mh_2}>
          <RegisterForm navigation={navigation} />
        </View>
        <View style={styles.img_container}>
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
    },
  };
};

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
