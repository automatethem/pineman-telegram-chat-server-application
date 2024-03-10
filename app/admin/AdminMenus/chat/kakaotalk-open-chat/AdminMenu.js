const Page = () => {
  return <>
 
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/kakaotalk-open-chat">카카오톡 오픈 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/kakaotalk-open-chat/setting">설정</a></li>
        <li><a href="/admin/chat/kakaotalk-open-chat/connect/code">붙여 넣을 코드</a></li>
        <li><a href="/admin/chat/kakaotalk-open-chat/connect/chatting-auto-response-bot">카카오톡 오픈 연동 방법 (채팅 자동 응답 못)</a></li>
        <li><a href="/admin/chat/kakaotalk-open-chat/connect/messenger-bot-r">카카오톡 오픈 연동 방법 (메신저 봇 R)</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/command/info-command">정보 명령 관리</a></h2>
    <ul>
        <li><a href="/admin/command/info-command/setting">설정</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/ai">AI 관리</a></h2>
    <ul>
        <li><a href="/admin/ai/message-log">메시지 로그</a></li>
        <li><a href="/admin/ai/retrieval-augmented-generation">내부 지식 관리</a></li>
        <li><a href="/admin/ai/fine-tuning">파인 튜닝 관리</a></li>
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
