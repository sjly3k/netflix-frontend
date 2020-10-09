import React from "react";
import styled from "styled-components";
import {Check} from "../../Components/Icons";
import Loader from "../../Components/Loader";

const colorChoice = (item) => {
    if (item === "Premium") {
        return `
            red;
        `
    }
    else if (item === "Standard") {
        return `
            purple;
        `
    }
    else {
        return `
            blue;
        `
    }
}

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin : 0 auto;
  padding : 20px;
`

const PaymentTitle = styled.div`
  width: 100%;
  display : flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 30px;
  margin-bottom: 10px;
  
  span.title {
    font-weight: 700;
    font-size: 23px;
  }
  
  span.smallTitle {
    margin-top: 10px;
    color : gray;
  }
  
  span.smallTitle_emphasize {
    font-weight: 600;
  }
`

const PaymentItem = styled.div`
  width: 100%;

`
const PaymentItemDetail = styled.div`
  display : flex;
  flex-direction: column;
  padding : 10px 10px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px 6px grey;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  border-radius: 5px;
  background: #e50914;
  margin : 24px 0px 12px;
  
  color : white;
  font-size: 16px;
  font-weight: 700;
`

const PaymentItemDetailColumn = styled.div`
  
  &:nth-child(1) {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    
    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    
    span.detailName {
      font-size: 20px;
      font-weight: 700;
    }
    span.detailPrice {
      font-size: 17px;
    }
    border-bottom : 2.5px solid ${props => props.theme.lightGreyColor};
  }
  
  &:nth-child(2), &:nth-child(3) {
    padding-left: 40px;
  }
  
  &:nth-child(2) {
    color : ${props => colorChoice(props.type)};
    margin : 20px 0px 10px 0px;
    line-height: 25px;
    span {
      margin-right: 7px;
    }
    span.videoQuality, span.watchSameTime {
      font-size: 20px;
      font-weight: 600;
    }
    span.resolution {
      padding : 4px;
      border-radius: 8px;
      background-color: ${props => colorChoice(props.type)};
      color : white;
    }
  }
  
  &:nth-child(3) {
    color : gray;
    margin: 10px 0px;
    line-height: 20px;
  }
  
  &:nth-child(4) {
    margin: 10px 0px;
    margin-left: 6px;
    line-height: 30px;
    svg {
      margin-right: 8px;
      fill : ${props => colorChoice(props.type)};
    }
  }
`

const PaymentItemDetailAdv = styled.div`

`

const CardPicker = styled.div`
  border: 3px solid ${props => props.theme.lightGreyColor};
  width: 100%;
  padding : 10px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`

const CardContainer = styled.div`
  display : flex;
  
  img {
    width: 12%;
    margin-top : 6px;
    margin-right: 4px;
    overflow: hidden;
  }
`

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 20px 20px;
  background-color: ${props => props.theme.lightGreyColor};
  width: 100%;
  border-radius: 5px;
`

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  
  span.price {
    font-weight: 700;
    margin-bottom: 8px;
  }
  span.planName {
    color : #737373;
  }
  
`
const ChangePlan = styled.div`
  color : ${props => props.theme.blueColor};
  font-weight: 700;
  cursor: pointer;
