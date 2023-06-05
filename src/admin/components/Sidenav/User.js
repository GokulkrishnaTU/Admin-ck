import React from "react";
import useCollapse from "react-collapsed";
import { Collapsible, Header, Section, Content, NavLink } from "./SideNavStyle";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function UserCollapse() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <Collapsible>
            <Header {...getToggleProps()}>
                {isExpanded ? "User" : "User"}
            </Header>
            <Section {...getCollapseProps()} >
                <Content>
                    <ArrowForwardIosIcon style={{fontSize:'small', marginTop:'6px', marginRight:'5px'}}/>
                    <NavLink to="/ViewProfessionType">Profession Type</NavLink>
                </Content>
            </Section>
        </Collapsible>
    );
}

export default UserCollapse;
