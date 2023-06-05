import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, CardContainer, MainContainer, Title } from "./HomeStyle";


function Home() {
    const navigate = useNavigate()

    const handleAdmin = () => {
        navigate('/admin/login')
    }

    const handleCallCoordinator = () => {
        navigate('/call-coordinator/login')
    }
    return (
        <MainContainer>
            <CardContainer>
                <Title>Login</Title>
                <Buttons>
                    <button onClick={handleAdmin}>Admin</button>
                    <button onClick={handleCallCoordinator}>Call Coordinator</button>
                </Buttons>
            </CardContainer>
        </MainContainer>
    )
}

export default Home