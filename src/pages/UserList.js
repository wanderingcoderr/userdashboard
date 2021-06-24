import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Media } from 'react-bootstrap';

const UserList = () => {

    const [userData, setUserData] = useState([]);
    const [filteredData, setFilterData] = useState([]);
    const [sortBy, setSortBy] = useState('');

    const history = useHistory();

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            console.log(response);
            setUserData(response.data);
            setFilterData(response.data);
            setSortBy('name');
        }).catch((error) => {
            if (error)
                alert('error');
        })

    }, []);

    useEffect(() => {
        sortUsers(sortBy);
    }, [sortBy]);

    const sortUsers = (type, data = filteredData) => {
        let value = type ? type.toLowerCase() : '';
        const sorted = [...data].sort((a, b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0));
        setFilterData(sorted);
        setUserData(sorted);
    };


    const filterUserList = (e) => {
        sortUsers(sortBy, userData)
        let value = e.target.value.toLowerCase();
        const filteredData = userData.filter((p) => p.name.toLowerCase().includes(value) || p.username.toLowerCase().includes(value) || p.email.toLowerCase().includes(value));
        setFilterData(filteredData);
    }

    const showUsers = () => {
        let userList = filteredData.map((element) => {
            let mailto = "mailto:" + element.email;
            return (
                <Media className="border p-3 userlistrow" onClick={() => history.push(`/user/${element.id}`)}>
                    <img
                        width={64}
                        height={64}
                        className="rounded-circle border mr-4"
                        src="./images/profile.png"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <div className="float-md-left">
                            <h5>{element.name}</h5>
                            <p>
                                {element.username}
                            </p>
                        </div>
                        <div className="float-md-right">
                            <a href={mailto}>{element.email}</a>
                        </div>
                    </Media.Body>
                </Media>);
        })
        return userList;
    }
    return (
        <div className="mx-auto pb-4">
            <div className="filters row pt-4 pb-2">
                <div className="col-lg-7 col-xs-12 pb-2 pt-4">
                    <h4> USERS </h4>
                </div>
                <div className="col-lg-3 col-xs-12 pb-2">
                    <h6>Search</h6>
                    <input type="text" className="form-control w-100" onChange={filterUserList} />
                </div>
                <div className="col-lg-2 col-xs-12 pb-2">
                    <h6>Sort by</h6>
                    <select className="form-control" onChange={(e) => setSortBy(e.target.value)}>
                        <option>Name</option>
                        <option>Username</option>
                        <option>Email</option>
                    </select>
                </div>
            </div>
            <div className="userList">
                {filteredData.length > 0 ? showUsers() : (<div>No Result Found</div>)}
            </div>
        </div>)
}

export default UserList;