import React from 'react';
import NavigationBar from "./components/navigationbar/NavigationBar";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="min-h-screen w-screen md:max-w-screen-lg mx-auto">
      <NavigationBar />
      <div className="mt-16"> {/* Add margin to push content below the fixed navbar */}
        <AboutMe />
      </div>
    </div>
  );
}

export default App;