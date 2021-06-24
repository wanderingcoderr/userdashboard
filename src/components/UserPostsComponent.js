import { Card } from "react-bootstrap";

const UserInfo = (props) => {
    return (
        <section className="postdetails pt-lg-4">
            <div className="postheader font-weight-bold h4 pt-4 pb-3">
                Posts by {props.userInfo.name}
            </div>
            <div className="posts row">
                {props.userPosts.map((element) => {
                    return (
                        <div className="col-lg-4 col-xs-12 mb-3"><Card className="cards">
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    {element.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            <hr className="d-lg-none bg-dark"></hr>

                        </div>
                    )
                })}
            </div>
        </section>)
}

export default UserInfo;