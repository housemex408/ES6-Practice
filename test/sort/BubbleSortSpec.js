/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import BubbleSort from '../../src/sort/BubbleSort';

describe('BubbleSort', () => {

  describe('BubbleSort.sort()', () => {

    it('should return [0,1,2,3,4] given [3,1,4,2,0]', () => {
      const bsort = new BubbleSort();
      const result = bsort.sort([3,1,4,2,0]);
      expect(result.join("")).to.be.equal("01234");
    });

  });

});
