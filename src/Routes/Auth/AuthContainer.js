import React, {useState} from "react";
import useInput from "../../Hooks/useInput";
import {useMutation, useQuery} from "react-apollo-hooks";
import {LOG_IN, LOCAL_LOG_IN, CREATE_ACCOUNT, CONTENT_QUERY} from "./AuthQueries";
import AuthPresenter from "./AuthPresenter";
import {toast} from "react-toastify";
import { useHistory } from "react-router-dom";

export default () => {
    let history = useHistory()
    const [action, setAction] = useState("logIn")
    const [likedContents, setLikedContents] = useState([]);

    const email = useInput("");
    const password = useInput("");
    const confirmPassword = useInput("")
    const phoneNumber = useInput("");

    const { data, loading } = useQuery(CONTENT_QUERY)
    const [logInMutation] = useMutation(LOG_IN);
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN)
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT)

    const handleLogin = async () => {
        // 결제가 되어 있으면 (plan이 있으면 browse로 가게 하고, 안되어 있으면 signup/payment로 가게한다.)
        if (email.value !== "" && password.value !== "") {
            try {
                const {data : {Login : { token, payment }}} = await logInMutation({
                    variables: {
                        email: email.value,
                        password: password.value
                    }
                })
                if (token !== "" && token !== undefined) {
                    await localLogInMutation({
                        variables: {
                            token: token
                        }}
                    )
                    if (payment === null) {
                        setTimeout(() => history.push("/signup/payment"), 2000)

                    } else {
                        history.push("/browse")
                    }
                } else {
                    alert(`로그인에 실패하였습니다😢 email 또는 Password를 확인해 주세요.`);
                }
            } catch (e) {
                console.log(e)
                alert(`로그인에 실패하였습니다😢 email 또는 Password를 확인해 주세요.`);
            }
        }
    }

    const handleSignUpButton = (email) => {
        console.log("handleSignup", email)
        history.pushState(email, "Payment","/signup/payment")
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "logIn") {
            handleLogin();
        }
        else if (action === "signUp") {
            if (email.value !== "" &&
                password.value !== "" &&
                confirmPassword.value !== "" &&
                phoneNumber.value !== "") {
                if (password.value !== confirmPassword.value) {
                    alert("비밀번호가 일치하지 않습니다.")
                    return false;
                }
            }
            try {
                const { data : { createAccount }} = await createAccountMutation({
                    variables : {
                        email : email.value,
                        phoneNumber : phoneNumber.value,
                        password : password.value,
                        likedContents : likedContents
                    }
                });
                if (!createAccount) {
                    alert("Fail to Sign Up.")
                } else {
                    setTimeout(() => handleLogin(), 1000);
                    email.setValue("")
                    password.setValue("")
                    confirmPassword.setValue("")
                    phoneNumber.setValue("")
                }
            } catch (e) {
                alert(e.message)
            }
        }
    }

    const handleClick = (event) => {
        const { target } = event;
        setLikedContents([...likedContents, target.id])
        console.log(likedContents)
    }

    return <AuthPresenter
        action={action}
        setAction={setAction}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        phoneNumber={phoneNumber}
        likedContents={likedContents}
        setLikedContents={setLikedContents}
        onSubmit={onSubmit}
        handleClick={handleClick}
        allContentDataLoading={loading}
        allContentData={data}
        handleSignUpButton={handleSignUpButton}
    />
}