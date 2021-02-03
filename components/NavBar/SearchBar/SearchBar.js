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
      minHeight: 40,
      cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: () => ({
      color: '#000',
    }),
  };

  return (
    <div className={classes.wrap}>
      <Select
        options={categories}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder ="Categories"
        theme={theme => ({
          ...theme,
          borderRadius: '4px 0px 0px 4px',
        })}
      />
      <input/>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
