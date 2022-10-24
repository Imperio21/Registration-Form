import { Router } from "./router";

import { FormProvider } from "./contexts/FormContext";

import "./App.css";

export const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};
