import Slider from "../inc/Slider"
import { Link } from 'react-router-dom'
import Vmc from './inc/Vmc'
import Service1 from '../images/img-20.jpg' 


const Home = () => {
    return(
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="main-heading">Our company</div>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia quibusdam consequuntur nostrum libero quidem sunt vitae tempore eum optio corporis molestias distinctio fugiat voluptatibus, rem illo vero? Repellat, debitis!
                                Optio voluptates enim qui at aspernatur odio iste modi voluptatibus, similique dolore iure quasi debitis, consectetur vel earum tenetur, dolor pariatur provident deleniti sint ut inventore sapiente nobis tempora. Vitae?
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our vision, mission and values */}
            <Vmc />

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <div className="main-heading">Our Services</div>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint rem esse corrupti optio ipsam commodi sunt possimus qui eligendi ad suscipit similique illo alias architecto, distinctio delectus iste magni.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint rem esse corrupti optio ipsam commodi sunt possimus qui eligendi ad suscipit similique illo alias architecto, distinctio delectus iste magni.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint rem esse corrupti optio ipsam commodi sunt possimus qui eligendi ad suscipit similique illo alias architecto, distinctio delectus iste magni.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home