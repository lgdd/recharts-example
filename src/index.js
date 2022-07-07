import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class PillarAPCharts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div id="pillarAPCharts"></div>';

    const props = {
      siteId: this.getAttribute('siteId'),
    };

    ReactDOM.render(
      <App {...props} />,
      document.querySelector('#pillarAPCharts')
    );
  }
}

if (customElements.get('pillar-ap-charts')) {
  console.log('Skipping registration for <blog-editor> (already registered)');
} else {
  customElements.define('pillar-ap-charts', PillarAPCharts);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
