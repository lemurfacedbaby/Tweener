/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Search from 'react-search';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CompanySearch.css';

class CompanySearch extends React.Component {
  render() {
    const items = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { id: 4, value: 'julia' },
    ];
    return (
      <div className={s.root}>
        <div>
          <Search items={items} />
          <Search
            items={items}
            placeholder="Pick your language"
            maxSelected={3}
            multiple
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CompanySearch);
