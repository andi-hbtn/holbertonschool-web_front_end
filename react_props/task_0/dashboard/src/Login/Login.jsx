export default function Login() {
    return (
        <>
            <p> Login to access the full dashboard</p>
            <label htmlFor="email">email</label>
            <input type="email" id="email"></input>

            <label htmlFor="password">password</label>
            <input type="password" id="password"></input>

            <button type="submit">Ok</button>
        </>
    )
}