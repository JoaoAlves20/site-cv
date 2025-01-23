export default function Header(props) {
    return (
        <header>
            <div className="contacts">
                <span>Email: {props.email}</span><br />
                <span>Phone Number: {props.phoneNumber}</span><br />
                <span>Address: {props.address}</span>
            </div>

            <h1>{props.name}</h1>

            <div className="social-media">
                <a href="/">Instagram: {props.instagram}</a><br />
                <a href="/">GitHub: {props.github}</a><br />
                <a href="/">Linkedin: {props.linkedin}</a>
            </div>
        </header>
    )
}