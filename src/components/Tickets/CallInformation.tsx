import React from 'react';
import { Box, Header, Placeholder } from '@cloudscape-design/components';
import { Placeholder as AmplifyPlaceholder } from '@aws-amplify/ui-react';

const CallInformation: React.FC = () => {
  return (
    <Box variant="div" padding="m" className="mb-4">
      <Header variant="h2">Call Information</Header>
      <AmplifyPlaceholder height="15rem" width="100%">Call Information Content</AmplifyPlaceholder>
    </Box>
  );
};

export default CallInformation;