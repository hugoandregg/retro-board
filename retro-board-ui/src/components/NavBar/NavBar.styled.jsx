import React from 'react';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    background-color: #fafafa;
`;

export const Logo = styled.h1 `
    font-size: 26px;
`;

export const MenuNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0;
`;

export const MenuListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0;
    padding: 16px 0;
    
    & > *,
    & > *:hover,
    & > *:active {
        color: #172B4D;
        text-decoration: none;
        cursor: pointer;
    }
`;

const MenuItem = ({className, children, ...rest}) => (
    <MenuListItem>
        <a className={className} {...rest}>
            {children}
        </a>
    </MenuListItem>
)

export const MenuItemLink = styled(MenuItem)``;
