interface IStateObj {
  isLoggedIn: boolean;
}

type State = () => IStateObj;

export const state: State = () => ({
  isLoggedIn: false,
});

export const mutations = {
  login(state: IStateObj) {
    state.isLoggedIn = true;
  },
  logout(state: IStateObj) {
    state.isLoggedIn = false;
  },
};
