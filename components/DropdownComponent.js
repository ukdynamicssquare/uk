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
          <div>
                <h2>Default division</h2>
                <hr />
              </div>
          <select  class="form-select" id="select_box" onChange={handleSelectChange} value={selectedOption} disabled={loading}>
            <option value="a">Select Nav Version</option>
            <option value="b">Dyanmics NAN 2009 R2</option>
            <option value="c">Dyanmics NAN 2013</option>
            <option value="d">Dyanmics NAN 2013 R2</option>
            <option value="e">Dyanmics NAN 2015</option>
            <option value="f">Dyanmics NAN 2016</option>
            <option value="g">Dyanmics NAN 2017</option>
            <option value="h">Dyanmics NAN 2018</option>
          </select>
          {loading && <div>Loading...</div>}
          {!loading && (
            <>
             
              <div id="a" className={selectedOption === 'a' ? '' : 'hide'}>
                {/* <h2>Select Nav Version</h2> */}
              </div>
              <div id="b" className={selectedOption === 'b' ? '' : 'hide'}>
                <h2>Dyanmics NAN 2009 R2</h2>
              </div>
              <div id="c" className={selectedOption === 'c' ? '' : 'hide'}>
                <h2>This is id #c</h2>
              </div>
              <div id="d" className={selectedOption === 'd' ? '' : 'hide'}>
                <h2>This is id #d</h2>
              </div>
              <div id="e" className={selectedOption === 'e' ? '' : 'hide'}>
                <h2>This is id #e</h2>
              </div>
              <div id="f" className={selectedOption === 'f' ? '' : 'hide'}>
                <h2>This is id #f</h2>
              </div>
              <div id="g" className={selectedOption === 'g' ? '' : 'hide'}>
                <h2>This is id #g</h2>
              </div>
              <div id="h" className={selectedOption === 'h' ? '' : 'hide'}>
                <h2>This is id #h</h2>
              </div>
            </>
          )}
        </>
      )}
      <style jsx>{`
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
