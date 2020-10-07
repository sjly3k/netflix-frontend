import React from "react";
import useInput from "../../Hooks/useInput";
import {useMutation} from "react-apollo-hooks";
import {LOG_IN, LOCAL_LOG_IN} from "./LoginQueries";
import LoginPresenter from "./LoginPresenter";

export default () => {

    const email = useInput("");
    const password = useInput("");

    const logInMutation = useMutation(LOG_IN, {
        variables: {
            email: email.value,
            password: password.value
        }
    });

    const localLogInMutation = useMutation(LOCAL_LOG_IN);

    const loginFunction = async () => {
        console.log(email.value, password.value)
        if (email !== "" && password !== "") {
            const { data: { Login: token } } = await logInMutation();
            console.log(email.value, password.value)
        }
    }

    const onSubmit = async e => {
        e.preventDefault()
        loginFunction()
    }

    return (
        <LoginPresenter
            email={email}
            password={password}
            onSubmit={onSubmit}
        />
    )
}