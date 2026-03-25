import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
export default function Home() {
    const { isLoggedIn } = useContext(AuthContext);
    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>Home Page</h1>
                    {!isLoggedIn && (
                        <div className="row">
                            <div className="col">
                                <button onClick={loginWithGoogle} className="btn btn-success">
                                    Login With Google
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}