import React, {useState, useEffect} from "react";
import {Keyboard} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  Company,
  Location,
  ProfileButton,
  ProfileButtonText
} from "../styles/index";
import http from "../services/http";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  useEffect(() => {
    console.log(users);
  }, [users]);
  const handleAddUser = async () => {
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
        <SubmitButton onPress={handleAddUser}>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
      <List
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({item}) => (
          <User>
            <Avatar source={{uri: item.avatar}} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <Company>{item.company}</Company>
            <Location>{item.location}</Location>
            <ProfileButton onPress={() => {}}>
              <ProfileButtonText>Ver perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
};

export default Main;
