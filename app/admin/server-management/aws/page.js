"use client";
import { useEffect, useState } from 'react';

export default function Page() {

  return (

      <div>
        <p className="mb-3 text-lg font-bold">서버 관리 &gt; aws 서버 호스팅 관리 방법</p>

        <div className="mb-3">
          <p className="block font-bold mb-1">알려주실 정보</p>
          <p>aws 아이디 / 암호</p>
        </div>
    
        <div className="mb-3">
          <p className="block font-bold mb-1">aws 서버 호스팅</p>
          aws 1년 무료 서버 호스팅 에 가입 및 호스팅 
          <a href="https://aws.amazon.com" target="_blank">https://aws.amazon.com</a>
          <img src="/admin/server-management/aws/aws-1.png" />
          <img src="/admin/server-management/aws/aws-2.png" />
          봇이 미응답시 시스템을 재부팅 (혹은 중지후 다시 시작) 합니다.
          <img src="/admin/server-management/aws/aws-3.png" />
          장시간 미사용시 중지 합니다. 
          완전 삭제시는 종료 합니다.
        </div>

      </div>
  );
}
