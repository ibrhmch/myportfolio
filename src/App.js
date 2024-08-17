import React from 'react';
import NavigationBar from "./components/navigationbar/NavigationBar";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectSection from "./components/Projects/ProjectSection";

function App() {
  return (
    <div className="min-h-screen w-screen md:max-w-screen-lg mx-auto">
      <NavigationBar />
      <div className="mt-16"> {/* Add margin to push content below the fixed navbar */}
        <AboutMe />
      </div>
      <ProjectSection />
    </div>
  );
}

export default App;