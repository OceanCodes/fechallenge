import React, { useEffect, createRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/Reducers/dataSlice";
import { setPageNumber } from "../../Redux/Reducers/pageNumberSlice";
import Lists from "../Lists/Lists";

function ListsContainer() {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users.data);
  const reviewers = useSelector(state => state.data.reviewers.data);
  const pageNum = useSelector(state => state.pageNumber.pageNum);
  const usersStatus = useSelector(state => state.data.users.status);
  const reviewersStatus = useSelector(state => state.data.reviewers.status);

  const observer = createRef();
  const lastElementRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          dispatch(setPageNumber());
        }
      });
      if (node) observer.current.observe(node);
    },
    [usersStatus, reviewersStatus]
  );

  const usersDatainfo = {
    type: "users",
    page: pageNum,
  };

  const reviewersDatainfo = {
    type: "reviewers",
    page: pageNum,
  };

  useEffect(() => {
    dispatch(fetchData(usersDatainfo));
    dispatch(fetchData(reviewersDatainfo));
  }, [pageNum]);

  return (
    <>
      {users.length && reviewers.length ? (
        <Lists users={users} reviewers={reviewers} ref={lastElementRef} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ListsContainer;
