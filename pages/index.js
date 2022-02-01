import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/nav-bar/NavBar';
import store from './redux/store';
import { Provider } from 'react-redux';
import { App } from './components/App';

// Sets the state for the resource picker
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
  };
}
export default Index;