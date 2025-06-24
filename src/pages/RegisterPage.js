
function RegisterPage() {
    return <>
    <div>
      <h2>Register</h2>
      <div>Username:{" "}<input
        type="text"
        placeholder="Username"
      /></div><br />
      <div>Password:{" "}<input
        type="text"
        placeholder="Password"
      /></div><br />
      <div>Confirm Password:{" "}<input
        type="text"
        placeholder="Confirm Password..."
      /></div><br />
      <button >Sign Up</button>
    </div>
    </>
}

export default RegisterPage;