import React from 'react'
import './FiltersList.scss'

const FiltersList = (props) => {

    const  {filterByABV, filterByPH} = props

    return (
        <div className="filters__section">
            <p>Filter Faculty By:</p>
            <div className="filtersList">
                <div className="filtersList__filter">
                    <input onClick={filterByABV} type="checkbox" id="abv" name="abv" />
                    <label htmlFor="abv">Teachers</label>
                </div>
                <div className="filtersList__filter">
                    <input onClick={filterByPH} type="checkbox" id="ph" name="ph" />
                    <label htmlFor="ph">Students</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList
