function App() {
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URL = "http://localhost:3000/auth/naver/callback";
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;

  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div>
      <button onClick={handleLogin}>네이버 로그인1</button>
    </div>
  );
}

export default App;
