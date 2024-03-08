const Page = () => {
  return <>
 
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/telegram-chat">텔레그램 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/telegram-chat/member">회원 관리</a></li>
        <li><a href="/admin/chat/telegram-chat/setting">설정</a></li>
        <li><a href="/admin/chat/telegram-chat/welcome-message-button">환영 메시지 버튼 관리</a></li>
        <li><a href="/admin/chat/telegram-chat/day-message-count-limit-exception">하루 메시지수 제한 예외 관리</a></li>
        <li><a href="/admin/chat/telegram-chat/message-lock">메시지 락 관리</a></li>
        <li><a href="/admin/chat/telegram-chat/connect">텔레그램 연동 방법</a></li>
        <li><a href="/admin/chat/telegram-chat/markdown">마크다운 사용 방법</a></li>
    </ul>
  </li>
</ul>

{/*
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/command/info-command">정보 명령 관리</a></h2>
    <ul>
        <li><a href="/admin/command/info-command/setting">설정</a></li>
    </ul>
  </li>
</ul>
*/}
  
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/ai">AI 관리</a></h2>
    <ul>
        <li><a href="/admin/ai/message-log">메시지 로그</a></li>
        <li><a href="/admin/ai/setting">설정</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/api">Api 관리</a></h2>
    <ul>
        <li><a href="/admin/api/setting">설정</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/web-site-member">웹 사이트 회원 관리</a></h2>
    <ul>
        <li><a href="/admin/web-site-member/member">회원 관리</a></li>
    </ul>
  </li>
</ul>
    
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/server-management">서버 관리</a></h2>
    <ul>
        <li><a href="/admin/server-management/supabase">수파베이스 데이터 베이스 관리 방법</a></li>
        <li><a href="/admin/server-management/aws">aws 서버 호스팅 관리 방법</a></li>
        <li><a href="/admin/server-management/cafe24">cafe24 서버 호스팅 관리 방법</a></li>
        <li><a href="/admin/server-management/github">github 소스 코드 리포지토리 이전 받는 방법</a></li>
        <li><a href="/admin/server-management/vercel">vercel 웹 호스팅 관리 방법</a></li>
        <li><a href="/admin/server-management/github-access-token">github 액세스 토큰 만드는 방법</a></li>
    </ul>
  </li>
</ul>
    
  </>;
};
export default Page;
