import React from 'react'
import MailDetail from '../components/MailDetail'

const MailDetailPage = ({currentTask, deleteTask, updateTask,setCurrentTask, clearCurrent}) => {
  return (
    <div className='flex flex-1 justify-center'>
        <div className='w-5/6 flex justify-center '>
            {currentTask && <MailDetail currentTask={currentTask} deleteTask={deleteTask} updateTask={updateTask} setCurrentTask={setCurrentTask} clearCurrent={() => setCurrentTask(null)} />}
        </div>
    </div>
  )
}

export default MailDetailPage