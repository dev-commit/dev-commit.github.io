
https://github.com/RomanAlekseev/ReduxFriends/tree/master/

//---------------------------------------------------------------------
// compose roma
//---------------------------------------------------------------------
export const filterName = name => usersArray => {
	const str = name.toUpperCase();
	return usersArray.filter(name => {
		name = name.name.toUpperCase();
		let surname = " " + str;
		return name.indexOf(str) === 0 || name.indexOf(surname) !== -1;
	});
};

export const compose = ([...funcs], anyData) => funcs.reduceRight((memo, fns) => fns(memo), anyData);
export const filterAge = (ageStart, ageEnd) => usersArray => {
	return usersArray.filter(person => {
		return person.age >= ageStart && person.age <= ageEnd;
	});
};

//---------------------------------------------------------------------
// reduces and actions (react doc)
//---------------------------------------------------------------------

export function handleLogin() {
  return function(dispatch) {
  
    dispatch({
      type: LOGIN_REQUEST,
    })

    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}


export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false, error: '' }

    case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






//---------------------------------------------------------------------
// roma
//---------------------------------------------------------------------
export function fetchUsers() {
    return dispatch => {
        const request = async () => {
            const response = await fetch("http://localhost:8080/api/users");
            if (response.status === 200) {
                const json = await response.json();
                dispatch(receiveUsers(json));
                return json;
            } else {
                dispatch(fetch_error());
            }
        };
        return request();
    };
}

//---------------------------------------------------------------------
// async action
//---------------------------------------------------------------------
var items = (!!catalog.length && catalog.catalogList.map((item) => ... )))


export const addCatalog = catalogList => async (dispatch, getState) => (
    const data = await (...)
    dispatch({
        type: ADD_CATALOG,
        payload: data
    })
)


//---------------------------------------------------------------------
// Простой action с async await
//---------------------------------------------------------------------
export const setUsersAction = (currentPage: number,
    sortType: string = 'desc') => async (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const allFilters = state.AdminUsers.filters;


    dispatch({
        type: ACTION.GET_USERS_LOADING,
    });


    try {
        const users = await getUsers(currentPage, 50, sortType, allFilters);


        dispatch({
            type: ACTION.GET_USERS_SUCCESS,
            payload: users,
        });
    } catch (error) {
        dispatch({
            type: ACTION.GET_USERS_ERROR,
            payload: error,
        });
    }
};


//---------------------------------------------------------------------
then, catch
//---------------------------------------------------------------------
handleSubmit: (values, props) => {
    const { editId, users } = props.props;
    const user = users.content.find(userData => userData.id === editId);


    updateUser(props.props.editId, transformDataForRegister(values, true, user.isLdapUser))
        .then(() => props.props.onHandleOnClose())
        .then(() => Notification.showMessage({
            message: 'Пользователь успешно обновлён!',
            type: 'success',
            closeTimeout: 3000,
        }))
        .then(() => props.props.setUsers(pathOr(null, ['users', 'number'], props.props)))
        .catch(error => Notification.showMessage({
            message: pathOr(null, ['data', 'errorMessage'], error.response),
            closeTimeout: 15000,
        }));
},