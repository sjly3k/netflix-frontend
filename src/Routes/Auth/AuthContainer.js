import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import {useMutation, useQuery} from "react-apollo-hooks";
import {LOG_IN, LOCAL_LOG_IN, CREATE_ACCOUNT, CONTENT_QUERY} from "./AuthQueries";
import AuthPresenter from "./AuthPresenter";
import {toast} from "react-toastify";

export default () => {
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

    if (loading === false) {
        console.log(data)
    }

    const handleLogin = async () => {
        if (email.value !== "" && password.value !== "") {
            try {
                const {data: {Login: token}} = await logInMutation({
                    variables: {
                        email: email.value,
                        password: password.value
                    }
                })
                if (token !== "" && token !== undefined) {
                    localLogInMutation({
                        variables: {
                            token: token
                        }}
                    )
                    window.location ="/browse";
                } else {
                    toast.error(`로그인에 실패하였습니다😢 email 또는 Password를 확인해 주세요.`);
                }
            } catch (e) {
                toast.error(`로그인에 실패하였습니다😢 email 또는 Password를 확인해 주세요.`);
            }
        }
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
                    toast.error("비밀번호가 일치하지 않습니다.")
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
                    toast.error("Fail to Sign Up.")
                } else {
                    setTimeout(() => handleLogin(), 1000);
                    email.setValue("")
                    password.setValue("")
                    confirmPassword.setValue("")
                    phoneNumber.setValue("")
                }
            } catch (e) {
                toast.error(e.message)
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
    />
}