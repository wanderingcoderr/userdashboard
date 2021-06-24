import { Card } from "react-bootstrap";

const UserInfo = (props) => {
    return (
        <section className="userInfo row">
            <div className="col-xs-12 col-lg-4">
                <Card className="cards">
                    <Card.Body>
                        <Card.Title>Contact Info</Card.Title>
                        <Card.Text>
                            <div> <b>Username :</b> {props.userInfo.username}</div>
                            <div> <b>Email :</b> <a>{props.userInfo.email}</a></div>
                            <div> <b>Phone :</b> <a>{props.userInfo.phone}</a></div>
                            <div> <b>Website :</b> <a>{props.userInfo.website}</a></div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-xs-12 col-lg-4">
                <Card className="cards">
                    <Card.Body>
                        <Card.Title>Address Info</Card.Title>
                        <Card.Text>
                            <div>{props.addInfo.suite} {props.addInfo.street} , {props.addInfo.city}, {props.addInfo.zipcode}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-xs-12 col-lg-4">
                <Card className="cards">
                    <Card.Body>
                        <Card.Title>Company Info</Card.Title>
                        <Card.Text>
                            <div> {props.companyInfo.name}</div>
                            <div> {props.companyInfo.bs}</div>
                            <div> <i>"{props.companyInfo.catchPhrase}"</i></div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </section>)
}

export default UserInfo;