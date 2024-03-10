const Page = () => {
  return <>
    
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/web-chat">웹 챗 관리</a></h2>
    <ul>
        <li><a href="/" target="_blank">웹 챗 가기</a></li>
        <li><a href="/admin/chat/web-chat/setting">설정</a></li>
        <li><a href="/admin/chat/web-chat/connect">웹 사이트 연동 방법</a></li>
    </ul>
  </li>
</ul> 

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/ai-web-chat">AI 웹 챗 관리</a></h2>
    <ul>
        <li><a href="/chat/ai-web-chat" target="_blank">AI 웹 챗 가기</a></li>
        <li><a href="/admin/chat/ai-web-chat/setting">설정</a></li>
        <li><a href="/admin/chat/ai-web-chat/connect">웹 사이트 연동 방법</a></li>
    </ul>
  </li>
</ul> 

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/kakaotalk-chat">카카오톡 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/kakaotalk-chat/setting">설정</a></li>
        <li><a href="/admin/chat/kakaotalk-chat/connect">카카오톡 연동 방법</a></li>
    </ul>
  </li>
</ul>

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
    <h2 className="menu-title"><a href="/admin/message/kakaotalk-message">카카오톡 메시지 관리</a></h2>
    <ul>
        <li><a href="/admin/message/kakaotalk-message/setting">설정</a></li>
    </ul>
  </li>
</ul>
    
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

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/telegram-webhook-chat">텔레그램 웹훅 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/telegram-webhook-chat/setting">설정</a></li>
        <li><a href="/admin/chat/telegram-webhook-chat/welcome-message-button">환영 메시지 버튼 관리</a></li>
        <li><a href="/admin/chat/telegram-webhook-chat/webhook">웹훅 관리</a></li>
        <li><a href="/admin/chat/telegram-webhook-chat/connect">텔레그램 연동 방법</a></li>
        <li><a href="/admin/chat/telegram-webhook-chat/markdown">마크다운 사용 방법</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/forward/telegram-forward">텔레그램 포워드 관리</a></h2>
    <ul>
      <li><a href="/admin/forward/telegram-forward/setting">설정</a></li>
      <li><a href="/admin/forward/telegram-forward/connect">텔레그램 연동 방법</a></li>
      <li><a href="/admin/forward/telegram-forward/markdown">마크다운 사용 방법</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/notification/telegram-notification">텔레그램 알림 관리</a></h2>
    <ul>
      <li><a href="/admin/notification/telegram-notification/setting">설정</a></li>
      <li><a href="/admin/notification/telegram-notification/connect">텔레그램 연동 방법</a></li>
      <li><a href="/admin/notification/telegram-notification/markdown">마크다운 사용 방법</a></li>
    </ul>
  </li>
</ul>
    
<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/discord-chat">디스코드 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/discord-chat/setting">설정</a></li>
        <li><a href="/admin/chat/discord-chat/connect">디스코드 연동 방법</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/chat/line-chat">라인 챗 관리</a></h2>
    <ul>
        <li><a href="/admin/chat/line-chat/setting">설정</a></li>
        <li><a href="/admin/chat/line-chat/connect">라인 연동 방법</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/app/chat-app">챗 앱 관리</a></h2>
    <ul>
        <li><a href="/admin/app/chat-app/setting">설정</a></li>
    </ul>
  </li>
</ul>

<ul className="menu bg-base-200 w-56 rounded-box mb-3">
  <li>
    <h2 className="menu-title"><a href="/admin/app/open-chat-app">오픈 챗 앱 관리</a></h2>
    <ul>
        <li><a href="/admin/app/open-chat-app/setting">설정</a></li>
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
    <h2 className="menu-title"><a href="/admin/web-site">웹 사이트 관리</a></h2>
    <ul>
        <li><a href="/admin/web-site/category">카테고리 관리</a></li>
        <li><a href="/admin/web-site/setting">설정</a></li>
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
