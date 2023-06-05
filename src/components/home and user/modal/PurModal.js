import React from 'react'
import image from '../../assets/logo1.png'

import { Container, Logo, PurchaseButton, PurchaseButton1, PurchaseButton2, PurchaseContainer, PurchaseDetails, PurSubContainer } from './OTPStyle'

function PurModal() {
  return (
    <Container>
        <PurchaseContainer>
            <PurSubContainer>
                <Logo width={'30%'} padding={'30px'}>
                    <img src={image} alt="" />
                </Logo>
                <PurchaseDetails>
                    <p>Do you need an assistance for purchasing?</p>
                </PurchaseDetails>
                <PurchaseButton >
                    <PurchaseButton1>
                        <button>Yes, Need assistance</button>
                    </PurchaseButton1>
                    <PurchaseButton2>
                        <button>No</button> 
                    </PurchaseButton2>
                </PurchaseButton>
            </PurSubContainer>
        </PurchaseContainer>
    </Container>
  )
}

export default PurModal
