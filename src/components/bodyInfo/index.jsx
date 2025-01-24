import { Container } from "./style"

export default function BodyInfo(props) {
    return (
        <Container>
            <div className="title-time">
                <span>{props.position} / {props.organ}</span><br />
                <span>{props.time}</span>
            </div>

            <div className="description">
                <span>{props.description}</span>
            </div>
        </Container>
    )
}