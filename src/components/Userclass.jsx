import React from "react";
import { Link } from "react-router";
import { Git_url } from "../utils/constants";
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa" ;
import UserShimmer from './AboutShimmer';

class Usersclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
            userInfo1: {
            },
            userInfo2: {
            }
        }
    } 

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Taha-Shahid916");
        const json = await data.json();
       

        const data1 = await fetch("https://api.github.com/users/mohammad-maaz-adil") ;
        const json1 = await data1.json();

        const data2 = await fetch("https://api.github.com/users/mohsin-salman");
        const json2 = await data2.json();

        this.setState({
            userInfo: json,
            userInfo1: json1,
            userInfo2: json2,
        });
    }

    

    render() {
        // const { name, location} = this.state.userInfo; To display 1 api call 

        const { userInfo, userInfo1, userInfo2 } = this.state;
        const users = [userInfo, userInfo1, userInfo2];

        if (!userInfo.login || !userInfo1.login || !userInfo2.login) return <UserShimmer />;


        return (
            <div className="users-container">
                 <h2 className="section-title">Meet Our Team</h2>
                {users.map((user,index) => (
                    <div className="user-card" key={index}>
                        <img src={user.avatar_url} alt="User avatar" />
                        <h1>{user.name}</h1>
                        <h2>{user.location}</h2>
                        <p>{user.bio}</p>
                        <div className="social-icons">
                        <Link  to= {Git_url + user.login}><FaGithub size={40}  /></Link>
                        <FaLinkedin size={40}  />
                        <FaTwitter size={40}  />
                        </div>

                    </div>
                ))}
            </div>
        )
    };
}
export default Usersclass;