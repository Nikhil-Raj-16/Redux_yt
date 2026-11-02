import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos','GIFs']

    const dispatch = useDispatch()

    
    const activeTab = useSelector((state) => state.search.activeTab)
    // current value is stored


  return (
    <div className='flex gap-5 mt-5 p-6'>

        {tabs.map(function(elem,idx){
            return <button onClick={()=>{
                dispatch(setActiveTabs(elem))   // we are dispatching the current elem that is selected
            }}
            className={` ${activeTab==elem?'bg-green-500':'bg-gray-600'} border px-4 py-2 text-xl text-black font-medium uppercase rounded outline-null cursor-pointer active:scale-95 transition`} key={idx}>{elem}</button>
            
        })}
    </div>
  )
}

export default Tabs



// Here is exactly how it enables tracking the currently clicked tab:

// Reads from the Central Store: useSelector receives the entire Redux state tree (state) as an argument. The selector function (state) => state.search.activeTab navigates into the search slice and pulls out the current value of activeTab (e.g., 'photos', 'videos', or 'GIFs').

// Subscribes to Changes: Whenever the onClick handler fires dispatch(setActiveTabs(elem)), Redux updates state.search.activeTab in the store.

// Triggers a Re-render: When useSelector detects that activeTab has changed to a new value, it automatically triggers a re-render of the Tabs component.

// Applies Conditional Styling: On re-render, the array .map() runs again. For each tab, it compares activeTab == elem. The tab that matches the stored state receives the 'bg-green-500' class, while the others get 'bg-gray-600'.