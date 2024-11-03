import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Categories = ( {categories}) => {
    return (
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            key={category.category}
            role="tab"
            to={`/category/${category.category}`}
            // className={({isActive}) => `tab text-2xl ${isActive ?  'tab-active' : ''}`}
            className={({ isActive }) =>`tab font-semibold text-2xl ${isActive ? "tab-active text-amber-500" : ""}`} 
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;