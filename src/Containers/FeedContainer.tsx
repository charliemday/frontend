import React, { Component } from 'react';
import FeedItem from 'Components/FeedItem';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import { avatarSrc } from 'Constants';

const data = [
  {
    title: 'Feed Item 1',
    user: {
      avatar: avatarSrc,
    },
    slug: 'feed-item-1',
  },
  {
    title: 'Feed Item 1',
    user: {
      avatar: avatarSrc,
    },
    slug: 'feed-item-2',
  },
];

const Container = styled.div`
  padding: 100px;
  padding-top: 100px;
  margin: auto;
  width: 60%;
`;

class FeedContainer extends Component<RouteComponentProps> {
  state = {};
  render() {
    const { history } = this.props;
    return (
      <Container>
        {data.map((item, key) => (
          <FeedItem
            {...item}
            key={key}
            onClick={() => history.push(item.slug)}
          />
        ))}
      </Container>
    );
  }
}

export default FeedContainer;
