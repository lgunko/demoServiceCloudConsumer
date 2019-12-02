import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Bar } from './components/bar.component'
import { NavBar } from './components/navbar.component'
import { MyTable } from './components/table.component'


function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeProvider withToastContainer>
        <div style={{ height: "100%" }}>
          <Bar />
          <div style={{ display: "flex", height: "calc(100% - 40px)" }}>
            <NavBar />
            <MyTable />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
