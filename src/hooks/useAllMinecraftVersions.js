import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const allMinecraftVersions = gql`
  query getAllMinecraftVersions {
    minecraftVersions {
      id
      releaseChannel
      releasedAt
    }
  }
`;

const useAllMinecraftVersions = () => useQuery(allMinecraftVersions);

export default useAllMinecraftVersions;
