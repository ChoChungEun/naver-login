import { useEffect } from "react";

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

export default RedirectURI;
