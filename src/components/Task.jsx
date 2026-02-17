import React from 'react'

export default function Task({title, date, key, status}) {
  return (
    <div style={{display:"flex", justifyContent:'space-evenly'}}>
    <div>{title}</div>
    <div>{date}</div>
    <div>{String(status)}</div>
    </div>
  )
}
