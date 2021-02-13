import React,{useState} from 'react';
import Select from 'react-select';
import classes from './SearchBar.module.scss';

const SearchBar = (props) => {


  const categories = [
    { value: 'all', label: 'All' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = useState(0);


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    container: (provided) => ({
      ...provided,
      width: 150,
    }),
    control: (provided) => ({
      ...provided,
      height: 40,
      cursor: 'pointer',
      borderRadius: '4px 0px 0px 4px',

    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: () => ({
      color: '#000',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: 'inherit',
    }),
  };

  return (
    <div className={classes.wrap}>
      {/* <Select
        options={categories}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder ="Categories"
      /> */}
      <input/>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
