import React from 'react';
const Disc = () => {
    return (

        <div>
            <h1 className='text-center text-success my-5'> Bootstrap cards</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/1167050/pexels-photo-1167050.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Flower1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Read more</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Flower2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Read more</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Flower3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Read more</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Flower4</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Read more</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Disc;