import { useNavigate } from "react-router-dom";
import {GoogleLogin} from "react-google-login";
const clientID="850105773183-smsnkfjedisv5anla6at2c4f43fspcat.apps.googleusercontent.com";

function Login(){
    let navigate=useNavigate();
    const onSuccess=(res)=>{
        navigate("/main");
        console.log("Login Success",res.profileObj);
    }
    const onFailure=(res)=>{
        console.log("login Failed",res);
    }
    return (
        <div className="gbtn">
            <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}/>
        </div>
    )
}

export default Login;