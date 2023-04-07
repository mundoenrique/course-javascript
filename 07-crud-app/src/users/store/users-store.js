const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {};

const loadPreviousPage = async () => {};

const onUserChange = () => {};

const reloadPage = async () => {};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChange,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
