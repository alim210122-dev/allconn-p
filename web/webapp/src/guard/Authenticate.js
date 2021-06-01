import {LocalStorageKey} from "../constants";
import {AuthenticationService} from "../service";

export default () => {
    return {
        isAuthenticate: () => {
            if (localStorage.getItem(LocalStorageKey.IS_LOGGED_IN) != null) {
                localStorage.setItem(LocalStorageKey.REDIRECT_URL, window.location.pathname)
            }

            return localStorage.getItem(LocalStorageKey.IS_LOGGED_IN) != null;
        },

        authenticate: (username, password) => {
            let loginPromise  = AuthenticationService.login(username, password);
            /*const adminUser = {
                employeeId: "NV10095",
                id: 1,
                isConfirm: true
            };

            let loginPromise = Promise.resolve(adminUser);*/

            return loginPromise.then(data => {
                if (!data) {
                    return Promise.reject();
                } else {
                    if (data && data.isConfirm) {
                        localStorage.setItem(LocalStorageKey.IS_LOGGED_IN, "true");
                        localStorage.setItem(LocalStorageKey.LOGGED_USER, data.employeeId);
                        localStorage.setItem(LocalStorageKey.LOGGED_USER_ID, data.batchUserId);

                        return true;
                    } else {
                        return false;
                    }
                }
            });
        },

        logOut: (currentUrl) => {
            localStorage.setItem(LocalStorageKey.REDIRECT_URL, currentUrl)
            localStorage.removeItem(LocalStorageKey.IS_LOGGED_IN);
            localStorage.removeItem(LocalStorageKey.LOGGED_USER);
            localStorage.removeItem(LocalStorageKey.LOGGED_USER_ID);

            window.location.assign("/api/logout");
        }
    }
}

