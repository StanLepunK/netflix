import React, { useState, useContext, createContext } from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import {
  Container,
  Title,
  Subtitle,
  Meta,
  Text,
  Image,
  Entities,
  Group,
  Item,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Maturity,
  Content,
} from './styles/card_style';

import PropTypes from 'prop-types';

Card.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

const FeatureContext = createContext();

export default function Card({ children, rest_props }) {
  const [show_feature, set_show_feature] = useState(false);
  const [item_feature, set_item_feature] = useState(false);

  return (
    <FeatureContext.Provider
      value={{ show_feature, set_show_feature, item_feature, set_item_feature }}
    >
      <Container {...rest_props}>{children}</Container>
    </FeatureContext.Provider>
  );
}

// eslint-disable-next-line react/prop-types
Card.Title = function CardTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Card.Subtitle = function CardSubtitle({ children, ...rest_props }) {
  return <Subtitle {...rest_props}>{children}</Subtitle>;
};

// eslint-disable-next-line react/prop-types
Card.Text = function CardText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};

// eslint-disable-next-line react/prop-types
Card.Group = function CardGroup({ children, ...rest_props }) {
  return <Group {...rest_props}>{children}</Group>;
};

// eslint-disable-next-line react/prop-types
Card.Image = function CardImage({ ...rest_props }) {
  return <Image {...rest_props} />;
};

// eslint-disable-next-line react/prop-types
Card.Entities = function CardEntities({ children, ...rest_props }) {
  return <Entities {...rest_props}>{children}</Entities>;
};

// eslint-disable-next-line react/prop-types
Card.Meta = function CardMeta({ children, ...rest_props }) {
  return <Meta {...rest_props}>{children}</Meta>;
};

// eslint-disable-next-line react/prop-types
Card.Item = function CardItem({ item, children, ...rest_props }) {
  const { set_show_feature, set_item_feature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        set_item_feature(item);
        set_show_feature(true);
      }}
      {...rest_props}
    >
      {children}
    </Item>
  );
};

// eslint-disable-next-line react/prop-types
Card.Feature = function CardFeature({ children, category, ...rest_props }) {
  const { show_feature, item_feature, set_show_feature } = useContext(
    FeatureContext
  );

  return show_feature ? (
    <Feature
      src={`${MEDIA_PATH}/images/${category}/${item_feature.genre}/${item_feature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{item_feature.title}</FeatureTitle>
        <FeatureText>{item_feature.description}</FeatureText>
        <FeatureClose onClick={() => set_show_feature(false)}>
          <img src={`${MEDIA_PATH}/images/icons/close.png`} alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={item_feature.maturity}>
            {item_feature.maturity < 12 ? 'PG' : item_feature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {item_feature.genre.charAt(0).toUpperCase() +
              item_feature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
