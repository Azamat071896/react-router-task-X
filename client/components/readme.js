import React from 'react'
import Markdown from 'markdown-to-jsx'
import Hashloader from 'react-spinners/RingLoader'
import './readme.scss'

const Readme = (props) => {
  if (!props.readme) {
    return (
      <div className="flex items-center justify-center h-64">
        <Hashloader size={40} color="#123abc" />
      </div>
    )
  }
  return (
    <div className="flex">
      <Markdown className="markdown-body m-auto ">{props.readme}</Markdown>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
