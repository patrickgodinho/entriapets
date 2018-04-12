/**
 * @flow
 * @relayHash 7561889013c36699947e5b4f603af550
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginEmailMutationVariables = {|
  input: {
    email: string,
    password: string,
    clientMutationId?: ?string,
  },
|};
export type LoginEmailMutationResponse = {|
  +LoginEmail: ?{|
    +token: ?string,
    +error: ?string,
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation LoginEmailMutation(
  $input: LoginEmailInput!
) {
  LoginEmail(input: $input) {
    token
    error
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LoginEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "LoginEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginEmailInput!"
      }
    ],
    "concreteType": "LoginEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LoginEmailMutation",
  "id": null,
  "text": "mutation LoginEmailMutation(\n  $input: LoginEmailInput!\n) {\n  LoginEmail(input: $input) {\n    token\n    error\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LoginEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'f7a1a9605158e71d81dc847e0756fb05';
module.exports = node;
