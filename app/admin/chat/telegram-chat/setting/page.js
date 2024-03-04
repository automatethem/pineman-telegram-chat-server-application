"use client"
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Page() {
  const [id, setId] = useState(null);
  const [useWelcomeMessage, setUseWelcomeMessage] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [useWelcomeMessageImage, setUseWelcomeMessageImage] = useState(false);
  const [welcomeMessageImageUrl, setWelcomeMessageImageUrl] = useState('');
  const [removePreviousWelcomeMessage, setRemovePreviousWelcomeMessage] = useState(false);
  const [useHelpMessage, setUseHelpMessage] = useState(true);
  const [helpMessage, setHelpMessage] = useState('');
  const [useAttendanceMessage, setUseAttendanceMessage] = useState(true);
  const [attendanceMessage, setAttendanceMessage] = useState('');
  const [attendanceMessagePoint, setAttendanceMessagePoint] = useState(0);
  const [useAttendanceMessageImage, setUseAttendanceMessageImage] = useState(false);
  const [attendanceMessageImageUrl, setAttendanceMessageImageUrl] = useState('');
  const [useRandomMessagePoint, setUseRandomMessagePoint] = useState(false);
  const [startRandomMessagePoint, setStartRandomMessagePoint] = useState(0);
  const [endRandomMessagePoint, setEndRandomMessagePoint] = useState(0);
  const [randomMessagePointPercent, setRandomMessagePointPercent] = useState(0);
  const [randomMessagePointMessage, setRandomMessagePointMessage] = useState('');
  const [usePresent, setUsePresent] = useState(false);
  const [presentCommissionPercent, setPresentCommissionPercent] = useState(0);
  const [useMyInfoMessage, setUseMyInfoMessage] = useState(true);
  const [myInfoMessage, setMyInfoMessage] = useState('');
  const [useRanking, setUseRanking] = useState(true);
  const [rankingTitle, setRankingTitle] = useState('');
  const [rankingLineMessage, setRankingLineMessage] = useState('');
  const [useDayMessageCountLimit, setUseDayMessageCountLimit] = useState(false);
  const [dayMessageCountLimit, setDayMessageCountLimit] = useState(0);
  const [useDayMessageCountLimitMessage, setUseDayMessageCountLimitMessage] = useState(true);
  const [dayMessageCountLimitMessage, setDayMessageCountLimitMessage] = useState('');
  const [messageLockMessage, setMessageLockMessage] = useState('');
  const [usePeriodicMessage, setUsePeriodicMessage] = useState(false);
  const [periodicMessage, setPeriodicMessage] = useState('');
  const [periodicMessageSeconds, setPeriodicMessageSeconds] = useState(0);
  const [usePeriodicMessageImage, setUsePeriodicMessageImage] = useState(false);
  const [periodicMessageImageUrl, setPeriodicMessageImageUrl] = useState('');
  const [chatId, setChatId] = useState(0);
  const [useBot, setUseBot] = useState(true);
  const [botToken, setBotToken] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('TelegramChatSetting')
      .select('*')
      .single();
    if (!error) {
      const {
        id,
	      useWelcomeMessage,
        welcomeMessage,
        useWelcomeMessageImage,
	      welcomeMessageImageUrl,
        removePreviousWelcomeMssage,
	      useHelpMessage,
        helpMessage,
	      useAttendanceMessage,
        attendanceMessage,
        attendanceMessagePoint,
        useAttendanceMessageImage,
	      attendanceMessageImageUrl,
        useRandomMessagePoint,
        startRandomMessagePoint,
        endRandomMessagePoint,
        randomMessagePointPercent,
        randomMessagePointMessage,
        usePresent,
        presentComissionPercent,
        useMyInfoMessage,
        myInfoMessage,
	      useRanking,
        rankingTitle,
        rankingLineMessage,
        useDayMessageCountLimit,
        dayMessageCountLimit,
	useDayMessageCountLimitMessage,
        dayMessageCountLimitMessage,
        messageLockMessage,
        usePeriodicMessage,
        periodicMessage,
        periodicMessageSeconds,
        usePeriodicMessageImage,
        periodicMessageImageUrl,
        chatId,
        useBot,
        botToken
      } = data;
      setId(id);
      setUseWelcomeMessage(useWelcomeMessage);
      setWelcomeMessage(welcomeMessage);
      setUseWelcomeMessageImage(useWelcomeMessageImage);
      setWelcomeMessageImageUrl(welcomeMessageImageUrl);
      setRemovePreviousWelcomeMessage(removePreviousWelcomeMessage);
      setUseHelpMessage(useHelpMessage);
      setHelpMessage(helpMessage);
      setUseAttendanceMessage(useAttendanceMessage);
      setAttendanceMessage(attendanceMessage);
      setAttendanceMessagePoint(attendanceMessagePoint);
      setUseAttendanceMessageImage(useAttendanceMessageImage);
      setAttendanceMessageImageUrl(attendanceMessageImageUrl);
      setUseRandomMessagePoint(useRandomMessagePoint);
      setStartRandomMessagePoint(startRandomMessagePoint);
      setEndRandomMessagePoint(endRandomMessagePoint);
      setRandomMessagePointPercent(randomMessagePointPercent);
      setRandomMessagePointMessage(randomMessagePointMessage);
      setUsePresent(usePresent);
      setPresentCommissionPercent(presentComissionPercent);
      setUseMyInfoMessage(useMyInfoMessage);
      setMyInfoMessage(myInfoMessage);
      setUseRanking(useRanking);
      setRankingTitle(rankingTitle);
      setRankingLineMessage(rankingLineMessage);
      setUseDayMessageCountLimit(useDayMessageCountLimit);
      setDayMessageCountLimit(dayMessageCountLimit);
      setUseDayMessageCountLimitMessage(useDayMessageCountLimitMessage);
      setDayMessageCountLimitMessage(dayMessageCountLimitMessage);
      setMessageLockMessage(messageLockMessage);
      setUsePeriodicMessage(usePeriodicMessage);
      setPeriodicMessage(periodicMessage);
      setPeriodicMessageSeconds(periodicMessageSeconds);
      setUsePeriodicMessageImage(usePeriodicMessageImage);
      setPeriodicMessageImageUrl(periodicMessageImageUrl);
      setChatId(chatId);
      setUseBot(useBot);
      setBotToken(botToken);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase
      .from('TelegramChatSetting')
      .update({
	      useWelcomeMessage: useWelcomeMessage,
        welcomeMessage: welcomeMessage,
        useWelcomeMessageImage: useWelcomeMessageImage,
        welcomeMessageImageUrl: welcomeMessageImageUrl,
        removePreviousWelcomeMessage: removePreviousWelcomeMessage,
	      useHelpMessage: useHelpMessage,
        helpMessage: helpMessage,
	      useAttendanceMessage: useAttendanceMessage,
        attendanceMessage: attendanceMessage,
        attendanceMessagePoint: attendanceMessagePoint,
        useAttendanceMessageImage: useAttendanceMessageImage,
        attendanceMessageImageUrl: attendanceMessageImageUrl,
        useRandomMessagePoint: useRandomMessagePoint,
        startRandomMessagePoint: startRandomMessagePoint,
        endRandomMessagePoint: endRandomMessagePoint,
        randomMessagePointPercent: randomMessagePointPercent,
        randomMessagePointMessage: randomMessagePointMessage,
        usePresent: usePresent,
        presentComissionPercent: presentCommissionPercent,
        useMyInfoMessage: useMyInfoMessage,
        myInfoMessage: myInfoMessage,
	      useRanking: useRanking,
        rankingTitle: rankingTitle,
        rankingLineMessage: rankingLineMessage,
        useDayMessageCountLimit: useDayMessageCountLimit,
        dayMessageCountLimit: dayMessageCountLimit,
	useDayMessageCountLimitMessage: useDayMessageCountLimitMessage,
        dayMessageCountLimitMessage: dayMessageCountLimitMessage,
        messageLockMessage: messageLockMessage,
        usePeriodicMessage: usePeriodicMessage,
        periodicMessage: periodicMessage,
        periodicMessageSeconds: periodicMessageSeconds,
        usePeriodicMessageImage: usePeriodicMessageImage,
        periodicMessageImageUrl: periodicMessageImageUrl,
        chatId: chatId,
        useBot: useBot,
        botToken: botToken
      })
      .match({ id: id });

    if (!error) {
      alert('설정 저장 성공!');
      fetchSettings();
    } 
    else {
      alert(error.message);
    }
    setLoading(false);
  };

  const uploadWelcomeMessageImageFile = async (event) => {
    const file = event.target.files[0];
    const bucket = "TelegramChatSetting"

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(`welcomeMessageImage/${file.name}`, file, { upsert: true });

    if(error) {
      alert(error.message); //new row violates row-level security policy
      return;
    }

    const { data: dataPublic, error: errorPublic } = supabase
    .storage
    .from('TelegramChatSetting')
    .getPublicUrl(`welcomeMessageImage/${file.name}`);
    
    const publicUrl = dataPublic.publicUrl;
    //console.log(publicUrl); //https://haeojztqgjldkavhpkeo.supabase.co/storage/v1/object/public/welcome/images/googlelogo.png
    setWelcomeMessageImageUrl(publicUrl);
    
    alert('환영 메시지 이미지 업로드 성공!');
  };
  
  const uploadAttendanceMessageImageFile = async (event) => {
    const file = event.target.files[0];
    const bucket = "TelegramChatSetting"

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(`attendanceMessageImage/${file.name}`, file, { upsert: true });

    if(error) {
      alert(error.message); //new row violates row-level security policy
      return;
    }
    
    const { data: dataPublic, error: errorPublic } = supabase
    .storage
    .from('TelegramChatSetting')
    .getPublicUrl(`attendanceMessageImage/${file.name}`);
    
    const publicUrl = dataPublic.publicUrl;
    //console.log(publicUrl); //https://haeojztqgjldkavhpkeo.supabase.co/storage/v1/object/public/welcome/images/googlelogo.png
    setAttendanceMessageImageUrl(publicUrl);
    
    alert('출석 메시지 이미지 업로드 성공!');
  };

  const uploadPeriodicMessageImageFile = async (event) => {
    const file = event.target.files[0];
    const bucket = "TelegramChatSetting"

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(`periodicMessageImage/${file.name}`, file, { upsert: true });

    if(error) {
      alert(error.message); //new row violates row-level security policy
      return;
    }
    
    const { data: dataPublic, error: errorPublic } = supabase
    .storage
    .from('periodic')
    .getPublicUrl(`periodicMessageImage/${file.name}`);
    
    const publicUrl = dataPublic.publicUrl;
    //console.log(publicUrl); //https://haeojztqgjldkavhpkeo.supabase.co/storage/v1/object/public/welcome/images/googlelogo.png
    setPeriodicMessageImageUrl(publicUrl);
    
    alert('반복 메시지 이미지 업로드 성공!');
  };

  if (loading) 
    return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 설정</p>

      <div className="mb-3">
        <label className="block font-bold mb-1">환영 메시지 사용</label>
        <input
          type="checkbox"
          checked={useWelcomeMessage}
          onChange={(e) => setUseWelcomeMessage(e.target.checked)}
        />
      </div>
	  
      <div className="mb-3">
        <label className="block font-bold mb-1">환영 메시지</label>
        <textarea
          value={welcomeMessage}
          onChange={(e) => setWelcomeMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">환영 메시지 이미지 사용</label>
        <input
          type="checkbox"
          checked={useWelcomeMessageImage}
          onChange={(e) => setUseWelcomeMessageImage(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">환영 메시지 이미지</label>
        <input 
          type="text"
          value={welcomeMessageImageUrl}
          onChange={(e) => setWelcomeMessageImageUrl(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
        <input type="file" onChange={(e) => {uploadWelcomeMessageImageFile(e);}} />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">이전 환영 메시지 삭제</label>
        <input
          type="checkbox"
          checked={removePreviousWelcomeMessage}
          onChange={(e) => setRemovePreviousWelcomeMessage(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">도움말 사용</label>
        <input
          type="checkbox"
          checked={useHelpMessage}
          onChange={(e) => setUseHelpMessage(e.target.checked)}
        />
      </div>
		  
      <div className="mb-3">
        <label className="block font-bold mb-1">도움말</label>
        <textarea
          value={helpMessage}
          onChange={(e) => setHelpMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
          />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">출석 메시지 사용</label>
        <input
          type="checkbox"
          checked={useAttendanceMessage}
          onChange={(e) => setUseAttendanceMessage(e.target.checked)}
        />
      </div>
		  
      <div className="mb-3">
        <label className="block font-bold mb-1">출석 메시지</label>
        <textarea
          value={attendanceMessage}
          onChange={(e) => setAttendanceMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">출석 메시지 포인트</label>
        <input
          type="number"
          value={attendanceMessagePoint}
          onChange={(e) => setAttendanceMessagePoint(e.target.value)}
          className="w-full shadow py-2 px-3 border"
          />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">출석 메시지 이미지 사용</label>
        <input
          type="checkbox"
          checked={useAttendanceMessageImage}
          onChange={(e) => setUseAttendanceMessageImage(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">출석 메시지 이미지</label>
        <input 
          type="text"
          value={attendanceMessageImageUrl}
          onChange={(e) => setAttendanceMessageImageUrl(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
        <input type="file" onChange={(e) => {uploadAttendanceMessageImageFile(e);}} />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">랜덤 메시지 포인트 사용</label>
        <input
          type="checkbox"
          checked={useRandomMessagePoint}
          onChange={(e) => setUseRandomMessagePoint(e.target.checked)}
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">시작 랜덤 메시지 포인트</label>
        <input
          type="number"
          value={startRandomMessagePoint}
          onChange={(e) => setStartRandomMessagePoint(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">끝 랜덤 메시지 포인트</label>
        <input
          type="number"
          value={endRandomMessagePoint}
          onChange={(e) => setEndRandomMessagePoint(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">랜덤 메시지 포인트 퍼센트 (0~100)</label>
        <input
          type="number"
          value={randomMessagePointPercent}
          min="0"
          max="100"
          onChange={(e) => setRandomMessagePointPercent(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        /> 
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">랜덤 메시지 포인트 메시지</label>
        <textarea
          value={randomMessagePointMessage}
          onChange={(e) => setRandomMessagePointMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">선물 사용</label>
        <input
          type="checkbox"
          checked={usePresent}
          onChange={(e) => setUsePresent(e.target.checked)}
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">선물 커미션 퍼센트 (0~100)</label>
        <input
          type="number"
          value={presentCommissionPercent}
          min="0"
          max="100"
          onChange={(e) => setPresentCommissionPercent(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">내정보 메시지 사용</label>
        <input
          type="checkbox"
          checked={useMyInfoMessage}
          onChange={(e) => setUseMyInfoMessage(e.target.checked)}
        />
      </div>
            
      <div className="mb-3">
        <label className="block font-bold mb-1">내정보 메시지</label>
        <textarea
          value={myInfoMessage}
          onChange={(e) => setMyInfoMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">랭킹 사용</label>
        <input
          type="checkbox"
          checked={useRanking}
          onChange={(e) => setUseRanking(e.target.checked)}
        />
      </div>
		  
      <div className="mb-3">
        <label className="block font-bold mb-1">랭킹 제목</label>
        <textarea
          value={rankingTitle}
          onChange={(e) => setRankingTitle(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">랭킹 라인 메시지</label>
        <textarea
          value={rankingLineMessage}
          onChange={(e) => setRankingLineMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">하루 메시지수 제한 사용</label>
        <p><a href="/admin/chat/telegram-chat/day-message-count-limit-exception">하루 메시지수 제한 예외 관리</a>에서 하루 메시지수 제한 예외 아이디를 추가할 수 있습니다.</p>
  
        <input
          type="checkbox"
          checked={useDayMessageCountLimit}
          onChange={(e) => setUseDayMessageCountLimit(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">하루 메시지수 제한</label>
        <input
          type="number"
          value={dayMessageCountLimit}
          onChange={(e) => setDayMessageCountLimit(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">하루 메시지수 제한 메시지 사용</label>
        <input
          type="checkbox"
          checked={useDayMessageCountLimitMessage}
          onChange={(e) => setUseDayMessageCountLimitMessage(e.target.checked)}
        />
      </div>
		  
      <div className="mb-3">
        <label className="block font-bold mb-1">하루 메시지수 제한 메시지</label>
        <textarea
          value={dayMessageCountLimitMessage}
          onChange={(e) => setDayMessageCountLimitMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>
            
      <div className="mb-3">
        <label className="block font-bold mb-1">메시지 락 메시지</label>
	<p><a href="/admin/chat/telegram-chat/message-lock">메시지 락 관리</a>에서 아이디와 일수를 추가하면 그 아이디는 해당 일수 동안 메시지 락이 걸립니다.</p>	  
        <textarea
          value={messageLockMessage}
          onChange={(e) => setMessageLockMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">반복 메시지 사용</label>
        <input
          type="checkbox"
          checked={usePeriodicMessage}
          onChange={(e) => setUsePeriodicMessage(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">반복 메시지</label>
        <textarea
          value={periodicMessage}
          onChange={(e) => setPeriodicMessage(e.target.value)}
          className="w-full shadow py-2 px-3 border h-72"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">반복 메시지 초</label>
        <input
          type="number"
          value={periodicMessageSeconds}
          onChange={(e) => setPeriodicMessageSeconds(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">반복 메시지 이미지 사용</label>
        <input
          type="checkbox"
          checked={usePeriodicMessageImage}
          onChange={(e) => setUsePeriodicMessageImage(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">반복 메시지 이미지</label>
        <input 
          type="text"
          value={periodicMessageImageUrl}
          onChange={(e) => setPeriodicMessageImageUrl(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
        <input type="file" onChange={(e) => {uploadPeriodicMessageImageFile(e);}} />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">챗 아이디 (그룹 혹은 채널)</label>
        <input
          type="number"
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-bold mb-1">봇 사용</label>
        <input
          type="checkbox"
          checked={useBot}
          onChange={(e) => setUseBot(e.target.checked)}
        />
      </div>

      <div className="mb-3">
        <label className="block font-bold mb-1">봇 토큰</label>
        <p>예) 6688581111:AAEqR22229cjTQud1ZYqr3Zo7ZjUHmr2222</p>
        <input
          type="text"
          value={botToken}
          onChange={(e) => setBotToken(e.target.value)}
          className="w-full shadow py-2 px-3 border"
        />
      </div>
            
      <button
        type="submit"
        className="shadow py-2 px-3 border bg-blue-500"
        disabled={loading}
        onClick={handleSubmit}
      >
        저장
      </button>
    </div>
  );
}
