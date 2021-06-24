
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import UserInfo from '../components/UserInfoComponent';
import PostInfo from '../components/UserPostsComponent';
import {
    Link,
    useParams
} from "react-router-dom";

import axios from 'axios';

const UserDetail = () => {

    let { id } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [addInfo, setAddInfo] = useState({});
    const [companyInfo, setCompanyInfo] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    useEffect(async () => {


        const userDetails = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = {
            name: userDetails.data.name,
            email: userDetails.data.email,
            username: userDetails.data.username,
            phone: userDetails.data.phone,
            website: userDetails.data.website
        }
        setUserInfo(user)
        setAddInfo(userDetails.data.address);
        setCompanyInfo(userDetails.data.company);

        const postDetails = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        setUserPosts(postDetails.data)

    }, [])

    return (
        <div>
            <div className="breadcrumbs font-weight-bold h4 pt-4 pb-3">
                <Link to="/"> Users</Link>
                <span> &#62; </span>
                <span>{userInfo.name}</span>
            </div>
            <hr className="d-lg-none bg-dark"></hr>
            <UserInfo userInfo={userInfo} addInfo={addInfo} companyInfo={companyInfo} />
            <PostInfo userInfo={userInfo} userPosts={userPosts} />
        </div>)
}
export default UserDetail;