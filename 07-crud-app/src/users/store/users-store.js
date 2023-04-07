import { loadUserByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  loadUserByPage(state.currentPage + 1);
};

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
