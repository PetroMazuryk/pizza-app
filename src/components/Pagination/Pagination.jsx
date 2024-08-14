import ReactPaginate from 'react-paginate';

import scss from './Pagination.module.scss';
const Pagination = () => {
  return (
    <>
      <ReactPaginate
        className={scss.paginationWrapper}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={6}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
