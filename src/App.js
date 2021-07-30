import name from './assets/name.svg';
import cv from './assets/cv.svg';
import fin from './assets/fin.svg';
import gene from './assets/gene.svg';
import pension from './assets/pension.svg';
import pm from './assets/pm.svg';
import org from './assets/org.svg'; 
import './App.css';

function openCV() {
  window.open("https://github.com/EdwardKHKim/vision_and_autonomous_surgical_movement")
}

function openFin() {
  window.open("https://github.com/EdwardKHKim/wsb")
}

function openGene() {
  window.open("https://www.nature.com/articles/s41598-019-54051-y")
}

function openPension() {
  window.open("https://drive.google.com/file/d/1PFRtSP0eaUeX3DbI0MMCvHQ1dOYBkzHh/view")
}

function openPM() {
  window.open("https://drive.google.com/file/d/1qJ34rc3AXeVKfAb6oTYItluZckQ8OoEH/view?usp=sharing")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="name">
          <img src={name} className="App-logo" alt="logo" />
        </div>
      </header>
      <body className="App-body">
        <div className="App-body-sec">
          <div className="App-body-sec-one">
            <div class="column-one">
              <img src={cv} className="cv" alt="logo" onClick={ openCV }/>
            </div>
            <div class="column-two">
              <img src={fin} className="fin" alt="logo" onClick={ openFin }/>
            </div>
            <div class="column-three">
              <img src={gene} className="gene" alt="logo" onClick={ openGene }/>
            </div>
            <div class="column-four">
              <img src={pm} className="pension" alt="logo" onClick={ openPM }/>
            </div>
            <div class="column-five">
              <img src={pension} className="pm" alt="logo" onClick={ openPension }/>
            </div>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <div className="org">
          <img src={org} className="org-logo" alt="logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
