import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { useForm } from 'react-hook-form'

import { Input } from '@components/form/input'
import { Button } from '@components/form/button'

interface ModalProps {
  modalIsOpen: boolean
  handleCloseModal: () => void
}

export const Modal: React.FC<ModalProps> = ({
  modalIsOpen,
  handleCloseModal
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()

  return (
    <Transition appear show={modalIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-800"
                >
                  Novo post
                </Dialog.Title>
                <div className="mt-5 flex gap-4 flex-col">
                  {/* <Input
                    id="content"
                    placeholder="Digite aqui sua mensagem"
                    type="text"
                    error={errors.content}
                    {...register('content')}
                  /> */}
                </div>

                <div className="mt-4">
                  <Button title="Publicar" type="submit" />
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleCloseModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
