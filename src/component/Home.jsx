import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'
import jsonfile from './CA.json'

const Home = () => {


    return (
        <div>
            <div className="home-wrapper">
                <div className="home-content">
                    <div className="input">
                        <input type="text" className='in' placeholder='Search Here...' />
                    </div>





                    <div className="cards">
                        {
                            jsonfile.map((index) => {
                                return (
                                    <>
                                        <div class="card">
                                            <img src={index.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{index.name}</h5>
                                                <p class="card-text">{index.intro}</p>
                                                <div className="button3">
                                                    <NavLink className="btn button2 btn-primary" to={`/individual/${index.id}`} >More about me</NavLink>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>






                </div>
            </div>

        </div>
    )
}

export default Home
