import React from 'react';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import classes from './ProductVariation.module.scss';

const ProductVariation = ({error, addedVariations, variation, setVariation }) => {
  const aVariations = [...addedVariations]
  const variationChangeHandler = (e, data, name) => {
    const index = aVariations.findIndex((v) => v.name === name);
    if (index !== -1) {
      console.log();
      aVariations.splice(index, 1);
      aVariations.push({ name: name, value: data.value });
    console.log("removed added variations", aVariations);

    }else{
      aVariations.push({ name: name, value: data.value });
    console.log("added variations", aVariations);
    }
    console.log("variations", aVariations);
    setVariation(aVariations);
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
