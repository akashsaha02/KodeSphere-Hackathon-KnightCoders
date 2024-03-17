import React from 'react';
import userData from './Userdata';


const UsersCard = () => {
  return (
    <div className="border-2 rounded-xl shadow-xl p-4 flex-col justify-center">
      <p className="text-xl text-gray-900 font-semibold"> Authorized Users: </p>
      {userData.map((user, index) => (
        <div key={index} className="mx-auto">
          <div className="mx-auto my-auto max-w-xs rounded overflow-hidden shadow-md">
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
