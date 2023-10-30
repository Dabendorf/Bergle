import Modal from "react-modal";
import React from "react";

interface PanelProps {
  title: string;
  isOpen: boolean;
  close: () => void;
  children?: React.ReactNode;
}

export function Panel({ title, isOpen, close, children }: PanelProps) {
  const handleCloseModal = () => {
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="flex justify-center h-full items-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      //ariaHideApp
    >
      <div className="w-full max-w-3xl h-full max-h-1xl overflow-auto mt-10 pb-10 slate-100 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-300" style={{ color: "slate-100" }}>
          <h2 className="text-lg font-medium text-slate-100">{title}</h2>
          <button
            type="button"
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div className="p-4 text-slate-100" style={{color: 'slate-100'}}>{children}</div>
      </div>
    </Modal>
  );
}