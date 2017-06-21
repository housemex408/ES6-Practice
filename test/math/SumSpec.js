/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Sum from '../../src/math/Sum';

describe('Sum', () => {

  describe('Sum.calculate()', () => {

    it('should return 0 given [0,2,4,-4,2]', () => {
      const sum = new Sum();
      const result = sum.calculate([0,2,4,-4,2]);
      expect(result).to.be.equal(true);
    });

  });

});
