import './Filter.css';

function Filter({ currentFilter, onFilterChange }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="task-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={currentFilter === filter ? 'filter-button selected' : 'filter-button'}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;