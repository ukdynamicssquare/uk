// components/DropdownComponent.js
import React, { useState, useEffect } from 'react';

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState('a');
  const [loading, setLoading] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setLoading(true);

    // Simulate async operation, replace with your actual data fetching logic
    setTimeout(() => {
      setSelectedOption(selected);
      setLoading(false);
    }, 1000);
  };

  const handleButtonClick = () => {
    setShowSelect(true);
  };

  const handleCloseClick = () => {
    setShowSelect(false);
  };

  useEffect(() => {
    // You can perform additional side effects here if needed
  }, [selectedOption]);

  return (
    <div>
      {/* {!showSelect && <a className="btn-get-started scrollto" onClick={handleButtonClick}>Check your status </a>
      
      } */}
      <a className="btn-get-started scrollto" onClick={handleButtonClick}>Check your status </a>
      {showSelect && (
        <>
          {/* <div className="header">
            <button className="close" onClick={handleCloseClick}>
              X
            </button>
          </div> */}
          <div className='nav-v-h'>
            <h2>Please select Nav version.</h2>
            <hr />

            <select className='form-select' id="select_box" onChange={handleSelectChange} value={selectedOption} disabled={loading}>
              <option value="a">Select Nav Version</option>
              <option value="b">Dyanmics NAN 2009 R2</option>
              <option value="c">Dyanmics NAN 2013</option>
              <option value="d">Dyanmics NAN 2013 R2</option>
              <option value="e">Dyanmics NAN 2015</option>
              <option value="f">Dyanmics NAN 2016</option>
              <option value="g">Dyanmics NAN 2017</option>
              <option value="h">Dyanmics NAN 2018</option>
            </select>
          </div>
          {loading && <div className='center-loading'>Loading...</div>}
          {!loading && (
            <>

              <div className='mob-them'>
                <div id="a" className={selectedOption === 'a' ? '' : 'hide'}>
                  {/* <h2>Select Nav Version</h2> */}
                </div>
                <div id="b" className={selectedOption === 'b' ? '' : 'hide'}>
                  <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="c" className={selectedOption === 'c' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="d" className={selectedOption === 'd' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="e" className={selectedOption === 'e' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="f" className={selectedOption === 'f' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="g" className={selectedOption === 'g' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
                <div id="h" className={selectedOption === 'h' ? '' : 'hide'}>
                <div className='prod'>
                    <h3><span className='hh'>Product Name :</span>Dyanmics NAN 2009 R2</h3>
                    <div className='star-date stds'>Start Date : <span>2011-03-15</span></div>
                    <div className='end-date stds'>Mainstream Date : <span>2015-01-13</span></div>
                    <div className='ext-date stds'>Extended End Date : <span>2020-01-14</span></div>
                    <div className='result'>
                      <p className='red blue'>Your Dynamics NAV version is expired </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
      <style jsx>{`
      .prod{}
      .prod h3{
        font-size: 16px;
        margin-bottom: 20px;
        color: #2b4c76;
      }
      .prod .hh{
        margin-right: 10px;
   
    color: #353535;
      }
      .stds{
        font-size: 16px;
        margin-bottom: 15px;
        color: #353535;
        font-weight: 500;
      }
      .stds span{
        margin-right: 10px;
        color: #2b4c76;
        font-weight: 600;
      }
.red{
  color: white;
  background: #9d2828;
  margin-top: 25px;
  padding: 9px 20px;
}
.red.blue{
  background: #0050b5;
}

      .mob-them{
        padding:30px 0px 0px 0px
      }
      .center-loading{
        padding:20px;
        color:red
      }
      .nav-v-h .form-select{
        width: 50%;
      }
      .nav-v-h h2{
        font-size: 24px;
        color: #1d3557;
        padding-top: 35px;
      }
        .hide {
          display: none;
        }

        .header-neww {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  );
};

export default DropdownComponent;
