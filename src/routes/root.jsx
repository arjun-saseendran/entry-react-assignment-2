import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function root() {
  return (
    <>
    <header>
<Header/>
    </header>
    <main>
<Outlet/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default root