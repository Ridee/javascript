/**
 * Copyright 2016 Jinn All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  rules: {
    'curly': 2,
    'brace-style': [2, '1tbs',{'allowSingleLine': true}],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-infix-ops': 2,
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'space-before-blocks': [2, 'always'],
    'no-multiple-empty-lines': 2,
    'no-trailing-spaces': 2,
    'keyword-spacing': 2,
    'no-console': 1,
    'no-tabs': 2,
    'max-len': [2, {
      'code': 100,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true
    }],
    'indent': [2, 2, {'SwitchCase': 1}],
    'eqeqeq': [2, 'smart'],
    'new-cap': 2,
    'no-unused-vars': [1],
  }
};
