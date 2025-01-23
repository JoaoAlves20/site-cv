import { Container } from "./style"

export default function Header(props) {
    return (
        <Container>
            <div className="contacts">
                <span>Email: {props.email}</span>
                <span>Phone Number: {props.phoneNumber}</span>
            </div>

            <div className="name-address">
                <h1 className="title">{props.name}</h1>
                <span>Address: {props.address}</span>
            </div>

            <div className="social-media">
                <a href="/">Instagram: {props.instagram}</a>
                <a href="/">GitHub: {props.github}</a>
                <a href="/">Linkedin: {props.linkedin}</a>
            </div>
        </Container>
    )
}