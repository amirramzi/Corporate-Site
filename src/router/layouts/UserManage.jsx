import React from "react";
import { Tab } from "@headlessui/react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import UserList from "../../components/User-manage/UserList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
function UserManage() {
  const darkMode = useSelector((state) => state.toggle.darkMode);

  return (
    <>
      <Sidebar />
      <div className="text-right px-10 mt-4">
        <Tab.Group>
          <Tab.List className={`space-x-4 pt-6 flex justify-center`}>
            <Tab
              className={`${darkMode ? "bg-slate-600" : "bg-gray-800"}
              px-6 py-2  text-gray-200 rounded-lg lg:rounded-full`}>
              تعداد کاربران
            </Tab>
            <Tab
              className={`${
                darkMode ? "bg-slate-600" : "bg-gray-800"
              } px-6 py-2  text-gray-200 rounded-lg lg:rounded-full`}>
              کاربران آنلاین
            </Tab>
          </Tab.List>
          <UserList />
          <Tab.Panel>2</Tab.Panel>
        </Tab.Group>
      </div>
      <ToastContainer />
    </>
  );
}

export default UserManage;
