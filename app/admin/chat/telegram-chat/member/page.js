"use client"
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import './Pagination.css';
import Pagination from "react-js-pagination";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function MemberPage() {
  const [page, setPage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(100);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    setLoading(true);

    const { count } = await supabase
    .from('TelegramChatMember')
    .select('*', { count: 'exact', head: true });
    setTotalItemsCount(count);

    const { data, error } = await supabase
      .from('TelegramChatMember')
      .select('*')
      .order('date', { ascending: false })
      .limit(itemsCountPerPage)
      .range(page-1, page-1 + (itemsCountPerPage - 1))
     
    setMembers(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, [page]);

  const handlePointChange = (memberId, newPoint) => {
    const updatedMembers = members.map(member => {
      if (member.memberId === memberId) {
        return { ...member, point: newPoint };
      }
      return member;
    });
    setMembers(updatedMembers);
  };

  const updateMemberPoint = async (memberId, newPoint) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('TelegramChatMember')
      .update({ point: newPoint })
      .match({ memberId: memberId });

    if (error) {
      alert('포인트 수정에 실패했습니다.');
    } 
    else {
      alert('포인트가 성공적으로 수정 되었습니다.');
      fetchMembers(); // 리스트를 새로고침하여 업데이트된 정보를 반영
    }
    setLoading(false);
  };

  const deleteMember = async (memberId) => {
    if (window.confirm("정말로 삭제 하시겠습니까?")) {
      setLoading(true);
      const { data, error } = await supabase
        .from('TelegramChatMember')
        .delete()
        .match({ memberId: memberId });

      if (error) {
        alert(`회원 삭제에 실패했습니다. ${error.message}`);
      } 
      else {
        alert('회원이 성공적으로 삭제되었습니다.');
        fetchMembers(); // 리스트를 새로고침하여 삭제된 회원을 반영
      }
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };
  
  if (loading) 
    return <p>Loading...</p>;

  return (
    <div>
      <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 회원 관리</p>

      <div className="mb-3">
        <p>회원 데이터 다운로드 (<a href="/api/chat/telegram-chat/member/download?format=csv">csv</a>, <a href="/api/chat/telegram-chat/member/download?format=json">json</a>)</p> 
        <p>{totalItemsCount} 명</p>
      </div>

      <table className="mb-3">
        <thead>
          <tr>
            <th>아이디</th>
            <th>닉네임</th>
            <th>포인트</th>
            <th>출석 일수</th>
            <th>메시지 수</th>
            <th>가입 날짜</th>
            <th>포인트 수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td><a href={`/admin/chat/telegram-chat/member/info/${member.memberId}`}>{member.memberId}</a></td>
              <td>{member.nickName}</td>
              <td>
                <input
                  type="number"
                  value={member.point}
                  onChange={(e) => handlePointChange(member.memberId, e.target.value)}
                />
              </td>
              <td>{member.attendanceCount}</td>
              <td>{member.messageCount}</td>
              <td>{new Date(member.date).toLocaleString()}</td>
              <td>
                <button onClick={() => updateMemberPoint(member.memberId, member.point)}>포인트 수정</button>
              </td>
              <td>
                <button onClick={() => deleteMember(member.memberId)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        activePage={page}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
}
