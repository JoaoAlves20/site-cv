import { Container } from "./style"

export default function Header(props) {
    return (
        <Container>
            <div className="contacts">
                <span>Email: {props.email}</span>
                <a href="https://wa.me/message/XXVTO6X6JXX7P1">Phone Number: {props.phoneNumber}</a>
            </div>

            <div className="name-address">
                <h1 className="title">{props.name}</h1>
                <span>Address: {props.address}</span>
            </div>

            <div className="social-media">
                <a href="https://www.instagram.com/ijoao.alves?igsh=MXRlOXpubXk0MXU0OQ==">Instagram: {props.instagram}</a>
                <a href="https://github.com/JoaoAlves20">GitHub: {props.github}</a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-alves-4693b721b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin: {props.linkedin}</a>
            </div>
        </Container>
    )
}