import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MyModal({ isOpen, setIsOpen }: ModalProps) {
    const [settlers, setSettler] = useState<string[]>([]);

    function closeModal() {
        setIsOpen(false);
        setSettler([]);
    }

    function addSettler() {
        setSettler([...settlers, ""]);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gypsum p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add a Expense
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-y-4">
                                        <div className="flex flex-col gap-y-2">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                name="title"
                                                className="w-full border border-black bg-gypsum py-2 px-4 outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <label htmlFor="value">
                                                Value (cUSD)
                                            </label>
                                            <input
                                                name="value"
                                                type="number"
                                                className="w-full border border-black bg-gypsum py-2 px-4 outline-none"
                                            />
                                        </div>
                                        {settlers.map((settler) => (
                                            <input className="border border-black w-full bg-gypsum px-4 py-2 outline-none" />
                                        ))}
                                        <button
                                            onClick={addSettler}
                                            className="self-end px-2 py-2 bg-prosperity border-black border"
                                        >
                                            + Add Settler
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="border-black inline-flex justify-center border  bg-prosperity px-4 py-2 text-sm font-medium text-black hover:bg-prosperity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
