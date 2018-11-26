import React from "react";
import { withRouter } from "react-router";
import { Segment, Label, List, Header, Popup } from "semantic-ui-react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import parseDate from "date-fns/parse";

const releaseChannelColor = {
  SNAPSHOT: "purple",
  RELEASE: "blue"
};

const MinecraftVersionsList = ({ versions, match, history }) => (
  <List selection relaxed>
    {versions.map(version => {
      return (
        <List.Item
          key={version.id}
          onClick={() => history.push(`${match.url}/${version.id}`)}
        >
          <List.Content floated="left">
            <Popup
              trigger={
                <Label
                  circular
                  size="large"
                  color={releaseChannelColor[version.releaseChannel]}
                >
                  {version.releaseChannel.replace("OLD_", "")[0]}
                </Label>
              }
              content={version.releaseChannel}
            />
          </List.Content>
          <List.Content>
            <List.Header as="a">{version.id}</List.Header>
            <List.Description>
              Released{" "}
              <Popup
                content={parseDate(version.releasedAt).toLocaleString()}
                trigger={
                  <abbr>
                    {distanceInWordsToNow(version.releasedAt, {
                      addSuffix: true
                    })}
                  </abbr>
                }
              />
            </List.Description>
          </List.Content>
        </List.Item>
      );
    })}
  </List>
);

const MinecraftVersions = ({ minecraftVersions = [], match, history }) => (
  <Segment>
    <Header size="huge">All Minecraft Versions</Header>
    <MinecraftVersionsList
      match={match}
      history={history}
      versions={minecraftVersions}
    />
  </Segment>
);

export default withRouter(MinecraftVersions);
