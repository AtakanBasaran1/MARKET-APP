'use client';

import './globals.css';
import Navbar from './Navbar/Navbar'
import PageContainer from './[containers]/PageContainer'
import { store } from './[redux]/store'
import { Provider } from 'react-redux'




const RootLayout = ({ children }) => {



  return (
    <html lang="en">

      <body>
        <Provider store={store}>
          <PageContainer>
            <loading />
            <Navbar />
            {children}

          </PageContainer>
        </Provider>
      </body>

    </html>
  );
};

export default RootLayout;