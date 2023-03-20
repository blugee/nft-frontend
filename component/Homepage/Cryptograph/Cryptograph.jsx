import React from 'react'

const Cryptograph = () => {
    return (
        <>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.js"></script>
            <div className="graph-section style-three pb-100">
                <div className="container">
                    <div className="row upper14">
                        <div className="col-lg-9">
                            <div className="dreamit-section-title  pb-20">
                                <div className="dreamit-section-main-title">
                                    <h1>1 CNL = 0.0013 BTC</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="right-side-graph-btn">
                                <a href="Javascript:void(0);">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="row upper15  pt-20">
                        <div className="col-lg-6 col-md-12">
                            <div className="single-chart">
                                <canvas id="myChart" width="500" height="500"></canvas>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another1"> <span>12%</span>Reserved Funding</li>
                                                <li className="another2"> <span>8%</span>Product Development</li>
                                                <li className="another3"> <span>40%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another4"> <span>40%</span>Bounty Campaign</li>
                                                <li className="another5"> <span>20%</span>Reserved Funding</li>
                                                <li className="another6"> <span>15%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape12">
                                    <img src="assets/images/shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="single-chart-two">
                                <canvas id="yourChart" width="350" height="350"></canvas>
                                <div className="row upper13">
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another1"> <span>12%</span>Reserved Funding</li>
                                                <li className="another2"> <span>8%</span>Product Development</li>
                                                <li className="another3"> <span>40%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="chart-menu">
                                            <ul>
                                                <li className="another4"> <span>40%</span>Bounty Campaign</li>
                                                <li className="another5"> <span>20%</span>Reserved Funding</li>
                                                <li className="another6"> <span>15%</span>Bounty Campaign</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape13">
                                    <img src="assets/images/shape2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cryptograph