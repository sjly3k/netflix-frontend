import React, {useEffect, useState} from "react";
import PaymentPresenter from "./PaymentPresenter";

export default (props) => {
    const cid = "cid71958862"
    let IMP = window.IMP;
    IMP.init(cid)

    const [action, setAction] = useState("planSelect");
    const [plan, setPlan] = useState("");
    const [amount, setAmount] = useState(9400)
    const [email, setEmail] = useState("sjly3k@naver.com");
    const [phoneNumber, setPhoneNumber] = useState("01025365810")
    const [name, setName] = useState("sjly3k")


    // 아임포트로 KakaoPay 구현
    const openPay = async () => {
        IMP.request_pay({
            pg : "kakaopay",
            pay_method : "card",
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : "Netflix Subscribe : " + plan,
            amount : amount,
            buyer_email : email,
            buyer_name : name,
            buyer_tel : phoneNumber,
        }, function(rsp) {
            console.log(rsp)
            if ( rsp.success ) {
                let msg = '결제가 완료되었습니다.';
            } else {
                let msg = '결제에 실패하였습니다. ';
                msg += '에러내용 : ' + rsp.error_msg;
                alert(msg);
            }
        })
    }

    const colorSelectOnChange = (event) => {
        setPlan(event.target.value)
        console.log(plan)

    }

    useEffect(() => {
        if (plan === "Premium") {
            setAmount(14500);
        } else if (plan === "Standard") {
            setAmount(12000);
        } else {
            setAmount(9500)
        }
    })


    return (
        <PaymentPresenter
            action={action}
            setAction={setAction}
            plan={plan}
            amount={amount}
            colorSelectOnChange={colorSelectOnChange}
            openPay={openPay}
        />
    )
}