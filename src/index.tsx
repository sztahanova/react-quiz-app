import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "fontsource-roboto/index.css";
import "fontsource-roboto/300.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";
import "./index.scss";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Provider } from "react-redux";
import { DispatchType, QuizFormAction, QuizFormState } from "./types/type";
import { createStore, Store, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import thunk from "redux-thunk";

const store: Store<QuizFormState, QuizFormAction> & { dispatch: DispatchType } = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
