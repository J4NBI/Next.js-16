import React from 'react'

async function User ({params}: {params: {slug: string}}) {
  const {slug} = await params;
  
    return (
    <div>
      <p>{slug}</p>
    </div>
  )
}

export default User 
