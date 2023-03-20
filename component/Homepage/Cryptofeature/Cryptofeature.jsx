import React from 'react'

const Cryptofeature = () => {
    return (
        <>
            {/* feature section  */}
            <div className="feature-section pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>Bitcoin</span>
                                    <h3>USD 90,360.50</h3>
                                    <p>BTC</p>
                                </div>
                                <div className="shape">
                                    <img src="assets/images/new/back.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit2.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>Ethereum</span>
                                    <h3>USD 630.00</h3>
                                    <p>ETH</p>
                                </div>
                                <div className="shape">
                                    <img src="assets/images/new/back2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-box">
                                <div className="feature-thumb">
                                    <img src="assets/images/new/bit3.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <span>Tether</span>
                                    <h3>USD 299.08</h3>
                                    <p>THR</p>
                                </div>
                                <div className="shape">
                                    <img src="assets/images/new/back3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cryptofeature;