import React from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";

const User = ({navigation}) => {
  const user = navigation.getParam("user");
  return (
    <View>
      <Text>Biografia:{user.bio}</Text>
    </View>
  );
};

User.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func
  }).isRequired
};

export default User;
