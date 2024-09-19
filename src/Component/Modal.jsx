import React, { useState } from "react";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  Modal,
} from "semantic-ui-react";

const Modals = ({ handleOk, isModalOpen, handleCancel, data }) => {
  console.log(data, "data");

  return (
    <div>
      <Modal
        className="h-[50%] overflow-y-auto pb-10"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
        onOpen={isModalOpen}
      >
        <ModalHeader>{data.title}</ModalHeader>

        {data.map((data) =>
          data.keywords?.map((keyword) => (
            <ModalContent key={keyword.id} className="">
              <ModalDescription className="bg-slate-200 text-black p-2 font-bold text-md mb-2 ">
                {keyword.name}
              </ModalDescription>
              <ModalDescription className=" -mb-6">
                {keyword.description}
              </ModalDescription>
            </ModalContent>
          ))
        )}
      </Modal>
    </div>
  );
};

export default Modals;
