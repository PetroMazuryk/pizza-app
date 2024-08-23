import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectPageCount } from '../../redux/slices/selectors';
import { setPage } from '../../redux/slices/filterSlice';

import scss from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const page = useSelector(selectPage);

  const handlePageClick = (event) => {
    dispatch(setPage(event.selected + 1));
    window.scroll(0, 0);
  };

  return (
    <ReactPaginate
      className={scss.paginationWrapper}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={6}
      onPageChange={(event) => handlePageClick(event)}
      pageCount={pageCount}
      forcePage={page - 1}
      renderOnZeroPageCount={null}
      activeClassName={scss.selected}
    />
  );
};

export default Pagination;
