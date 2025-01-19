import React from 'react'

export default function Pagination(props) {
    const Pagination = () => {
        let pages = [];

        for(let i = 1; i<= Math.ceil(props.totalPosts/props.postsPerPage); i++){
            pages.push(i);
        }
        return pages;
    }
  return (
    <div className='pagination'>{Pagination().map((ele, index) => {
        return <button key={index} onClick={() => props.setCurrentPage(ele)}>{ele}</button>
    })}</div>
  )
}
