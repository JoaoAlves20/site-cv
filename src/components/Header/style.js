import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    margin: 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    height: 100px;

    a {
        cursor: pointer;
        text-decoration: none;
        color: #fff;
    }

    .contacts {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }

    .name-address {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #fff;
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
    }

    .social-media {
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 10px;
        font-weight: bold;
        font-size: 20px;
    }
`