/**
 * @flow
 * @relayHash 9f228afb5fc9d9d5a912b0a045d154cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Pet_pet$ref = any;
export type PetListQueryVariables = {| |};
export type PetListQueryResponse = {|
  +pets: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Pet_pet$ref,
      |},
    |}>,
  |},
|};
*/


/*
query PetListQuery {
  pets {
    edges {
      node {
        id
        ...Pet_pet
      }
    }
  }
}

fragment Pet_pet on Pet {
  name
  breed
  age
  animal
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PetListQuery",
  "id": null,
  "text": "query PetListQuery {\n  pets {\n    edges {\n      node {\n        id\n        ...Pet_pet\n      }\n    }\n  }\n}\n\nfragment Pet_pet on Pet {\n  name\n  breed\n  age\n  animal\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PetListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pets",
        "storageKey": null,
        "args": null,
        "concreteType": "PetConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PetEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Pet",
                "plural": false,
                "selections": [
                  v0,
                  {
                    "kind": "FragmentSpread",
                    "name": "Pet_pet",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PetListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pets",
        "storageKey": null,
        "args": null,
        "concreteType": "PetConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PetEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Pet",
                "plural": false,
                "selections": [
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "breed",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "age",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "animal",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e52341a36d1b259d4efe6ed5e13e845a';
module.exports = node;
