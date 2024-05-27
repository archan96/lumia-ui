import React from 'react';
import { NotificationProvider } from './notifications/NotificationProvider';
import { StandardModalProvider } from './Modals/StandardModalProvider';
import { HorizontalModalProvider } from './Modals/HorizontalModalProvider';

const LumiaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NotificationProvider>
      <StandardModalProvider>
        <HorizontalModalProvider>
          {children}
        </HorizontalModalProvider>
      </StandardModalProvider>
    </NotificationProvider>
  );
};

export default LumiaProvider;
