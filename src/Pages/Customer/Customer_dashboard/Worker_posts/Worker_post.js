import React from 'react';
import './Worker_post.css'

export default function Worker_post(props) {
    return (
        <div className="container mt-4">
            <div className="card cardall">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://via.placeholder.com/100" className="d-block w-100" alt="Photo 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://via.placeholder.com/100" className="d-block w-100" alt="Photo 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://via.placeholder.com/100" className="d-block w-100" alt="Photo 3" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-between">
                                <h2 className="card-title">Creative Graphic Designer Available for Hire</h2>
                            </div>
                            <h5 className="card-subtitle mb-3">Username: DesignWizard</h5>
                            <p className="card-text">Highly skilled graphic designer with 8+ years of experience in creating
                                captivating designs. Proficient in Adobe Creative Suite and skilled in both print and
                                digital media. Experienced in creating captivating designs for various clients and
                                businesses. Looking forward to working on exciting new projects.</p>
                            <p className="card-text">Category: Graphic Design</p>
                            <p className="card-text">Location: New York City</p>
                            <p className="card-text">Expected Time to Complete: 1 week</p>
                            <p className="card-text">Hashtags: #GraphicDesign #AdobeSuite #PrintMedia</p>
                            <div className="container-fluid">
                                <div className="row">
                                    <span className="ms-auto text-right">
                                        $500
                                    </span>
                                    <span align="right" className="me-auto text-right">
                                        <span className="btn btn-outline-primary" >Like</span>
                                        <span className="btn btn-outline-primary" >Add Rating</span>
                                        <a href="#" className="btn btn-primary">View More</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    <small>Posted on: October 15, 2023</small>
                </div>
            </div>
        </div>
    );
}
