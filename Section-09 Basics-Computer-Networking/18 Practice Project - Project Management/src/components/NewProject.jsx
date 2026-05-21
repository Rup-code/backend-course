import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      // Show the error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="font-bold text-xl text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-8">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-8">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="flex gap-4 justify-end items-center my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-800 px-6 py-2 rounded-md text-stone-50 hover:bg-stone-950
        "
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="Date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
