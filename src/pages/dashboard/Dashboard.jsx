import Card from "../../components/dashboard/Card";
import MainCard from "../../components/dashboard/MainCard";
import { Modal } from "../../components/dashboard/Modal";
import { useState } from "react";
import UsersCard from "../../components/users/UsersCard";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [logo, setLogo] = useState("");

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="container mx-auto px-7 pt-6 mb-6">

      <div className="grid xl:grid-cols-3 grid-cols-2 bg-gray-200 rounded-t-xl">
        <div className=" col-span-2">
          <MainCard />
        </div>
        <div>
          <UsersCard />
        </div>
      </div>

      <Card
        modalHandler={modalHandler}
        setHeading={setHeading}
        setLogo={setLogo}
      />

      {modal && (
        <Modal heading={heading} logo={logo} modalHandler={modalHandler} />
      )}
    </div>
  );
};

export default Dashboard;
