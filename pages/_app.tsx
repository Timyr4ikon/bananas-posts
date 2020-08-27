import App from "next/app";
import "reset-css";
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store';
import "../styles/main.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}


const makestore = () => store;
const wrapper = createWrapper(makestore);


export default wrapper.withRedux(MyApp)








