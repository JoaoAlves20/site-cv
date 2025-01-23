export default function BodyInfo(props) {
    return (
        <div>
            <div className="title-time">
                <span>{props.position} / {props.organ}</span><br />
                <span>{props.description}</span>
            </div>
        </div>
    )
}