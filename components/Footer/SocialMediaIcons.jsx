import React from 'react'
import { nanoid } from 'nanoid'

// react-icons over @mui/icons-material because we need some icons not
// exist on @mui/icons-material.
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'

const data = [
  (props) => <ImFacebook {...props} />,
  (props) => <ImTwitter {...props} />,
  (props) => (
    <ImInstagram {...props} style={{ ...props.style, marginRight: '2.2rem' }} />
  ),
]

export function SocialMediaIcons() {
  return (
    <React.Fragment>
      {data?.map((item) => (
        <a
          key={nanoid}
          target='_blank'
          href='https://www.airbnb.com/'
          rel='noopener noreferrer'
        >
          {item({ size: 20, style: { marginLeft: '1.25rem' } })}
        </a>
      ))}
    </React.Fragment>
  )
}
