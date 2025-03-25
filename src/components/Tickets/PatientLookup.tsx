import React from 'react';
import { Tabs, Box, TextContent, Input, Button } from '@cloudscape-design/components';
import { Text } from '@aws-amplify/ui-react';

const PatientLookup: React.FC = () => {
  return (
    <Box variant="div" padding="m">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Input placeholder="Search" value={""}/>
          <Button variant="primary">Patient Lookup</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button>Tools</Button>
          <Button>Tools</Button>
        </div>
      </div>
      <Tabs
        tabs={[
          {
            label: 'Patient Information',
            id: 'patient-info',
            content: (
              <Box padding="m">
                <TextContent>
                  <Text>Full Name: Jonathan Banks</Text>
                  <Text>DOB: 08/27/1973</Text>
                  <Text>Address: 123 Main St, USA</Text>
                  <Text>Military Relationship: Active Duty</Text>
                </TextContent>
              </Box>
            ),
          },
          {
            label: 'Medical History',
            id: 'medical-history',
            content: (
              <Box padding="m">
                <TextContent>
                  <Text>Allergies: None</Text>
                  <Text>Conditions: Hypertension</Text>
                  <Text>Medications: Lisinopril</Text>
                </TextContent>
              </Box>
            ),
          },
        ]}
      />
    </Box>
  );
};

export default PatientLookup;