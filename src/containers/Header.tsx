import React from 'react';
import Author from "../components/Author";
import {PencilSquareIcon} from "@heroicons/react/20/solid";
import Button from "../components/Button";
import {useAuthor} from "../hooks/author";
import Modal from "../components/Modal";
import EditProfile from "../components/EditProfile";
import {useFollow} from "../hooks/followUser";
import FollowUser from "../components/FollowUser";
import {useSubscribe} from "../hooks/subscribes";
import SubscribesModal from "../components/SubscribesModal";

const Header = () => {
  const {author, editHandler, modal, setModal} = useAuthor();
  const {modalFollow, setModalFollow} = useFollow();
  const {setModalSubscribe, modalSubscribe} = useSubscribe();

  return (
    <div className='sm:container mx-auto px-5 py-8 bg-emerald-50 flex justify-between'>
      <div className='flex'>
        <Author
          author={author}
        />
        <button className='cursor-pointer' onClick={() => setModal(true)}>
          <PencilSquareIcon className='stroke-emerald-700 h-8 w-8 ml-4 hover:h-9 hover: w-9'/>
        </button>
      </div>
      <div className='flex'>
        <Button type='button' text='Follow user' addStyle='bg-newUser'  onClick={() => setModalFollow(true)}/>
        <Button type='button' text='Subscribes' addStyle='bg-subscribes' onClick={() => setModalSubscribe(true)}/>
      </div>
      {modal && <Modal title='Edit Profile' onClose={() => setModal(false)}>
        <EditProfile onEdit={editHandler}/>
      </Modal>}
      {modalFollow && <Modal title='Follow User' onClose={() => setModalFollow(false)}>
        <FollowUser onAdd={() => setModalFollow(false)}/>
      </Modal>}
      {modalSubscribe && <Modal title='Your subscribe' onClose={() => setModalSubscribe(false)}>
        <SubscribesModal/>
      </Modal>}
    </div>
  );
};

export default Header;