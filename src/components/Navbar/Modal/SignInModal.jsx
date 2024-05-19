import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../store/slice/SigninModalSlice";
import SignInForm from "../Form/SignInForm";
import CloseIcon from "@mui/icons-material/Close";

export default function SignInModal(props) {
  const modalOpen = useSelector((state) => state.signinModal.value);
  const dispatch = useDispatch();

  function closeModalHandler() {
    dispatch(closeModal());
  }

  function openModalHandler() {
    dispatch(openModal());
  }
  const darkMode = useSelector((state) => state.toggle.darkMode);
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModalHandler}
          className={`${
            darkMode
              ? "bg-slate-500 hover:bg-gray-700"
              : "bg-gray-800 hover:bg-gray-400 hover:text-black"
          } px-4 py-1 rounded-md  text-white ml-2`}>
          {props?.openText}
        </button>
      </div>

      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg  font-medium leading-6 text-gray-900 flex justify-between">
                    <button onClick={closeModalHandler}>
                      <CloseIcon />
                    </button>
                    <div className="text-right"> {props?.title}</div>
                  </Dialog.Title>
                  <div className="mt-8">
                    <SignInForm />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
