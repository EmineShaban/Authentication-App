
import {login} from '../services/authService'
function Login() {
 
    const onSubmit = (e) =>{
        e.preventDefault()

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target))

        console.log(email)
        console.log(password)
        login(email, password)
        .then(authData =>{
            console.log(authData)
        })
    }



    return (
        <div >

            <h1>Login</h1>
<form onSubmit={onSubmit}>


            <label htmlFor="email">Email</label>
            <input name="email"></input>

            <br />

            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
<br />
        <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Login;
