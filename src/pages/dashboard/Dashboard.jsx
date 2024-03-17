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
    <div className="container mx-auto grid-rows-7 px-7 pt-6 pb-10 min-h-screen">
      <Navbar />


      <MainCard />

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
