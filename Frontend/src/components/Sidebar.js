import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Button from "react-bootstrap/Button";
function Sidebar({ children, officeValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const handleUser = (element) => {
    setUserName(element);
  };

  const submitHandler = () => {
    officeValue(userName);
  };
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <motion.div
        animate={{ width: isOpen ? "200px" : "40px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h3>Filter</h3>}

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className="searchbyoffice">
          <div className="search_icon"></div>
          {isOpen && (
            <input
              text="text"
              onChange={(e) => handleUser(e.target.value)}
              placeholder="Filter by User Name"
            />
          )}
        </div>

        {isOpen && (
          <div className=" text-center">
            <Button onClick={() => submitHandler()} variant="primary ">
              Apply
            </Button>
          </div>
        )}
      </motion.div>
      <main>{children}</main>
    </>
  );
}

export default Sidebar;
