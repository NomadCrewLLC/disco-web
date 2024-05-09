'use client'

export default function Login() {
//   const [loggedIn, setLoggedIn] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    

  async function submitLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
      const password = e.target.password.value;
      console.log('email', email);
      console.log('password', password);
      // send payload to supabase
      // set user to state
  }

  return (
      <div>
          {/* {!loggedIn ? ( */}
              <div>
                <form
                onSubmit={submitLogin}
                style={{display: 'flex', flexDirection: 'column', maxWidth: 360}}>
                <input type='email' name='email' value='grailians@gmail.com' />
                <input type='password' name='password' value='password' />
                <button type='submit'>Login</button>
                </form>
                <hr />
                {/* <button onclick={testMeeting}>Save Test Meeting</button> */}
            </div>
          {/* ) : (
            <div>
                <div>You are logged in</div>
                <div>LAUNCH MEETING BUTTON</div>
            </div>
          )} */}
      </div>
  );
}
