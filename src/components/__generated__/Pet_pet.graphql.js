/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Pet_pet$ref: FragmentReference;
export type Pet_pet = {|
  +name: ?string,
  +breed: ?string,
  +age: ?number,
  +animal: ?string,
  +$refType: Pet_pet$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Pet_pet",
  "type": "Pet",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
};
(node/*: any*/).hash = 'e1216353aa9270e014785c0b43d71531';
module.exports = node;
