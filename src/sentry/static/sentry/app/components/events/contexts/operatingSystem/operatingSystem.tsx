import React from 'react';

import ContextBlock from 'app/components/events/contexts/contextBlockV2';

import getOperatingSystemKnownData, {
  OperatingSystemKnownData,
} from './getOperatingSystemKnownData';

type Props = {
  data?: OperatingSystemKnownData;
};

const OperatingSystem = ({data}: Props) => {
  if (data === undefined || data === null) {
    return null;
  }

  return <ContextBlock knownData={getOperatingSystemKnownData(data)} />;
};

OperatingSystem.getTitle = () => 'Operating System';

export default OperatingSystem;