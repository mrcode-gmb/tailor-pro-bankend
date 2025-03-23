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
import PrimaryButton from '@/Components/PrimaryButton';


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
          <div className='bg-white p-3 rounded-lg shadow-md'>
            <div className="flex items-center gap-3 mt-0 max-md:mt-4 flex-nowwrap overflow-auto">
            <li className="list-none px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 bg-none bg-green-500 text-white hover:shadow-md cursor-pointer">
                <Link
                href=''
                className="flex gap-3 items-center"
                >
                {/* <i className="fa fa-comments"></i> */}
                <p>Messages</p>
                </Link>
            </li>
            <li className="list-none px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 bg-none hover:bg-gray-100 hover:shadow-md cursor-pointer">
                <Link
                href=''
                className="flex text-gray-600 gap-3 items-center"
                >
                {/* <i className="fa fa-gear"></i> */}
                <p>Social</p>
                </Link>
            </li>
            <li className="list-none px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 bg-none hover:bg-gray-100 hover:shadow-md cursor-pointer">
                <Link
                href=''
                className="flex text-gray-600 gap-3 items-center"
                >
                {/* <i className="fa fa-gear"></i> */}
                <p>Notifications</p>
                </Link>
            </li>
            <li className="list-none px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 bg-none hover:bg-gray-100 hover:shadow-md cursor-pointer">
                <Link
                href=''
                className="flex text-gray-600 gap-3 items-center"
                >
                {/* <i className="fa fa-gear"></i> */}
                <p>BackUp</p>
                </Link>
            </li>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-10 grid grid-cols-2 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 rounded-xl">
              <div className="w-full">
                <div className="shadow-lg bg-white rounded-xl p-5">
                  <h3 className="text-gray-600 text-xl font-semibold">
                    Profile picture
                  </h3>
                  <div className="flex pb-4 gap-4 items-center mt-4">
                    <img
                        src="@/../../assets/softwere.jpeg"
                        className="w-24 object-cover h-24 rounded-xl"
                        alt=""
                    />
                    <div>
                        <span className='text-xs bg-blue-100 px-2 py-1 rounded-lg'>PRO</span>
                        <h4 className="text-xl font-bold mt-2">Abubakar  Umar</h4>
                        <p className="text-gray-600">Web Developer</p>
                    </div>
                 </div>
                 <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-black dark:to-transparent" />
                 <PrimaryButton>Edit !</PrimaryButton>
                </div>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <div>
                <h3 className="text-gray-600 text-xl font-semibold">
                  Profile Information
                </h3>
                </div>
                <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-black dark:to-transparent" />
                <div className="mt-7">
                    <b className=''>Biography</b>
                  <p className=" font-normal cursor-pointer text-md text-ellipsis text-slate-500">
                  
                  I am Joseph McFall, a fervent explorer navigating the intricate landscapes of web design, driven by an unyielding passion for Web 3 and Artificial Intelligence. From the early days of tinkering with computers to my current standing as a web designer, my journey has been a dynamic evolution marked by a relentless pursuit of innovation.
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
