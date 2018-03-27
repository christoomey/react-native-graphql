import React from 'react';
import {Text, StyleSheet} from 'react-native';
import gql from 'graphql-tag';
import Language, {LANGUAGE_FRAGMENT} from './Language';
import WebLink from './WebLink';
import {ForkedIcon, StarIcon} from './Icon';
import Card from './Card';
import Row from './Row';
import RowSection from './RowSection';
import TextWithIcon from './TextWithIcon';
import RepoHeader from './RepoHeader';
import ToggleStarButton, {STARS_FRAGMENT} from './ToggleStarButton';

const Repo = ({repo}) => (
  <Card>
    <RepoHeader>
      <WebLink href={repo.url}>{repo.name}</WebLink>
      <ToggleStarButton repo={repo} />
    </RepoHeader>

    <RowSection>
      <Text>{repo.description}</Text>
    </RowSection>

    <Row>
      <Language language={repo.primaryLanguage} style={styles.detail} />
      <TextWithIcon
        icon={ForkedIcon}
        text={repo.forkCount}
        style={styles.detail}
      />
      <TextWithIcon
        icon={StarIcon}
        text={repo.stargazers.totalCount}
        style={styles.detail}
      />
    </Row>
  </Card>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    url
    name
    description
    forkCount
    ...Stars
    primaryLanguage {
      ...Language
    }
  }
  ${STARS_FRAGMENT}
  ${LANGUAGE_FRAGMENT}
`;

const styles = StyleSheet.create({
  detail: {
    marginRight: 10,
  },
});

export default Repo;
