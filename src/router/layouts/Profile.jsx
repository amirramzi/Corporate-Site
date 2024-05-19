import React, { useEffect, useState } from "react";
import AccountAvatr from "../../components/Navbar/AcoountBtn/Avatar";
import { useSelector } from "react-redux";
import FileInput from "../../components/Navbar/Form/FileInput";
import SignUpForm from "../../components/Navbar/Form/SignUpForm";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
function Profile() {
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

  return (
    <>
      <Sidebar />
      <div className="px-4 lg:px-56 py-6">
        <div className="flex justify-center w-full">
          <div
            className={`${
              darkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-100 text-gray-800"
            }  mt-20 w-[800px] text-right px-8 py-4 rounded-lg`}>
            <div className="flex flex-col  items-center w-full space-x-4">
              <AccountAvatr className="w-28 h-28" />

              <div className="mt-4">
                <FileInput />
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className={`${index > 0 ? "hidden" : "block"}`}>
                    <SignUpForm
                      id={user.id}
                      name={user.name}
                      family={user.family}
                      phone={user.phone}
                      email={user.email}
                      password={user.password}
                      onSubmit={"updateUserHandelr"}
                      btnName="تغییر مشخصات"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Profile;
