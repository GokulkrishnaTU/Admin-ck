import React from "react";
import Header from "../header/Header";
import {
    HomeContainer,
    HomeMainCon,
    HomeSub1,
    HomeSub2,
    Section,
    Section1,
    SectionSub1,
    SectionSub2,
    SectionLeft,
    SectionLeft1,
    HomeAside,
    HomeAside1,
    AsideChild,
    AsideChild1,
    AsideChild2,
    AsideChild3,
    Text,
} from "./HomeStyle";

function Home() {
    return (
       
        <HomeMainCon>
            <HomeContainer>
                <HomeSub1>
                    <Section
                        background={
                            "linear-gradient(270deg, #03EFFE 0%, #4FADFE 100%)"
                        }
                       
                    >
                         {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Transparent_google_logo_%282011-2015%29.png" alt="image"/> */}
                         {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Apple_Logo.svg" alt="image"/> */}
                         <Text>Sales</Text>
                    </Section>
                   
                    <Section1 >
                        <SectionSub1
                            background={
                                "linear-gradient(90deg, #F55D7A 0%, #F091F5 91.67%)"
                            }
                        >
                      

                        
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Apple_Logo.svg" alt="image"/> */}
                            <Text>Services</Text>
                        </SectionSub1>
                       
                        <SectionSub2>
                            <SectionLeft 
                                background={
                                    "linear-gradient(262.65deg, rgba(240, 152, 25, 0.22) 15.97%, rgba(234, 70, 70, 0.83) 99.17%);"
                                }
                            >
                                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Apple_Logo.svg" alt="image"/> */}
                                <Text>Auction</Text>
                            </SectionLeft>
                            
                            <SectionLeft1
                                background={
                                    "linear-gradient(244.64deg, rgba(19, 84, 122, 0.93) -5.02%, rgba(61, 162, 150, 0.79) 52.5%)"
                                }
                            >
                                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/IMac_G5.png" alt="image" /> */}
                                <Text>Exchange</Text>
                            </SectionLeft1>
                        </SectionSub2>
                    </Section1>
                </HomeSub1>
                <HomeSub2>
                    <HomeAside>
                        <AsideChild
                            background={
                                "linear-gradient(180deg, rgba(66, 234, 128, 0.7) 0%, #39F8D3 100%)"
                            }
                        >
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Apple_Logo.svg" alt="image"/> */}
                            <Text>Search</Text>
                        </AsideChild>
                        
                        <AsideChild1
                            background={
                                "linear-gradient(256.17deg, rgba(48, 207, 208, 0.74) 12.35%, rgba(117, 19, 236, 0.39) 98.93%)"
                            }
                        >
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/IMac_G5.png" alt="image" /> */}
                            <Text>Rewards</Text>
                        </AsideChild1>
                        
                        <AsideChild2
                            background={
                                "linear-gradient(246.46deg, rgba(13, 53, 132, 0.76) 29.19%, rgba(103, 136, 203, 0.84) 86.54%)"
                            }
                        >
                            <Text>User Guide</Text>
                        </AsideChild2>
                        
                        <AsideChild3
                            background={
                                "linear-gradient(257.32deg, #E9839C 1.47%, #9291EA 107.45%)"
                            }
                        >
                            <Text>Quiz</Text>
                        </AsideChild3>
                    </HomeAside>
                    <HomeAside1
                        background={
                            "linear-gradient(202.61deg, #FF1148 0.11%, rgba(255, 170, 149, 0.99) 98.22%)"
                        }
                    >
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Apple_Logo.svg" alt="image" /> */}
                        <Text>Profile</Text>
                    </HomeAside1>
                </HomeSub2>
            </HomeContainer>
        </HomeMainCon>
    );
}

export default Home;
