import { useState } from 'react'
import { CORE_CONCEPTS, EXAMPLES } from './data'
import viteLogo from '/vite.svg'
import './App.css'
import reactLogo from './assets/react-core-concepts.png'
import componentLogo from './assets/components.png'
import TabButton from './TabButton'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];


let tabcontent = 'Please Click a button';
const dynamicdescription = reactDescription[Math.floor(Math.random() * reactDescription.length)];
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactLogo} alt="react-atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicdescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
let i = 0;
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedClick) {
    //  alert(selectedClick,'Is Pressed. Website is Under Development')
    setSelectedTopic(selectedClick)
    console.log(selectedTopic)
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcepts key={conceptItem.title}{...conceptItem}/>)}
            {/* <CoreConcepts
              {...CORE_CONCEPTS[0]}  // spread operator to pull out all key value pairs with same name 
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleClick('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick('jsx')} isSelected={selectedTopic === 'jsx'}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleClick('props')} isSelected={selectedTopic === 'props'}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleClick('state')} isSelected={selectedTopic === 'state'}>
              State
            </TabButton>
          </menu>




        </section>

        {!selectedTopic ? <p>Please Select the topic </p> : null}
        {selectedTopic ? <div id='tab-content'>
          <h2>{EXAMPLES[selectedTopic].title}</h2>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>

        </div> : null}



      </main>
    </>
  );
}

export default App;
