// @flow
import {AsyncStorage} from 'react-native';
import {Environment, Network, RecordSource, Store} from "relay-runtime";

async function fetchQuery(operation, variables) {
  const token = await AsyncStorage.getItem('token');
  return fetch("http://35.198.18.106:5000/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;

