import React, {useState} from "react";
import {Keyboard, ActivityIndicator} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  UserContainer,
  Avatar,
  Name,
  Bio,
  Company,
  Location,
  LeftWrapper,
  Wrapper,
  LowerWrapper
} from "../styles/index";
import http from "../services/http";

const Main = (props) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigate = (user) => {
    const {navigation} = props;
    navigation.navigate("User", {user});
  };
  const handleAddUser = async () => {
    setLoading(true);
    try {
      const response = await http.get(`/users/${newUser}`);
      const data = {
        id: response.data.id,
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
        repos: response.data.public_repos,
        location: response.data.location,
        company: response.data.company,
        hireable: response.data.hireable
      };

      console.log(users);
      // setUsers(...users, data);
      setUsers([...users, data]);
      setLoading(false);

      setNewUser("");
      Keyboard.dismiss();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuario"
          value={newUser}
          onChangeText={(text) => setNewUser(text)}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />
        <SubmitButton loading={loading} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>
      <List
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({item}) => (
          <User
            availability={item.hireable}
            onPress={() => handleNavigate(item)}>
            <UserContainer underlayColor="#DDD" activeOpacity={0.6}>
              <LeftWrapper>
                <Avatar source={{uri: item.avatar}} />
              </LeftWrapper>
              <Wrapper>
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>

                <LowerWrapper>
                  <Company>
                    <Icon name="business-center" size={14} color="#333" />

                    {item.company}
                  </Company>
                  <Location>
                    <Icon name="location-city" size={14} color="#333" />

                    {item.location}
                  </Location>
                </LowerWrapper>
              </Wrapper>
            </UserContainer>
          </User>
        )}
      />
    </Container>
  );
};
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Main;
