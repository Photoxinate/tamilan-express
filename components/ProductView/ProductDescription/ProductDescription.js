import React, { useRef, useEffect } from 'react';
import classes from './ProductDescription.module.scss';

const ProductDescription = ({ description, warranty }) => {
  const descEl = useRef();
  const warrantyEl = useRef();
  const warrantyBtn = useRef();
  const descBtn = useRef();

  useEffect(() => {
    descBtn.current.style.border = '2px solid #505050';
    descEl.current.style.display = 'block';
    warrantyEl.current.style.display = 'none';
  }, []);

  const toggleDesc = (e, type) => {
    if (type === 'description') {
      descBtn.current.style.border = '2px solid #505050';
      warrantyBtn.current.style.border = '2px solid transparent';
      warrantyEl.current.style.display = 'none';
      descEl.current.style.display = 'block';
    }
    if (type === 'warranty') {
      warrantyBtn.current.style.border = '2px solid #505050';
      descBtn.current.style.border = '2px solid transparent';
      descEl.current.style.display = 'none';
      warrantyEl.current.style.display = 'block';
    }
  };
  return (
    <div className={classes.wrap}>
      <div className={classes.tab}>
        <button ref={descBtn} onClick={(e) => toggleDesc(e, 'description')}>
          Description
        </button>
        <button ref={warrantyBtn} onClick={(e) => toggleDesc(e, 'warranty')}>
          Warranty
        </button>
      </div>
      <div ref={descEl} className={classes.tabcontent}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div ref={warrantyEl} className={classes.tabcontent}>
        <div dangerouslySetInnerHTML={{ __html: warranty }} />
      </div>
    </div>
  );
};

export default ProductDescription;
