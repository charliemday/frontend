import React, { Component } from 'react';
import FeedItem from 'Components/FeedItem';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

const data = [
  {
    title: 'Feed Item 1',
    user: {
      avatar:
        'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
    },
    slug: 'feed-item-1',
  },
  {
    title: 'Feed Item 1',
    user: {
      avatar:
        'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
    },
    slug: 'feed-item-2',
  },
];

const Container = styled.div`
  padding: 20px;
  border: solid 2px black;
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
