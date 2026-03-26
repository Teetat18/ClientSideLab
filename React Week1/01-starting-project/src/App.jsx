import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import {useState} from 'react';
import { EXAMPLES } from './data.js';




function App() {
  let tabContent = "Please click a button";
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log("clicked"+selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts 
              key={concept.title}
              title={concept.title}
              image={concept.image}
              description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
        )}
        </section>
        
      </main>
    </div>
  );
}

export default App;
