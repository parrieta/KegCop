// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { AppContainer } from 'react-hot-loader';
// // AppContainer is a necessary wrapper component for HMR
//
// import App from './components/App';
//
// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <App />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };
//
// // render(App);
//
// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));