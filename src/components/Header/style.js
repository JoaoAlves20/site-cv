import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 10px;

    .contacts {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        background-color: #ccc;
        align-items: center;
        justify-content: center;
    }

    .name-address {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ccc;
    }

    .social-media {
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ccc;

        a {
            cursor: pointer;
            text-decoration: none;
        }
    }
`