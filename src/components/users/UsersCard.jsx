import React from 'react';
import userData from './Userdata';


const UsersCard = () => {
  return (
    <div className="rounded-xl p-4 flex-col hidden lg:block justify-center items-center">
      <p className="text-2xl text-gray-900 font-bold text-center mt-4 mb-8"> Users </p>
      {userData.map((user, index) => (
        <div key={index} className="mx-auto mb-6">
          <div className="mx-auto my-auto max-w-xs bg-white rounded-xl overflow-hidden shadow-md">
            <div className="flex px-6 py-4">
              <div className="flex items-center justify-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user.photo}
                  alt={user.name}
                />
              </div>
              <div className="ml-10 text-center mt-4">
                <p className="text-xl text-gray-900 font-semibold">
                  {user.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;
