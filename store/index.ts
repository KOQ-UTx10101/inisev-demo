interface IStateObj {
  isLoggedIn: boolean;
}

type State = () => IStateObj;

export const state: State = () => ({
  isLoggedIn: true,
});

export const mutations = {
  login(state: IStateObj) {
    state.isLoggedIn = true;
  },
  logout(state: IStateObj) {
    state.isLoggedIn = false;
  },
};
