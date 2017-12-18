import React from 'react'
import { string } from 'prop-types'

// import style from './styles.css'

Stateless.propTypes = {
  title: string
}

const Stateless = ({ title = 'React' }) => <div>{title}</div>

// function Stateless({ title = 'React' }) {
//     return ( <div>{title}</div> )
// }
