import React from 'react';

function AdminPage({data}) {
  return(
    <div>
      <head>
        <title>방송부 신청 응답</title>
      </head>
      <div>
        <div>
          {data.map((item, index) => (
            <div>
              {item.name} - {item.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminPage;