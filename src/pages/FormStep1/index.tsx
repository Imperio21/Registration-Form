import { ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useForm, FormActions } from "../../contexts/FormContext";

import { Theme } from "../../components/Theme";
import * as C from "./styles";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step2");
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome.</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome Completo:
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
