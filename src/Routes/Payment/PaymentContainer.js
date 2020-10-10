import React, {useEffect, useState} from "react";
import PaymentPresenter from "./PaymentPresenter";
import {useMutation, useQuery} from "react-apollo-hooks";
import {ME_QUERY} from "../SharedQueries";
import {CREATE_PAYMENT} from "./PaymentQueries";

export default () => {

    let IMP = window.IMP;
    IMP.init("iamport")

    const { data : meData, loading : meLoading } = useQuery(ME_QUERY)
    const [createPaymentMutation] = useMutation(CREATE_PAYMENT)

    const [action, setAction] = useState("planSelect");
    const [plan, setPlan] = useState("");
    const [amount, setAmount] = useState()
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(() => {
        if (meLoading === false) {
            setEmail(meData.me.email)
            setUserName(meData.me.userName)
            setPhoneNumber(meData.me.phoneNumber)
            setUserId(meData.me.id)
        }
    }, [meLoading, meData])

    // 아임포트로 KG이니시스 구현
    const openPay = async () => {

        IMP.request_pay({
            pg : "html5_inicis",
            pay_method : "card",
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : "Netflix Subscribe : " + plan,
            amount : 100,
            buyer_email : email,
            buyer_name : userName,
            buyer_tel : phoneNumber,
        }, function(rsp) {
            console.log(rsp)
            if ( rsp.success ) {
                const savePayment = createPaymentMutation({
                    variables : {
                        userId,
                        plan : plan.toUpperCase()
                    }
                })
                console.log(savePayment)
                if (savePayment) {
                    let msg = '결제가 완료되었습니다.';
                    alert(msg)
                    window.location = "/browse"
                } else {
                    alert("오류가 발생했습니다.")
                }
            } else {
                let msg = '결제에 실패하였습니다. ';
                msg += '에러내용 : ' + rsp.error_msg;
                alert(msg);
            }
        })
    }

    const colorSelectOnChange = (event) => {
        setPlan(event.target.value)
    }

    useEffect(() => {
        if (plan === "Premium") {
            setAmount(14500);
        } else if (plan === "Standard") {
            setAmount(12000);
        } else {
            setAmount(9500)
        }
    }, [plan])


    return (
        <PaymentPresenter
            action={action}
            setAction={setAction}
            loading={meLoading}
            meData={meData}
            plan={plan}
            amount={amount}
            colorSelectOnChange={colorSelectOnChange}
            openPay={openPay}
        />
    )
}