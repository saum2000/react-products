import React from 'react';

interface FilterProps {
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}
const HorizontalFilters: React.FC<FilterProps> = ({ selectedOption, setSelectedOption }) => {

    const options = [
        { 
            label: "All" 
        },
        {
            label: "Women's Clothing",
        },
        {
            label: "Men's Clothing",
        },
        {
            label: "Jewelery",
        },
        {
            label: "Electronics",
        },
    ]
    return (
        <div className="row-base">
            <section className="horizontal-filters-base">
                <div>
                    <div className="horizontal-filters-sortContainer">
                        <div>
                            <div>
                                <div className="sort-sortBy">
                                    Categories : <span> {selectedOption ? selectedOption : 'Select an option'}</span>
                                    <ul className="sort-list">
                                        <div className="options">
                                            {options.map((option) => (
                                                <li key={option.label}><label className="sort-label"><input type="radio" value={option.label} onClick={()=>setSelectedOption(option.label)} />{option.label}</label></li>
                                            ))}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-summary-selectedFilterContainer filter-summary-hidden">
                    <ul className="filter-summary-filterList"></ul>
                </div>
            </section>
        </div>
    );
};

export default HorizontalFilters;
