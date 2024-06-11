function Welcome(props) {
    const {name,setIsLoggedIn,setName,styleData} = props;

    const logOutBtn = async() => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        setName('');
        alert('로그아웃 되었습니다.');
    }

    return (
        <div style={styleData}>
            <h2>{name}님, 환영합니다!</h2>
            <button onClick={logOutBtn}>로그아웃</button>
        </div>
    );
}

export default Welcome;