import React from 'react';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import classes from './ProductVariation.module.scss';

const ProductVariation = ({error, variation, setVariation }) => {
  console.log("variation validate inside value", error);
  const addedVariations = [];

  const variationChangeHandler = (e, data, name) => {
    const index = addedVariations.findIndex((v) => v.name === name);
    if (index !== -1) {
      addedVariations.splice(index, 1);
      addedVariations.push({ name: name, value: data.value });
    }else{
      addedVariations.push({ name: name, value: data.value });
    }

    setVariation(addedVariations);
  };
  
  return (
    <div className={classes.container}>
      {variation.map((vari) => (
        <div className={classes.wrap}>
          <span>{vari.name}</span>
          <Dropdown
            onChange={(e, data) => variationChangeHandler(e, data, vari.name)}
            placeholder="Select value"
            error={error}
            options={vari.values.map((val) => ({
              key: val,
              text: val,
              value: val,
            }))}
            selection
          />
        </div>
      ))}
    </div>
  );
};

export default ProductVariation;
