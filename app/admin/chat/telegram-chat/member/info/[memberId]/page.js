"use client"
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function MemberPage() {
    const params = useParams();
    const [member, setMember] = useState(null);
    const [messageLock, setMessageLock] = useState(null);

    useEffect(() => {
        const fetchMemberAndMessageLock = async () => {
            const { data: memberData, error: memberError } = await supabase
                .from('TelegramChatMember')
                //.select("*")
                .select(`
                    *,
                    TelegramChatAttendanceLog(*),
                    TelegramChatMessageLog(*),
                    TelegramChatPresentLog(*),
                    TelegramChatPointLog(*)
                `)
                .eq('memberId', params.memberId)
                .single();

            setMember(memberData);

            const today = new Date();
            const { data: messageLocks, error } = await supabase
                .from('TelegramChatMessageLock')
                .select('*')
                .eq('memberId', params.memberId)
                .gte('date', today.toISOString())
            if (messageLocks.length > 0) {
                setMessageLock(messageLocks[0]);
            }
        };

        fetchMemberAndMessageLock();
    }, [params.id]);

    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p className="mb-3 text-lg font-bold">텔레그램 챗 관리 &gt; 회원 관리 &gt; 회원 정보</p>

            <div className="mb-3">
                <p>아이디: {member.memberId}</p>
                <p>닉네임: {member.nickName}</p>
                <p>포인트: {member.point}</p>
                <p>출석 일수: {member.attendanceCount}</p>
                <p>메시지 수: {member.messageCount}</p>
                <p>가입 날짜: {new Date(member.date).toLocaleString()}</p>
                {messageLock && (
                    <p style={{color: 'red'}}>메시지 쓰기 제한: {new Date(messageLock.date).toLocaleString()} 까지</p>
                )}
            </div>

            <div className="mb-3">
                <p>출석 로그:</p>
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member.TelegramChatAttendanceLog.map((log) => (
                            <tr key={log.id}>
                                <td>{new Date(log.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-3">
                <p>선물 로그:</p>
                <table>
                    <thead>
                        <tr>
                            <th>보낸 포인트</th>
                            <th>받은 포인트</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member.TelegramChatPresentLog.map((log) => (
                            <tr key={log.id}>
                                <td>{log.sendPoint}</td>
                                <td>{log.receivePoint}</td>
                                <td>{new Date(log.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-3">
                <p>포인트 로그:</p>
                <table>
                    <thead>
                        <tr>
                            <th>추가된 포인트</th>
                            <th>현재 포인트</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member.TelegramChatPointLog.map((log) => (
                            <tr key={log.id}>
                                <td>{log.addPoint}</td>
                                <td>{log.currentPoint}</td>
                                <td>{new Date(log.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-3">
                <p>메시지 로그:</p>
                <table>
                    <thead>
                        <tr>
                            <th>메시지</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {member.TelegramChatMessageLog.map((log) => (
                            <tr key={log.id}>
                                <td>{log.message}</td>
                                <td>{new Date(log.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
