import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/404';
import '../../App.css';

function AdminPage({ data }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pw = params.get('pw');

  if (pw !== '방송부') {
    return <Error />;
  }

  return (
    <div>
      <head>
        <title>방송부 신청 응답</title>
      </head>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="box rounded-xl">
            <div>
              <div className="bg-[#5865f2] bg-opacity-85 w-full h-20 rounded-tl-xl rounded-tr-xl"></div>
            </div>
            <div>
              <div className="p-3 noto-sans-kr-400-normal">
                <div>
                  <p>학번이름</p>
                  <p>{item.name}</p>
                </div>
                <hr className='mt-2 mb-2' />
                <div>
                  <p>전화번호</p>
                  <p>{item.number}</p>
                </div>
                <hr className='mt-2 mb-2' />
                <div>
                  <p>신청일시</p>
                  <p>{item.created_at}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
