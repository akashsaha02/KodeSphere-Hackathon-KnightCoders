import Card from "../../components/dashboard/Card";
import MainCard from "../../components/dashboard/MainCard";
import { Modal } from "../../components/dashboard/Modal";
import Navbar from "../../components/dashboard/Navbar";
import { useState } from "react";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [logo, setLogo] = useState("");

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 grid-rows-7 px-7 pt-6 pb-10 min-h-screen">
      <div className="col-span-2 row-span-1">
        <Navbar />
      </div>

      <div className="col-span-2 row-span-3">
        <MainCard />
      </div>

      <div className="row-span-3">
        <Card
          modalHandler={modalHandler}
          setHeading={setHeading}
          setLogo={setLogo}
        />
      </div>

      <div>
        {modal && (
          <Modal heading={heading} logo={logo} modalHandler={modalHandler} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
