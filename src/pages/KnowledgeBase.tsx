import React from 'react';
import { Container, ContentLayout } from '@cloudscape-design/components';

const KnowledgeBase: React.FC = () => {
  return (
    <ContentLayout header={<h1>Welcome to My App</h1>}>
      <Container>
        <p>This is the KnowledgeBase page of the application.</p>
      </Container>
    </ContentLayout>
  );
};

export default KnowledgeBase;