"use client";
import { useEffect, useState } from 'react';

export default function Page() {

  return (

      <div>
        <p className="mb-3 text-lg font-bold">서버 관리 &gt; render 모델 호스팅 관리 방법</p>

        <div className="mb-3">
          <label className="block font-bold mb-1">render 모델 호스팅</label>
          <br/>
          <a href="https://render.com/" target="_blank">https://render.com/</a>
          <br/>
          <img src="/admin/server-management/render/1.png" />
          <br/>
          <img src="/admin/server-management/render/2.png" />
          <br/>
          <img src="/admin/server-management/render/3.png" />
          <br/>
          <img src="/admin/server-management/render/4.png" />
          <br/>
          <img src="/admin/server-management/render/5.png" />
          <br/>
          <img src="/admin/server-management/render/6.png" />
          <br/>
          <img src="/admin/server-management/render/7.png" />
          <br/>
          <img src="/admin/server-management/render/8.png" />
          <br/>
          uvicorn api.fastapi.api.index:app --host 0.0.0.0 --port $PORT
          <br/>
          <img src="/admin/server-management/render/9.png" />
          <br/>
          <img src="/admin/server-management/render/10.png" />
          <br/>
          <a href="https://xxx-model-client-app.onrender.com/api/fastapi/api/docs" target="_blank">https://xxx-model-client-app.onrender.com/api/fastapi/api/docs</a>
          <br/>        
          <img src="/admin/server-management/render/11.png" />
        </div>

        <div className="mb-3">
          <label className="block font-bold mb-1">uptimerobot</label>
          <br/>
          무료 5분 간격 접속으로 render 무료 웹 호스팅 비활성화 방지
          <br/>
          <a href="https://uptimerobot.com" target="_blank">https://uptimerobot.com</a>
          <br/>
          <img src="/admin/server-management/render/2-1.png" />
          <br/>
          <img src="/admin/server-management/render/2-2.png" />
          <br/>
          <a href="https://xxx-model-client-app.onrender.com/api/fastapi/api/docs" target="_blank">https://xxx-model-client-app.onrender.com/api/fastapi/api/docs</a>
          <br/> 
          <img src="/admin/server-management/render/2-3.png" />
        </div>
            
      </div>
  );
}
