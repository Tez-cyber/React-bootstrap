import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company Information</h6>
                    <hr />
                    <p className='text-white'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Laudantium, numquam debitis quo sapiente quia ratione quos 
                        veniam officiis sint cum reprehenderit facere est atque enim 
                        consequuntur, facilis odit ipsam necessitatibus.Totam, 
                        cupiditate animi? Enim accusantium alias expedita cum in 
                    </p>
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr />
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div>
                        <Link to="/">Blog</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr />
                    <div>
                        <p className="text-white mb-1">364, Bangalore Karnataka India, Byrathi</p>
                    </div>
                    <div>
                        <p className="text-white mb-1">+234 7059269642</p>
                    </div>
                    <div>
                        <p className="text-white mb-1">+234 705926964</p>
                    </div>
                    <div>
                        <p className="text-white mb-1">email@domain.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
