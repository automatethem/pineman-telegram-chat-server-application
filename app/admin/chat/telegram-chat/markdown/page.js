"use client";
import { useEffect, useState } from 'react';

export default function Page() {
  const code = `일반 텍스트
*볼드체*
_이텔릭체_
[인라인 URL](http://www.example.com/)
\`인라인 고정 너비 코드\`
\`\`\`
미리 형식화된 고정 너비 코드 블록
\`\`\`
\`\`\`python
Python 프로그래밍 언어로 작성된 미리 형식화된 고정 너비 코드 블록
\`\`\``
  
  return (

      <div>
        <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 마크다운 사용 방법</p>

        <div className="mb-3">
          <p className="block font-bold mb-1">마크 다운</p>
          텔레그램 Markdown style (<a href="https://core.telegram.org/bots/api#markdown-style" target="_blank">https://core.telegram.org/bots/api#markdown-style</a>)
          <xmp>
          {code}
          </xmp>
          <img src="/admin/chat/telegram-chat/markdown/markdown.png" />
        </div>
            
      </div>
  );
}
