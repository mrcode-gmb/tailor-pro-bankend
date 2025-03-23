import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Link} from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import UserSideBar from '@/Components/MyComponents/UserSideBar';
import Footer from '@/Components/MyComponents/Footer';

function EditProfiles({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
    <>
    <Head title='Profile'/>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="Profile Overview" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div
            className={`-mt-2 w-full h-80 relative flex items-center overflow-hidden rounded-2xl bg-[url('/../src/assets/140859-green-and-black-waves-curved-lines-background.jpg')] bg-cover bg-center p-0`}
          >
            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-green-700 to-green-500 opacity-60"></span>
          </div>

          <div className="w-full">
            <div className="w-11/12 m-auto bg-white relative flex flex-col flex-auto min-w-0 p-3 -mt-16 overflow-hidden break-words border-0 shadow-blur dark:shadow-soft-dark-xl dark:bg-gray-200 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200 shadow-lg">
              <div className="flex max-md:block justify-between items-center w-full p-2">
                <div className="flex gap-4 items-center">
                  <img
                    src="@/src/assets/softwere.jpeg"
                    className="w-16 object-cover h-16 rounded-xl"
                    alt=""
                  />
                  <div>
                    <h4 className="text-xl">Abubakar Ibrahim Umar</h4>
                    <p className="text-gray-600">CEO / Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white cursor-pointer">
                    <Link
                      href=""
                      className="flex text-gray-600 gap-3 items-center"
                    >
                      <i className="fa fa-gear"></i>
                      <p>App</p>
                    </Link>
                  </li>
                  <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white cursor-pointer">
                    <Link
                      href=""
                      className="flex text-gray-600 gap-3 items-center"
                    >
                      <i className="fa fa-gear"></i>
                      <p>Messages</p>
                    </Link>
                  </li>
                  <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white cursor-pointer">
                    <Link
                      href=""
                      className="flex text-gray-600 gap-3 items-center"
                    >
                      <i className="fa fa-gear"></i>
                      <p>Settings</p>
                    </Link>
                  </li>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 rounded-xl">
              <div className="w-full">
                <div className="shadow-lg bg-white rounded-xl p-5">
                  <h3 className="text-gray-600 font-semibold">
                    PlathtmlForm Settings
                  </h3>
                </div>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <h3 className="text-gray-600 font-semibold">
                  Profile Information
                </h3>
                <div className="mt-7">
                  <p className=" font-normal cursor-pointer text-md text-ellipsis text-slate-500">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </p>

                  <div className="mt-7">
                    <div className="my-3">
                      <p className="text-slate-500">
                        <b>Full Name:</b> Alec M. Thompson
                      </p>
                    </div>
                    <div className="my-3">
                      <p className="text-slate-500">
                        <b>Mobile:</b> (+234) 080 3785 8023
                      </p>
                    </div>
                    <div className="my-3">
                      <p className="text-slate-500">
                        <b>Email:</b> abubakaribrahim30012@gmail.com
                      </p>
                    </div>
                    <div className="my-3">
                      <p className="text-slate-500">
                        <b>Location:</b> NIGERIA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className=" relative">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
