import React from 'react'
import ToLam from '../GuanKiann/ToLam/ToLam'
import FBTest from '../FBTest/FBTest'

import './App.css'

export default class App extends React.Component {
  kong(k) {
    this.props.history.replaceState(null, '/k/' + k)
  }

  render() {
    return (
    <div className='app background'>
      <header className='app header'>
        <ToLam/>
      </header>
      {React.cloneElement(this.props.children,
      {handleKong: this.kong.bind(this), 後端網址: 'http://db.itaigi.tw/'}
    )}
      <FBTest/>
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <a href='https://g0v.hackpad.com/moed7ct-taigi-neologism'>Hackpad</a>
          </li>
          <li className='item'>
            授權條款
          </li>
          <li className='item'>
            <a href='https://g0v.tw/'>g0v</a>
          </li>
          <li className='item'>
            <a href='https://github.com/g0v/itaigi'>GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
    )
  }
}

App.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.object
}
