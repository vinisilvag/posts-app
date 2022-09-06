import React, { useState } from 'react'

import { PlusIcon } from '@heroicons/react/24/solid'
import { Modal } from '@components/modal'

export const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <nav className="w-full h-20 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>

        <button
          type="button"
          onClick={handleOpenModal}
          className="w-14 h-14 rounded-3xl flex items-center justify-center bg-pink-600 hover:bg-pink-700"
        >
          <PlusIcon className="h-7 w-7 text-white" />
        </button>
      </nav>

      <Modal modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
    </>
  )
}
