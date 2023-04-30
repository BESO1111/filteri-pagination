import React from 'react'

export default function Paginationn({postsperpage,totalposts,paginate}) {
 
 let pagenumber=[];

 for (let i=1;i<=Math.ceil(totalposts/postsperpage);i++){
pagenumber.push(i);

 }
 
    return (
    <div className='divpagination'>

{pagenumber.map(number=><p className='pagi' onClick={()=>paginate(number)}>{number} </p>)}

    </div>
  )
}
