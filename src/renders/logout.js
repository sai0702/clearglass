import {GoogleLogout} from "react-google-login";
const clientID="850105773183-smsnkfjedisv5anla6at2c4f43fspcat.apps.googleusercontent.com";

function Logout(){
    const onSuccess=(res)=>{
        console.log("Logout Successfull");
    }
    
    return (
        <div className="gbtn">
            <GoogleLogout
            clientId={clientID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;