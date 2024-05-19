import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@headlessui/react";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

function UserList() {
  const [users, setUsers] = useState([]);

  const darkMode = useSelector((state) => state.toggle.darkMode);
  const getUserFromApi = async () => {
    try {
      let res = await fetch(
        "https://660c7b7b3a0766e85dbe2fd9.mockapi.io/users"
      );
      let getUsers = await res.json();
      if (res.ok) {
        setUsers(getUsers);
      }
    } catch (error) {
      toast.error("اینترنت  ضعیف است");
    }
  };
  useEffect(() => {
    getUserFromApi();
  }, []);

  const deletUser = async (user) => {
    try {
      let res = await fetch(
        `https://660c7b7b3a0766e85dbe2fd9.mockapi.io/users/${user?.id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        let newUser = users.filter((use) => {
          return user.id != use.id;
        });
        setUsers(newUser);
        toast.success("دیلیت کاربر با موفقیت انجام شد");
      }
    } catch (error) {
      toast.error("دیلیت کاربر ناموفق بود");
    }
  };
  const theadList = [
    { id: 5, name: "حذف" },
    { id: 4, name: "ایمیل" },
    { id: 3, name: "شماره تماس" },
    { id: 2, name: "نام خانوادگی" },
    { id: 1, name: "نام" },
  ];
  return (
    <Tab.Panel>
      <div className="overflow-x-auto">
        <table
          id="table-to-xls"
          className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-xl overflow-hidden mt-4 ">
          <thead
            className={`${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            } text-center`}>
            <tr>
              {theadList.map((list) => (
                <th
                  key={list.id}
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-700 "
                  }  py-3 px-6 text-xs font-medium tracking-wider text-center uppercase`}>
                  {list.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`${
              darkMode
                ? "bg-gray-800 divide-gray-700"
                : "bg-gray-200 divide-gray-200"
            }  divide-y text-center`}>
            {users.map((user) => (
              <tr
                className={`${
                  darkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"
                } text-center`}
                key={user.id}>
                <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                  <button
                    className={`${
                      darkMode
                        ? "bg-gray-700 text-red-700"
                        : "bg-gray-300 text-red-500"
                    }   px-2 py-1 rounded-md hover:underline`}
                    onClick={() => deletUser(user)}>
                    <CloseIcon />
                  </button>
                </td>
                <td
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } py-4 px-6 text-sm font-medium  whitespace-nowrap `}>
                  {user.email}
                </td>
                <td
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } py-4 px-6 text-sm font-medium  whitespace-nowrap `}>
                  {user.phone}
                </td>
                <td
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } py-4 px-6 text-sm font-medium  whitespace-nowrap `}>
                  {user.family}
                </td>
                <td
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } py-4 px-6 text-sm font-medium  whitespace-nowrap `}>
                  {user.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Tab.Panel>
  );
}
export default UserList;
