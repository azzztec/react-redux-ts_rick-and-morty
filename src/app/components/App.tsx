import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Main from '../containers/MainContainer';

const App = props => (
  <Provider store={props.store}>
    <Main />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;

// import * as React from "react";
// export interface HelloWorldProps {
//   userName: string;
//   lang: string;
// }
// export const App = (props: HelloWorldProps) => (
//   <h1>
//     Hi {props.userName} from React! Welcome to {props.lang}!
//   </h1>
// );