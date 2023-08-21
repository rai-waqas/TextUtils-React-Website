import React from 'react'

export default function About(props) {
  return (
    <>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black' }}>
            <h1 className='container my-2' >About Us</h1>
                <p className='container my-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Itaque tempora suscipit esse iure, dicta repudiandae dolorum inventore magni. 
                    Omnis dolore libero adipisci repellat doloribus quas labore exercitationem culpa 
                    eveniet quibusdam.
                </p>
        </div>
    </>
  )
}
