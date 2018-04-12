//@flow
import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../Environment';
import {Text, View, FlatList, Button, AsyncStorage} from 'react-native';

import Pet from './Pet';

export default class PetList extends React.Component {


  state = {
    isLoadingQueryTop: false,
  };

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'Pet List',
      headerLeft: null,
      headerRight: <Button title="Sign Out" onPress={() => params.signOut()}/>
    };
  };

  onRefresh() {
    this.setState({
      isLoadingQueryTop: true,
    });
    this.props.navigation.navigate('PetList');
    this.setState({
      isLoadingQueryTop: false,
    });
  }


  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('EntriaPets');
  };

  renderPet = ({item}) => {
    const {node} = item;
    return <Pet key={node.id} pet={node}/>
  };

  componentWillMount() {
    this.props.navigation.setParams({signOut: this.signOut.bind(this)});
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
        query PetListQuery {
            pets {
                edges {
                    node {
                        id,
                        ...Pet_pet
                    }
                }
            }
        }
  `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>{error}</Text>;
          }
          if (!props) {
            return <Text>Loading</Text>
          }
          return (
            <View>
              <FlatList
                data={props.pets.edges}
                renderItem={this.renderPet}
                keyExtractor={item => item.node.id}
                ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#CCC'}}/>}
                onRefresh={this.onRefresh.bind(this)}
                refreshing={this.state.isLoadingQueryTop}
              />
            </View>
          )
        }}
      />
    )
      ;
  }
}
