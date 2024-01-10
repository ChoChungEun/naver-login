# 배포
- 배포 주소: https://naver-login-client.netlify.app
- 배포 설정 화면: https://app.netlify.com/sites/naver-login-client/overview
- `netlify` 배포
- 배포 명령어 `npm run build`
  - `npm run build` -> `master push` -> 배포됨
- 참고 블로그: https://velog.io/@somda/FE-Netlify%EB%A1%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0

# 사전준비
1. 네이버 개발자 센터에서 애플리케이션 생성
2. 서비스 URL 설정: http://localhost:3000
3. 네이버 로그인 Callback URL 설정: http://localhost:3000/auth/naver/callback
4. Client ID 발급: J1afSRaLNkl5TACjwq9s


# FLOW
1. 로그인 화면
   - 로그인 버튼 클릭시 NAVER_AUTH_URL 로 이동
```
function App() {
  const CLIENT_ID = "J1afSRaLNkl5TACjwq9s";
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
```

2. 로그인 성공하면 네이버에서 자체적으로 애플리케이션에 등록한 REDIRECT_URL 로 이동시킨다.
   - 성공 code 값을 받는다.

```
const RedirectURI = () => {
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");

  const getToken = async () => {
    try {
      // 백엔드로 코드값을 넘겨주는 로직
      // code를 서버로 보낸다
      // 서버에서 access_token 을 발급해준다
      // 요청 성공하면
      // profile 화면으로 이동
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>로그인 중... {code}</div>;
};
```

# 추가 설명
- 사실 서버가 있다면 코드 값을 프론트로 바로 받아오지 않고 백엔드에서 처리 할 거다.
- Callback Url 을 백엔드 서버 주소로 해놓으면 서버에서 코드 값을 받아서 로직을 구현 한다음 프론트 화면으로 리다이렉트 시켜줄거다.
