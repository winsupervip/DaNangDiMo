/* eslint-disable prefer-const */

import axios from "axios";
import {ReactNode, createContext, useEffect, useState} from "react";
import {toastService} from "../services/Toast.service";
import {environment} from "../environments/environment";
import {roleService} from "../app/auth/PhanQuyen/role.service";

export const UserContext = createContext({});

export interface UserEntity {
  accessToken: string;
  displayName: string;
  expired: number;
  roleId: string;
  userId: string;
  username: string;
}

function UserProvider(props: {children: ReactNode}) {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const getIsLogged = () => Boolean(getToken());

  const [isLogged, setIsLogged] = useState(getIsLogged());
  const [user, setUserState] = useState<UserEntity>();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("rolePath");
    window.location.href = "/login";
  };

  const setUser = (user: UserEntity) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.accessToken);
    setUserState(user);
  };

  useEffect(() => {
    const loadUser = () => {
      let item = localStorage.getItem("user");
      if (item) {
        let usr = JSON.parse(item);
        setUser(usr);
      }
    };

    loadUser();
  }, []);

  const getRole = async () => {
    try {
      let response;
      await roleService
        .getOne("")
        .then((val) => {
          if (val) {
            localStorage.setItem("role", JSON.stringify(val));
          }
          response = val;
        })
        .catch((e) => {
          toastService.error(
            "Có lỗi !",
            "Đã có lỗi xảy ra khi truy vấn quyền đăng nhập"
          );
          response = false;
        });
      return response;
    } catch (error) {
      if (error) {
        toastService.error(error as string);
      }
    }
  };

  const login = async (username: string, password: string) => {
    try {
      let response;
      await axios
        .post(environment.apiUrl + "/auth/login", {
          username,
          password,
        })
        .then((val) => {
          if (val.data.accessToken) {
            setUser(val.data);
            setIsLogged(true);
          }
          response = val.data;
        })
        .catch((e) => {
          toastService.error("Có lỗi !", "Sai tài khoản hoặc mật khẩu");
          response = false;
        });
      return response;
    } catch (error) {
      if (error) {
        toastService.error(error as string);
      }
    }
  };

  const checkAccess = async () => {
    try {
      const response = await axios.get(
        `${environment.apiUrl}/auth/isAccess/${environment.appId.appId}`
      );
      if (response?.data) {
        return true;
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        getToken,
        isLogged,
        logout,
        checkAccess,
        getRole,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserProvider;
