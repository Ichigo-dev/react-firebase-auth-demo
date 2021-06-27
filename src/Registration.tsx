import { useState } from 'react';
import GoogleLogin, { useGoogleLogin, GoogleLogout } from 'react-google-login';

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn, loaded} = useGoogleLogin(
    {
      clientId:'134482043719-hpen81cp9nl2cjfkv8nss2d94jgppkes.apps.googleusercontent.com'
    }
    );

    console.log('signIn: ', signIn)
    console.log('loaded', loaded)

    const responceGoogle = (res: any) => {
      console.log(res)
      }

    return (
      <div>
        <p>新規登録</p>

        <form>
          <p>
            <input type="email" name="email" placeholder="email" value={email} onChange={ (e) => { setEmail(e.target.value) } }/>
          </p>
          <p>
            <input type="password" name="password" placeholder="password" value={password} onChange={ e => { setPassword(e.target.value)}}/>
          </p>
          <button type="submit">submit</button>
        </form>

        <p>or</p>

        <GoogleLogin
        clientId="134482043719-hpen81cp9nl2cjfkv8nss2d94jgppkes.apps.googleusercontent.com"
        buttonText="ログイン"
        onSuccess={responceGoogle}
        onFailure={responceGoogle}
        isSignedIn={true}
        / >
        <GoogleLogout
        clientId="134482043719-hpen81cp9nl2cjfkv8nss2d94jgppkes.apps.googleusercontent.com"
        buttonText="ログアウト"
        / >
      </div>
    )
  }

export default Registration
