import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickBtn = async () => {
        if (!validateCheck()) return;
    
        try {
            const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
            const { token, userName } = response.data;
            localStorage.setItem('jwt', token);
            setIsLoggedIn(true);
            setName(userName);
            alert('로그인 성공! 토큰이 저장되었습니다.');
        } 
        catch (error) {
            if (error.response) {
                alert('로그인 실패: ' + error.response.data);
            } else if (error.request) {
                alert('로그인 실패: 서버로부터 응답이 없습니다.');
            } else {
                alert('로그인 실패: ' + error.message);
            }
        }
    };
    

    const logOutBtn = async() => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        setName('');
        setId('');
        setPwd('');
        alert('로그아웃 되었습니다.');
    }

    const validateCheck = () => {
        if (!id || !pwd) {
            alert('ID와 비밀번호를 모두 입력해주세요.');
            return false;
        }
        if (pwd.length < 4) {
            alert('비밀번호는 4자리 이상이어야 합니다.');
            return false;
        }
        return true;
    };
    

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h2>{name}님.환영합니다.</h2>
            <button onClick={logOutBtn}>로그아웃</button>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button onClick={onClickBtn}>로그인 하기</button>
          </div>
        )}     
      </div>
    );
}
  
export default Login;