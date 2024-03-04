"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function DayMessageCountLimitPage() {
  const [dayMessageCountLimits, setDayMessageCountLimits] = useState([]); // dayMessageLimits를 dayMessageCountLimits로 변경
  const [newMemberId, setNewMemberId] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDayMessageCountLimits = async () => { // fetchDayMessageLimits를 fetchDayMessageCountLimits로 변경
    setLoading(true);
    const { data, error } = await supabase.from('TelegramChatDayMessageCountLimitException').select('*');
    if (!error) {
      setDayMessageCountLimits(data); // dayMessageLimits를 dayMessageCountLimits로 변경
    } else {
      console.error('Failed to fetch day message count limits:', error.message); // dayMessageLimits를 dayMessageCountLimits로 변경
    }
    setLoading(false);
  };

  const deleteDayMessageCountLimit = async (id) => { // deleteDayMessageLimit를 deleteDayMessageCountLimit로 변경
    const confirmDelete = window.confirm("정말로 삭제 하시겠습니까?");
    if (!confirmDelete) return; // 사용자가 취소한 경우

    setLoading(true);
    const { error } = await supabase.from('TelegramChatDayMessageCountLimitException').delete().eq('id', id);
    if (error) {
      console.error('Failed to delete day message count limit:', error.message); // deleteDayMessageLimit를 deleteDayMessageCountLimit로 변경
    } else {
      await fetchDayMessageCountLimits(); // fetchDayMessageLimits를 fetchDayMessageCountLimits로 변경
    }
    setLoading(false);
  };

  const addDayMessageCountLimit = async () => { // addDayMessageLimit를 addDayMessageCountLimit로 변경
    setLoading(true);
    const { data, error } = await supabase
      .from('TelegramChatDayMessageCountLimitException')
      .insert([{ memberId: parseInt(newMemberId) }]);
    if (error) {
      console.error('Failed to add day message count limit:', error.message); // addDayMessageLimit를 addDayMessageCountLimit로 변경
    } else {
      await fetchDayMessageCountLimits(); // fetchDayMessageLimits를 fetchDayMessageCountLimits로 변경
      setNewMemberId('');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDayMessageCountLimits(); // fetchDayMessageLimits를 fetchDayMessageCountLimits로 변경
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 하루 메시지수 제한 예외 관리</p>

      <div className="mb-3">
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {dayMessageCountLimits.map((limit) => ( // dayMessageLimits를 dayMessageCountLimits로 변경
              <tr key={limit.id}>
                <td>{limit.memberId}</td>
                <td><button onClick={() => deleteDayMessageCountLimit(limit.id)}>삭제</button></td> {/* deleteDayMessageLimit를 deleteDayMessageCountLimit로 변경 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <p className="mb-3 text-lg font-bold">추가</p>

        <div className="mb-3">
          <label className="block font-bold mb-1">아이디</label>
          <input
            type="number"
            value={newMemberId}
            onChange={(e) => { setNewMemberId(e.target.value); }}
            className="shadow py-2 px-3 border"
          /> 
        </div>

        <button
          type="button"
          className="shadow py-2 px-3 border bg-blue-500"
          disabled={loading}
          onClick={addDayMessageCountLimit} // addDayMessageLimit를 addDayMessageCountLimit로 변경
        >
          추가
        </button> 
      </div>
    </div>
  );
}
