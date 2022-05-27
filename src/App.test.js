import React from 'react';
import ReactDOM from 'react-dom';
import MainAppContainer from "./App";
import {act} from "react-dom/test-utils";

it('renders without crasing', () => {


  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const div = document.createElement('div');
    ReactDOM.render(<MainAppContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
