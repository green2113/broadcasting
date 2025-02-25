import '../../css/main.css';
import React, { useState } from 'react';
import { supabase } from '../../supabase';

function Main() {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('broadcasting').insert(formData);

    if (error) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      console.log(error);
    } else {
      alert('성공적으로 제출되었습니다.');
      setFormData({
        name: '',
        number: ''
      });
    }
  }
  

  return (
    <div>
      <head>
        <title>방송부 신청</title>
      </head>
      <form className="mt-3 max-w-2xl mx-auto flex flex-col" onSubmit={handleSubmit}>
        <div className="rounded-lg form-box">
          <div className="bg-[#5865f2] bg-opacity-85 w-full h-36 rounded-tl-lg rounded-tr-lg"></div>
          <div className="p-5">
            <h1 class="noto-sans-kr-900-normal text-3xl">방송부 신청</h1>
            <div>
              <p class="noto-sans-kr-400-normal mt-1">방송부 신청을 위해 아래에 정보를 입력해주세요.<br/><a href='https://samgong-h.notion.site' className="underline" target='_blank' rel='noopener noreferrer'>여기</a>를 클릭해 학사일정에서 자세한 일정을 볼 수 있습니다.<br/><br/><span className='text-red-600 noto-sans-kr-600-normal'>양식은 제출 후 수정할 수 없습니다.</span></p>
            </div>
            <div className="mt-4">
              <div className="noto-sans-kr-400-normal bg-gray-100 max-w-max rounded-3xl" style={{padding: "8px 18px", fontSize: "14px"}}>
                <p style={{opacity: '.7'}}>2025.03.04. 오전 8시 ~ 2025.03.06. 오후 8시</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="required text-red-600 noto-sans-kr-500-normal mt-1 mb-1">
            필수사항
          </div>
        </div>
        <div className="rounded-lg form-box">
          <div class="p-4">
            <div className="noto-sans-kr-600-normal title required-box">
              1. 학번이름
            </div>
            <div className="noto-sans-kr-400-normal mt-0.5 description">
              <p>예) 1101 홍길동</p>
            </div>
            <div className="mt-4">
              <textarea name="name" className="noto-sans-kr-400-normal w-full textarea bg-[#f7f8fb] rounded-lg" value={formData.name} rows="1" placeholder='학번이름을 입력해주세요.' spellCheck="false" autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength={100} onInput={(e) => {e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"}} onChange={handleChange} required></textarea>
            </div>
          </div>
        </div>
        <div className="rounded-lg form-box mt-6">
          <div class="p-4">
            <div className="noto-sans-kr-600-normal title required-box">
              2. 전화번호
            </div>
            <div className="noto-sans-kr-400-normal mt-0.5 description">
              <p>예) 010-1234-5678</p>
            </div>
            <div className="mt-4">
              <textarea name="number" className="noto-sans-kr-400-normal w-full textarea bg-[#f7f8fb] rounded-lg" value={formData.number} rows="1" placeholder='전화번호를 입력해주세요.' spellCheck="false" autoComplete='off' autoCorrect='off' autoCapitalize='off' maxLength={15} onInput={(e) => {e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"}} onChange={handleChange} required></textarea>
            </div>
          </div>
        </div>
        <div className="p-4 mx-auto">
          <button type="submit" class="bg-[#5865f2] text-white w-28 p-2 rounded-md noto-sans-kr-400-normal">제출</button>
        </div>
      </form>
    </div>
  );
}

export default Main;
