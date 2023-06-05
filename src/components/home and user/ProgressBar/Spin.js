import { React, useEffect, useState } from "react";
import {
    Main,
    Container,
    SubContainer,
    Progress,
} from "./SpinStyle";
function Spin() {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(500)), 50);
    }, []);

    return (
        <Main>
            <SubContainer>
                <h1>Clikekart gives you all products are in factory packing</h1>
                <Container>
                    {/* <Background /> */}
                    <Progress percent={completed} />
                </Container>
            </SubContainer>
        </Main>
    );
}

export default Spin;
