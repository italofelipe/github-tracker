import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fefefe;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #add9f4;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
export const List = styled.FlatList`
  margin-top: 20px;
`;

export const User = styled.TouchableHighlight`
  background: #fff;
  height: auto;
  padding: 10px 5px;
  flex-flow: row;
  align-items: center;
  margin: 0 5px 15px;
  box-shadow: 21px 21px 15px #333;
  border: ${(props) =>
    props.availability === true ? "2px solid #1ED760" : "2px solid #FF1B2D"};
  border-radius: 8px;
`;
export const UserContainer = styled.View`
  flex-flow: row;
`;
export const LeftWrapper = styled.View`
  flex-flow: column;
  margin-left: 5px;
`;

export const Wrapper = styled.View`
  align-items: flex-start;
  margin-left: 10px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 12px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: left;
`;

export const LowerWrapper = styled.View`
  flex-flow: column;
  justify-content: space-between;
  margin-top: 5px;
  align-content: space-between;
`;
export const Company = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 14px;
  font-weight: bold;
`;
export const Location = styled.Text.attrs({
  numberOfLines: 1
})`
  text-align: left;
  margin-top: 5px;
`;
