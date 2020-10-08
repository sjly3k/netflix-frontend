import React from "react";
import styled from "styled-components";
import {Check} from "../../Components/Icons";

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
    color : gray;
  }
`

const PaymentItem = styled.div`
  width: 100%;

`
const PaymentItemDetail = styled.div`
  display : flex;
  flex-direction: column;
  padding : 10px 10px;
  margin-bottom: 20px;
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

export default ({
    action,
    setAction,
    plan,
    amount,
    colorSelectOnChange,
    openPay
}) => {
    return (
        <>
            {action === "planSelect" ? (
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
            ) : (
                <Container>
                    <Button type="submit" onClick={() => openPay()}>Start Membership</Button>
                    <span>{plan} {amount}</span>
                </Container>
            )}
        </>
    )
}