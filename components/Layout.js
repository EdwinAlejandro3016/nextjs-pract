import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children,title = 'My App'}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <nav >
            <div >
                <h1>My App</h1>
            </div>
            <div >
                <ul>
                    <li >
                        <Link href={'/'}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>
                            <a>posts</a>
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
        <main>
            {children}
        </main>
        <footer>Footer</footer>
    </>
  )
}


export default Layout