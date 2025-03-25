import React, { useState } from 'react';
import { ContentLayout, Box, Header, TextContent, Tabs, ColumnLayout, Textarea ,Button,Select} from '@cloudscape-design/components';
import { Text } from '@aws-amplify/ui-react';
import styles from '../css/Tickets.module.css';
import ChatUI from '../components/ChatVedioUI';
import ChatBot from '../components/ChatBotPopup';
const Tickets: React.FC = () => {
  const [callInformation, setCallInformation] = useState('');

  const CustomPlaceholder = ({ height = '100%', width = '100%', children }) => {
    return (
      <div className="bg-gray-200 rounded p-4 flex items-center justify-center" style={{ height, width }}>
        {children}
      </div>
    );
  };

  return (
    <ContentLayout>
      <ChatUI />

      <div className={styles.container}>
      
        <div className={styles['left-box']}>
      {/* <ColumnLayout columns={2}> */}
       
          <div className="flex justify-between mb-4">
            <p className="text-lg font-semibold">TK1872838273</p>
            <p className="text-sm text-gray-600">Created April 13, 2025 04:45 PM</p>
          </div>
          <div>
     
    </div>
          <div className={styles['blue-box']}>
  {/* Circle and content side by side */}
  <div className={styles['circle-content']}>
    <div className={styles.circle}>
      JD
    </div>
    <div>
      <p className="font-semibold" style={{ color: 'white', margin: 0 }}>
        Jonathan Banks
      </p>
      <p className="text-gray-300" style={{color: 'white', margin: 0 }}>
        23-23-9281
      </p>
    </div>
  </div>

  {/* Buttons on the right, arranged vertically */}
  <div className={styles['button-container']}>
    <Button >SMS</Button>
    <Button >Email</Button>
    <Button >Chat</Button>
  </div>
</div>


          <Header variant="h4">Reason for Call</Header>
        {  /*<Textarea value={callInformation} onChange={({ detail }) => setCallInformation(detail.value)} className="h-40" />*/}
          <Select
      selectedOption={callInformation}
      onChange={({ detail }) =>
        setCallInformation(detail.selectedOption)
      }
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" }
      ]} />
    </div>
         <div className={styles['right-box']}>
	
          <Tabs
            tabs={[
              { label: 'Patient Info', id: 'patient-info', content: <Box padding="m">
                <TextContent>
                  <Text>Full Name: John Doe</Text>
                  <Text>DOB: 1990-01-01 (33 years)</Text>
                  <Text>Address: 123 Main St, Springfield, USA</Text>
                  <Text>Military Relationship: Self</Text>
                  <Text>DOD ID: ********</Text>
                </TextContent>
              </Box> },
              { label: 'Medical History', id: 'medical-history', content: <Box padding="m">
                <TextContent>
                  <Text>Allergies: None</Text>
                  <Text>Conditions: Hypertension</Text>
                  <Text>Medications: Lisinopril</Text>
                </TextContent>
              </Box> },
              { label: 'DEERs', id: 'deers', content: <Box padding="m">
                <TextContent>
                  <Text>Placeholder for additional information.</Text>
                </TextContent>
              </Box> },
            ]}
          />
 </div>
      
      </div>
      <ColumnLayout columns={2}>
        <Box padding="m">
          <Header variant="h2">Call Information</Header>
          <CustomPlaceholder height="30rem">Call Information Content</CustomPlaceholder>
          <Header variant="h2">Resources</Header>
          <CustomPlaceholder height="20rem">Resources Content</CustomPlaceholder>
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
