"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function TelegramChatWelcomeMessageButtonPage() {
  const [welcomeMessageButtons, setWelcomeMessageButtons] = useState([]);
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [selectedButtonName, setSelectedButtonName] = useState('');
  const [selectedButtonUrl, setSelectedButtonUrl] = useState('');
  const [selectedButtonPriority, setSelectedButtonPriority] = useState(1);
  const [newButtonName, setNewButtonName] = useState('');
  const [newButtonUrl, setNewButtonUrl] = useState('');
  const [newButtonPriority, setNewButtonPriority] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchWelcomeMessageButtons = async () => {
    setLoading(true);
    const { data, error } = await supabase
    .from('TelegramChatWelcomeMessageButton')
    .select('*')
    .order("priority");
    if (!error) {
      setWelcomeMessageButtons(data);
    } 
    else {
      console.error('Failed to fetch welcome message buttons:', error.message);
    }
    setLoading(false);
  };

  const updateWelcomeMessageButton = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('TelegramChatWelcomeMessageButton')
      .update({
        name: selectedButtonName,
        url: selectedButtonUrl,
        priority: selectedButtonPriority
      })
      .eq('id', selectedButtonId);
    if (error) {
      console.error('Failed to update welcome message button:', error.message);
    } 
    else {
      await fetchWelcomeMessageButtons();
      setSelectedButtonId(null);
    }
    setLoading(false);
  };

  const deleteWelcomeMessageButton = async (id) => {
    const confirmDelete = window.confirm("정말로 삭제 하시겠습니까?");
    if (!confirmDelete) 
      return;

    setLoading(true);
    const { error } = await supabase
      .from('TelegramChatWelcomeMessageButton')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Failed to delete welcome message button:', error.message);
    } 
    else {
      await fetchWelcomeMessageButtons();
    }
    setLoading(false);
  };

  const addWelcomeMessageButton = async () => {
    setLoading(true);
    const { data, error } = await supabase
    .from('TelegramChatWelcomeMessageButton')
    .insert(
      [{ name: newButtonName, url: newButtonUrl, priority: newButtonPriority }]
    );
    if (error) {
      console.error('Failed to add welcome message button:', error.message);
    } 
    else {
      await fetchWelcomeMessageButtons();
      setNewButtonName('');
      setNewButtonUrl('');
      setNewButtonPriority(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWelcomeMessageButtons();
  }, []);

  if (loading) 
    return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 환영 메시지 버튼 관리</p>

      <div className="mb-3">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>URL</th>
              <th>우선순위</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {welcomeMessageButtons.map((button) => (
              <tr key={button.id}>
                <td>{selectedButtonId === button.id ? <input type="text" value={selectedButtonName} onChange={(e) => setSelectedButtonName(e.target.value)} /> : button.name}</td>
                <td>{selectedButtonId === button.id ? <input type="text" value={selectedButtonUrl} onChange={(e) => setSelectedButtonUrl(e.target.value)} /> : button.url}</td>
                <td>{selectedButtonId === button.id ? <input type="number" value={selectedButtonPriority} onChange={(e) => setSelectedButtonPriority(Number(e.target.value))} /> : button.priority}</td>
                <td>
                  {selectedButtonId === button.id ? (
                    <button onClick={updateWelcomeMessageButton}>저장</button>
                  ) : (
                    <button onClick={() => {
                      setSelectedButtonId(button.id);
                      setSelectedButtonName(button.name);
                      setSelectedButtonUrl(button.url);
                      setSelectedButtonPriority(button.priority);
                    }}>수정</button>
                  )}
                </td>
                <td><button onClick={() => deleteWelcomeMessageButton(button.id)}>삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <p className="mb-3 text-lg font-bold">추가</p>

        <div className="mb-3">
          <label className="block font-bold mb-1">이름</label>
          <input
            type="text"
            value={newButtonName}
            onChange={(e) => { setNewButtonName(e.target.value); }}
            className="shadow py-2 px-3 border"
          /> 
        </div>

        <div className="mb-3">
          <label className="block font-bold mb-1">URL</label>
          <input
            type="text"
            value={newButtonUrl}
            onChange={(e) => { setNewButtonUrl(e.target.value); }}
            className="shadow py-2 px-3 border"
          /> 
        </div>

        <div className="mb-3">
          <label className="block font-bold mb-1">우선순위</label>
          <input
            type="number"
            value={newButtonPriority}
            onChange={(e) => { setNewButtonPriority(Number(e.target.value)); }}
            className="shadow py-2 px-3 border"
          /> 
        </div>

        <button
          type="button"
          className="shadow py-2 px-3 border bg-blue-500"
          disabled={loading}
          onClick={addWelcomeMessageButton}
        >
          추가
        </button> 
      </div>
    </div>
  );
}
