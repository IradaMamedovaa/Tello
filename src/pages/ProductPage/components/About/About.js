import React from 'react'
import './About.scss'
 
const About = ({description}) => {
  return (
    <div className='about'>
        <div className="titles">
            <p >Texniki Xüsusiyyətləri</p>
        </div>
        <div className="characteristics">
            <div className="main">
                <div>
                    <p className='title'>Əsas göstəricilər</p>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                </div>
                <div>
                    <p className='title'>Əsas göstəricilər</p>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                </div>
                <div>
                    <p className='title'>Əsas göstəricilər</p>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                    <div><p>İstehsalçı</p> <p>Apple</p></div>
                </div>
            </div>
            <div className="details">
                <p className='title'>Məhsul haqqında</p>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
                {/* <p>{dangerouslySetInnerHTML}</p> */}
            </div>
        </div>
    </div>
  )
}

export default About