`

export default ({
    action,
    setAction,
    loading,
    plan,
    amount,
    colorSelectOnChange,
    openPay,
}) => {
    return (
        <>
            {loading && <Loader/>}
            {!loading && action === "planSelect" && setTimeout(() => <Loader />, 5000) ? (
                <>
                    <Container>
                        <PaymentTitle>
                            <span className="title">
                                Choose the plan that's right for you.
                            </span>
                            <span className="smallTitle">
                                Downgrade or upgrade at any time.
                            </span>
                        </PaymentTitle>
                        <PaymentItem>
                            <PaymentItemDetail>
                                <PaymentItemDetailColumn>
                                    <input type="radio" name="plan" value="Premium" onChange={(event)=> colorSelectOnChange(event)}/>
                                    <Detail>
                                        <span className="detailName">Premium</span>
                                        <span className="detailPrice">KRW 14,500/month</span>
                                    </Detail>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn type="Premium">
                                    <span className="videoQuality">Best</span>
                                    <span className="resolution">4K+HDR</span>
                                    <span className="watchSameTime">4</span>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn>
                                    <span className="detailComment">
                                        Our best video quality. Watch in Ultra HD and HDR on 4 devices at a time.
                                    </span>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn type="Premium">
                                    <PaymentItemDetailAdv>
                                        <Check size={25}/>
                                        <span className="adventages">Unlimited TV shows and movies</span>
                                    </PaymentItemDetailAdv>
                                    <PaymentItemDetailAdv>
                                        <Check size={25}/>
                                        <span className="adventages">Watch on any devices</span>
                                    </PaymentItemDetailAdv>
                                    <PaymentItemDetailAdv>
                                        <Check size={25}/>
                                        <span className="adventages">No ads</span>
                                    </PaymentItemDetailAdv>
                                    <PaymentItemDetailAdv>
                                        <Check size={25}/>
                                        <span className="adventages">Cancel anytime</span>
                                    </PaymentItemDetailAdv>
                                    <PaymentItemDetailAdv>
                                        <Check size={25}/>
                                        <span className="adventages">New releases every week</span>
                                    </PaymentItemDetailAdv>
                                </PaymentItemDetailColumn>
                            </PaymentItemDetail>
                            <PaymentItemDetail>
                                <PaymentItemDetailColumn>
                                    <input type="radio" name="plan" value="Standard" onChange={(event)=> colorSelectOnChange(event)}/>
                                    <Detail>
                                        <span className="detailName">Standard</span>
                                        <span className="detailPrice">KRW 12,000/month</span>
                                    </Detail>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn type="Standard">
                                    <span className="videoQuality">Better</span>
                                    <span className="resolution">1080p</span>
                                    <span className="watchSameTime">2</span>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn>
                                    <span className="detailComment">
                                        Our best video quality. Watch in Ultra HD and HDR on 4 devices at a time.
                                    </span>
                                </PaymentItemDetailColumn>
                            </PaymentItemDetail>
                            <PaymentItemDetail>
                                <PaymentItemDetailColumn>
                                    <input type="radio" name="plan" value="Basic" onChange={(event)=> colorSelectOnChange(event)}/>
                                    <Detail>
                                        <span className="detailName">Basic</span>
                                        <span className="detailPrice">KRW 9,500/month</span>
                                    </Detail>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn type="Basic">
                                    <span className="videoQuality">Good</span>
                                    <span className="resolution">480p</span>
                                    <span className="watchSameTime">1</span>
                                </PaymentItemDetailColumn>
                                <PaymentItemDetailColumn>
                                    <span className="detailComment">
                                        Our best video quality. Watch in Ultra HD and HDR on 4 devices at a time.
                                    </span>
                                </PaymentItemDetailColumn>
                            </PaymentItemDetail>
                        </PaymentItem>
                        <Button type="submit" onClick={() => setAction("payment")}>Continue</Button>
                    </Container>
                </>
            ) : (
                <>
                    {loading && <Loader/>}
                    {!loading && setTimeout(() => <Loader />, 2000) && (
                        <Container>
                            <PaymentTitle>
                                <span className="title">
                                    Set up your payment.
                                </span>
                                <span className="smallTitle">
                                    Your membership starts as soon as you set up payment.
                                </span>
                                <span className="smallTitle_emphasize">
                                    No commitments. Cancel online anytime.
                                </span>
                            </PaymentTitle>
                            <CardPicker>
                                <span className="cardTitle">
                                    Credit or Debit Card
                                </span>
                                <CardContainer>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bc.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/lotte.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/shinhan.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/kb.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/keb.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/nh.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/samsung.svg"/>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/hyundai.svg"/>
                                </CardContainer>
                            </CardPicker>
                            <OrderItem>
                                <PlanInfo>
                                    <span className="price">KRW {amount}/mo.</span>
                                    <span className="planName">{plan} Plan</span>
                                </PlanInfo>
                                <ChangePlan>
                                    <span onClick={() => setAction("planSelect")}>Change</span>
                                </ChangePlan>
                            </OrderItem>

                            <Button type="submit" onClick={() => openPay()}>Start Membership</Button>
                        </Container>
                    )}
                </>
            )}
        </>
    )
}