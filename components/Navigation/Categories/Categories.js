import React from 'react';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';

import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import classes from './Categories.module.scss'
import useTranslation from 'next-translate/useTranslation'


const Categories = () => {

    const { t } = useTranslation('common')


    return (
        <Dropdown autoOpen className={classes.categories}>
            <Dropdown.Toggle title= {t('Nav-cat')} />
            <Dropdown.Menu className={classes.menu}>
                <MenuItem className={classes.item}>
                    Menu item one
                    <MenuItem className={classes.item}>
                        Second level item one
                    </MenuItem>
                </MenuItem>
                <MenuItem className={classes.item}>
                    Menu item two
                </MenuItem>
                <MenuItem className={classes.item}>
                    Menu item three
                </MenuItem>
                <MenuItem className={classes.item}>
                    Menu item four
                    <MenuItem className={classes.item}>
                        Second level item one
                    </MenuItem>
                    <MenuItem className={classes.item}>
                        Second level item two
                    </MenuItem>
                    <MenuItem className={classes.item}>
                        Second level item three
                    </MenuItem>
                </MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Categories;