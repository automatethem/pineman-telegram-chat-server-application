"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function MessageLocksPage() {
  const [messageLocks, setMessageLocks] = useState([]);
  const [newMemberId, setNewMemberId] = useState('');
  const [newDay, setNewDay] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMessageLocks = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('TelegramChatMessageLock').select('*');
    if (!error) {
      setMessageLocks(data);
    } else {
      console.error('Failed to fetch message locks:', error.message);
    }
    setLoading(false);
  };

  const deleteMessageLock = async (id) => {
    const confirmDelete = window.confirm("정말로 삭제 하시겠습니까?");
    if (!confirmDelete) return; // 사용자가 취소한 경우

    setLoading(true);
    const { error } = await supabase.from('TelegramChatMessageLock').delete().eq('id', id);
    if (error) {
      console.error('Failed to delete message lock:', error.message);
    } else {
      await fetchMessageLocks();
    }
    setLoading(false);
  };

  const addMessageLock = async () => {
    setLoading(true);
    const date = new Date();
    date.setDate(date.getDate() + newDay);
    const { data, error } = await supabase.from('TelegramChatMessageLock').insert([{ memberId: newMemberId, date: date }]);
    if (error) {
      console.error('Failed to add message lock:', error.message);
    } 
    else {
      await fetchMessageLocks();
      setNewMemberId('');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessageLocks();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 메시지 락 관리</p>

      <div className="mb-3">
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>날짜</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {messageLocks.map((lock) => (
              <tr key={lock.id}>
                <td>{lock.memberId}</td>
                <td>{new Date(lock.date).toLocaleString()}</td>
                <td><button onClick={() => deleteMessageLock(lock.id)}>삭제</button></td>
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

        <div className="mb-3">
          <label className="block font-bold mb-1">메시지 락 일수</label>
          <input
            type="number"
            value={newDay}
            onChange={(e) => { setNewDay(Number(e.target.value)); }}
            className="shadow py-2 px-3 border"
          /> 
        </div>

        <button
          type="button"
          className="shadow py-2 px-3 border bg-blue-500"
          disabled={loading}
          onClick={addMessageLock}
        >
          추가
        </button> 
      </div>
    </div>
  );
}
