
import React, {useState} from 'react';
import { ContentLayout, Box, Header, TextContent, Tabs, ColumnLayout, Textarea } from '@cloudscape-design/components';
import { Text } from '@aws-amplify/ui-react';

const Tickets: React.FC = () => {
  const [callInformation, setCallInformation] = useState("Requires medical reports for lab work completed few days ago");
  const CustomPlaceholder = ({ height = '100%', width = '100%', children }) => {
    return (
      <div className="custom-placeholder" style={{ height, width }}>
        {children}
      </div>
    );
  };

  return (
    <ContentLayout>
      <ColumnLayout columns={2} variant="text-grid">
        {/* <Box padding="m" variant='div'>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">TK09227300A2</p>
            <p className="text-sm text-gray-600">Created April 13, 2025 04:45 PM</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-sky-200 rounded-lg h-3/5">
          <div className="flex">
            <div className="rounded-full h-16 w-16 bg-gray-400 flex">
              <h3 className="text-white text-xl">JB</h3>
            </div>
          </div>
          <Text className="text-lg font-semibold">Jonathan Banks</Text>
          <Text className="text-md text-gray-700">773-832-9281</Text>
          </div>
          <Header variant="h2">Reason for Call</Header>
          <Textarea
            onChange={({ detail }) => setCallInformation(detail.value)}
            value={callInformation}
            placeholder="Enter reason for the call"
            className="h-full"
          />
        </Box> */}
        
        <Box padding="m" variant='div'>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-semibold">TK09227300A2</p>
            <p className="text-sm text-gray-600">Created April 13, 2025 04:45 PM</p>
          </div>

          <div className="flex flex-col items-start justify-center bg-sky-200 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <div className="rounded-full h-16 w-16 bg-gray-400 flex items-center justify-center">
                <h3 className="text-white text-xl">JB</h3>
              </div>
              <div className="ml-4">
                <Text className="text-lg font-semibold">Jonathan Banks</Text>
                <Text className="text-md text-gray-700">773-832-9281</Text>
              </div>
            </div>
          </div>

          <div>
            <Header variant="h4">Reason for Call</Header>
            <Textarea
              onChange={({ detail }) => setCallInformation(detail.value)}
              value={callInformation}
              placeholder="Enter reason for the call"
              className="h-full"
            />
          </div>
        </Box>

        <Box>
          <Tabs
            tabs={[
              {
                label: 'Patient Information',
                id: 'patient-info',
                content: (
                  <Box padding="m">
                    <TextContent>
                      <Text>Full Name: John Doe</Text>
                      <Text>DOB: 1990-01-01 (33 years)</Text>
                      <Text>Address: 123 Main St, Springfield, USA</Text>
                      <Text>Military Relationship: Self</Text>
                      <Text>DOD ID: ********</Text>
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
              {
                label: 'DEER',
                id: 'deer',
                content: (
                  <Box padding="m">
                    <TextContent>
                      <Text>Placeholder for additional information.</Text>
                    </TextContent>
                  </Box>
                ),
              },
            ]}
          />
        </Box>
      </ColumnLayout>

      <ColumnLayout columns={2}>
        <Box padding="m" variant='div'>
          <Header variant="h2">Call Information</Header>
          <CustomPlaceholder height="30rem">Call Information Content</CustomPlaceholder>
          <Header variant="h2">Resources</Header>
          <CustomPlaceholder height="20rem">Resource Content</CustomPlaceholder>
        </Box>
        <Box padding="m">
          <Header variant="h2">Nurses Toolkit</Header>
          <CustomPlaceholder height="52rem">Nurses Toolkit Content</CustomPlaceholder>
        </Box>
      </ColumnLayout>
    </ContentLayout>
  );
};

export default Tickets;