import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store'

const render = component => rtlRender(
  <Provider store={store} >
    {component}
  </Provider>
)

test('initial render all components', () => {
  render(<App />);
});
