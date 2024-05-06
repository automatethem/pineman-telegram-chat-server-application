"use client";
import { useEffect, useState } from 'react';

export default function TelegramInfoPage() {

  return (

      <div>
        <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 텔레그램 연동 방법</p>

        <div className="mb-3">
          <p className="block font-bold mb-1">봇 만들기</p>
          텔레그램 (https://www.telegram.org) 설치후 봇 파더 봇 (<a href="https://t.me/botfather" target="_blank">https://t.me/botfather</a>) 을 텔레그램에 추가해 /newbot 명령어로 봇을 만듭니다. 봇을 만든후 봇 토큰을 메모 합니다. 
          <img src="/admin/chat/telegram-chat/connect/botfather.png" />      
        </div>

        <div className="mb-3">
          <label className="block font-bold mb-1">그룹 혹은 채널 챗 아이디 확인</label>
          "텔레그램 웹"을 검색해서 텔레그램 웹버전으로 접속후 (<a href="https://web.telegram.org/a" target="_blank">https://web.telegram.org/a</a>) 왼쪽에서 원하는 그룹 혹은 채널을 선택한후 주소창 주소의 # 우측 숫자가 그룹 혹은 채널의 챗 아이디 입니다. 
          <img src="/admin/chat/telegram-chat/connect/chat-id.png" />
        </div>

        <div>
          <label className="block font-bold mb-1">개인 챗 아이디 확인</label>
          텔레그램에서 userinfobot (<a href="https://telegram.me/userinfobot" target="_blank">https://telegram.me/userinfobot</a>) 를 검색해 추가후 메시지를 이 봇으로 포워드하면 메시지를 쓴 개인 챗 아이디를 알려 줍니다.
          <img src="/admin/chat/telegram-chat/connect/p-chat-id1.png" />
          <img src="/admin/chat/telegram-chat/connect/p-chat-id2.jpeg" />
        </div>
            
      </div>
  );
}
