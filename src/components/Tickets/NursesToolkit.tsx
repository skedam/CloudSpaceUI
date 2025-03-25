import React from 'react';
import { Box, Header, Placeholder } from '@cloudscape-design/components';
import { Placeholder as AmplifyPlaceholder } from '@aws-amplify/ui-react';

const NursesToolkit: React.FC = () => {
  return (
    <Box variant="div" padding="m">
      <Header variant="h2">Nurse's Toolkit</Header>
      <AmplifyPlaceholder height="15rem" width="100%">Nurse's Toolkit Content</AmplifyPlaceholder>
    </Box>
  );
};

export default NursesToolkit;