import closeBtn from '/images/closeBtn.jpg';
import signupCss from '../Signup/Signup.module.css'
import loginCss from './Login.module.css'

let Login = ({ setAuth }) => {

    const handleLogin = () => {
        setAuth({ closed: true })
    }
    let loginDiv = <div className={signupCss.outerDiv}>
        <div className={signupCss.modal}>
            <div className={signupCss.header}>
                <span className={signupCss.ttl}>Sign In </span>
                <span className={signupCss.closeBtn} onClick={() => setAuth({ closed: true })}>
                    <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={signupCss.lgBox}>
                <input className={signupCss.inpBox} type="text" placeholder='Full Name ...' />
                <input className={signupCss.inpBox} type="email" placeholder='Email ...' />
                <button className={signupCss.btn}>Login <img src="" alt="" />  </button>
            </div>
            <div className={signupCss.orBreak}><span className={signupCss.orBreakText}>or</span></div>
            
            <div className={loginCss.socialSignupBox} onClick={handleLogin} >
                Login As Guest
            </div>
        </div>
    </div>
    return loginDiv
}

export default Login;