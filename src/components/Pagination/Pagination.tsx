import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectCountPage,
} from '../../redux/slices/selectors';
import { setPage } from '../../redux/slices/filterSlice';

import scss from './Pagination.module.scss';

interface IPageClickEvent {
  selected: number;
}

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const countPage = useSelector(selectCountPage);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageClick = (event: IPageClickEvent) => {
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
      pageCount={countPage}
      forcePage={Math.min(currentPage - 1, countPage - 1)}
      activeClassName={scss.selected}
    />
  );
};

export default Pagination;
