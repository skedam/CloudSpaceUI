import React from 'react';
import { Box, Header, Placeholder } from '@cloudscape-design/components';
import { Placeholder as AmplifyPlaceholder } from '@aws-amplify/ui-react';

const Resources: React.FC = () => {
  return (
    <Box variant="dev" padding="m" className="mb-4">
      <Header variant="h2">Resources</Header>
      <AmplifyPlaceholder height="15rem" width="100%">Resources Content</AmplifyPlaceholder>
    </Box>
  );
};

export default Resources;