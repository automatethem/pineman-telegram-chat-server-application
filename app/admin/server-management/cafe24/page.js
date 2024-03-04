"use client";
import { useEffect, useState } from 'react';

export default function Page() {

  return (

      <div>
        <p className="mb-3 text-lg font-bold">서버 관리 &gt; cafe24 서버 호스팅 관리 방법</p>

        <div className="mb-3">
          <label className="block font-bold mb-1">알려주실 정보</label>
          <p>cafe24 아이디 / 암호</p>
        </div>
    
        <div className="mb-3">
          <label className="block font-bold mb-1">카페 24 서버 호스팅</label>
          카페 24 월 5000원 서버 호스팅에 가입 및 호스팅
          <a href="https://hosting.cafe24.com/?controller=new_product_page&page=virtual" target="_blank">https://hosting.cafe24.com/?controller=new_product_page&page=virtual</a>
          <img src="/admin/server-management/cafe24/cafe24-1.png" />        
          봇이 미응답시 시스템을 종료후 다시 시작 합니다. 
          나의서비스 관리 페이지 접속 &gt; 서버 원격 관리 클릭
          <img src="/admin/server-management/cafe24/cafe24-2.png" />
          <img src="/admin/server-management/cafe24/cafe24-3.png" />
          <img src="/admin/server-management/cafe24/cafe24-4.png" />
          장시간 미사용시 종료 합니다. 
        </div>

      </div>
  );
}
