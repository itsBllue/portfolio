import React from 'react';

const LinkedInIcon = (props)=>{
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : 45}
        height={props.height ? props.height : 45}
        viewBox="0 0 192 192"
      >
        <g

        >
          <path fill="#000" d="M0 192V0h192v192z" />
          <path
            
            d="M156 0H36C16.125 0 0 16.125 0 36v120c0 19.875 16.125 36 36 36h120c19.875 0 36-16.125 36-36V36c0-19.875-16.125-36-36-36zM59.365 162.98H29.538l-.173-89.307h29.827zM43.702 61.99h-.173c-9.75 0-16.039-6.72-16.039-15.086 0-8.567 6.49-15.058 16.414-15.058 9.923 0 16.01 6.49 16.211 15.058 0 8.365-6.317 15.086-16.413 15.086zm119.077 100.99h-30.087v-48.518c0-11.74-3.115-19.731-13.615-19.731-8.02 0-12.346 5.394-14.423 10.615-.779 1.875-.98 4.442-.98 7.067v50.568H73.441l-.173-89.308H103.5l.173 12.606c3.865-5.971 10.298-14.423 25.702-14.423 19.096 0 33.375 12.461 33.375 39.26v51.865z"
          />
        </g>
      </svg>
    )
}

const LinkedIn2 = (props)=>{
    return(
          <svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <title>{"Rectangle 5"}</title>
    <path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </svg>
    )
}

export default LinkedInIcon;