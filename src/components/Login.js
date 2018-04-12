import React from 'react';
import {View, Image, AsyncStorage, Alert} from 'react-native';
import styled from 'styled-components';
import {FormInput, Button, Icon} from 'react-native-elements';
import {graphql, commitMutation} from 'react-relay';
import environment from '../Environment';


const LoginContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: #FFF;
  flex-direction: row;
`;

const LoginBox = styled(View)`
  margin: auto;
  background-color: #fff;
  width: 80%;
  padding: 20px;
`;

const ButtonStyled = styled(Button)`
  border-color: transparent;
  border-radius: 100px;
  padding: 20px;
`;

const LogoContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 20px;
`;

const mutation = graphql`
    mutation LoginEmailMutation ( $input: LoginEmailInput!) {
        LoginEmail(input: $input) {
            token
            error
            clientMutationId
        }
    }
`;

const commit = async (email, password, success, error) => {
  return await commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {email, password},
      },
      onCompleted: (response) => {
        const {token} = response.LoginEmail;
        token ? success(token) : error();
      },
    },
  );
};

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Entria Pets'
  };

  async loginSuccess(token) {
    await AsyncStorage.setItem('userToken', token);
    this.props.navigation.navigate('EntriaPets');
  }

  loginError() {
    Alert.alert(
      'Login error',
      'Wrong email and/or password 😢',
      [
        {
          text: 'OK', onPress: () => this.setState({email: '', password: ''}),
        },
      ],
      {
        cancelable: false
      }
    )
  }

  async doLogin() {
    const {email, password} = this.state;
    await commit(email, password, this.loginSuccess.bind(this), this.loginError.bind(this));
  }


  render() {
    return (
      <LoginContainer>
        <LoginBox>
          <LogoContainer>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/entria.png')}
            />
            <Icon name='cat' type='material-community' size={40} color={'#555'}/> :
            <Icon name='guide-dog' type='foundation' size={45} color={'#555'}/>;
          </LogoContainer>
          <FormInput onChangeText={email => this.setState({email})} value={this.state.email} placeholder="E-mail"/>
          <FormInput onChangeText={password => this.setState({password})} value={this.state.password}
                     placeholder="Password"/>
          <ButtonStyled
            onPress={() => this.doLogin()}
            title="Login"
          />
        </LoginBox>
      </LoginContainer>
    )
  }
}