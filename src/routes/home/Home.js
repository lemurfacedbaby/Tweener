/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import newsQuery from './news.graphql';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          content: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  render() {
    const { data: { loading, databaseGetAllCompanies } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <br />
          {loading
            ? 'Loading...'
            : databaseGetAllCompanies.map(item => (
                <article key="" className={s.newsItem}>
                  <h1 className={s.newsTitle}>{item.name}</h1>
                  <div className={s.newsDesc}>
                    Size: {item.size}
                    <br />
                    Investors: {item.investors}
                    <br />
                    CEO: {item.ceo}
                    <br />
                    Contact: {item.contact}
                  </div>
                </article>
              ))}
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(newsQuery))(Home);
