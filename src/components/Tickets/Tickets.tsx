import React from 'react';
import { ContentLayout, Header, Grid } from '@cloudscape-design/components';
import PatientLookup from './PatientLookup';
import CallInformation from './CallInformation';
import Resources from './Resources';
import NursesToolkit from './NursesToolkit';

const Tickets: React.FC = () => {
  return (
    <ContentLayout header={<Header variant="h1">Tickets</Header>}>
      <Grid gridDefinition={[{ colspan: 12 }]}>
        <PatientLookup />
      </Grid>
      <Grid gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
        <div className="col-span-8">
          <CallInformation />
          <Resources />
        </div>
        <div className="col-span-4">
          <NursesToolkit />
        </div>
      </Grid>
    </ContentLayout>
  );
};

export default Tickets;