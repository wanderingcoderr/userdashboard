import { Card } from 'react-bootstrap';

const UserCard = (props) => {
    return (<Card>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {Object.keys(props.content).map((key, index) => {
                    return (<div>
                        {key} : {props.content[key]}
                    </div>)
                })}
            </Card.Text>
        </Card.Body>
    </Card>)
}

export default UserCard;