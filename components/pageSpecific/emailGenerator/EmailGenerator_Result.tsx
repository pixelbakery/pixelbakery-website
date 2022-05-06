import * as clipboard from 'clipboard-polyfill'
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'

const EmailGenerator_Result = (props) => {
  const { user } = props
  const div = useRef(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = () => {
    var dt = new clipboard.DT()
    dt.setData('text/plain', 'plain text')
    clipboard.write(dt)
    const html = div.current.innerHTML.trim()
    dt.setData('text/plain', html)
    dt.setData('text/html', html)
    clipboard.write(dt)

    // Handle error with user feedback - "Copy failed!" kind of thing

    setCopySuccess(true)
  }

  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
      `,
          }}
        ></style>
        {user.name && (
          <table ref={div}>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            maxWidth: '130px',
                          }}
                        >
                          <a href='https://pixelbakery.com' target={'_blank'}>
                            <img
                              style={{ width: '125px', height: '125px' }}
                              src='https://pixelbakery.com/img/PB_Logo_Initials_darkBlue_EmailSignature.jpg'
                              alt='logo'
                            />
                          </a>
                          <div
                            style={{
                              marginTop: '5px',
                            }}
                          ></div>
                        </td>
                        <td
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            margin: '0 20px',
                            fontFamily: 'Poppins,"Open Sans",Helvetica,sans-serif',
                          }}
                        >
                          <table>
                            <tbody>
                              <tr>
                                <td style={{ textAlign: 'initial' }}>
                                  <span
                                    style={{
                                      fontSize: '15.5px',
                                      fontWeight: '600',
                                      lineHeight: '16x',
                                      color: 'rgb(51,51,51)',
                                      fontFamily: 'Poppins,"Open Sans",Helvetica,sans-serif',
                                    }}
                                  >
                                    {user.name}
                                  </span>

                                  {user.jobTitle && (
                                    <p
                                      style={{
                                        margin: 0,
                                        fontStyle: 'italic',
                                        lineHeight: '13.5px',
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: '13.5px',
                                          lineHeight: '15px',
                                          color: 'rgb(51,51,51)',
                                          fontFamily: 'Poppins,"Open Sans",Helvetica,sans-serif',
                                        }}
                                      >
                                        {user.jobTitle}
                                      </span>
                                    </p>
                                  )}

                                  <table>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {user.phone && (
                                            <a
                                              href={`tel:${user.phone}`}
                                              style={{
                                                marginTop: '0px',
                                                lineHeight: '14px',
                                                fontSize: '13px',
                                                display: 'block',
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: 'rgb(237, 105, 112)',
                                              }}
                                            >
                                              <span>c: {user.phone}</span>
                                            </a>
                                          )}
                                          <a
                                            href={`tel:4023020323`}
                                            style={{
                                              marginTop: '0px',

                                              lineHeight: '14px',
                                              fontSize: '13px',
                                              textDecoration: 'none',
                                              cursor: 'pointer',
                                              color: 'rgb(237, 105, 112)',
                                            }}
                                          >
                                            <span>o: 402 302 0323</span>
                                          </a>
                                        </td>
                                      </tr>
                                      <tr></tr>
                                    </tbody>
                                  </table>

                                  <table>
                                    <tbody></tbody>
                                  </table>

                                  <table
                                    style={{
                                      marginTop: '-5px',
                                    }}
                                  >
                                    <tbody>
                                      <tr
                                        style={{
                                          cursor: 'pointer',
                                        }}
                                      >
                                        <td>
                                          <span
                                            style={{
                                              display: 'block',
                                              marginTop: '13px',
                                              marginBottom: '0px',
                                              paddingBottom: '0px',
                                              lineHeight: '14px',
                                              fontWeight: '600',
                                              fontSize: '14px',
                                              color: 'rgb(51,51,51)',
                                            }}
                                          >
                                            Pixel Bakery Design Studio
                                          </span>
                                          <a
                                            href='https://www.pixelbakery.com'
                                            style={{
                                              textDecoration: 'none',
                                              color: 'rgb(237, 105, 112)',
                                              fontSize: '14px',
                                              fontFamily:
                                                'Poppins,"Open Sans",Helvetica,sans-serif',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: '13px',
                                              }}
                                            >
                                              pixelbakery.com
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className='mt-12 '>
        {user.name && (
          <button
            type='submit'
            onClick={copyToClipboard}
            className={
              'bg-blue text-cream px-6 py-2 rounded-md inline-block font-semibold drop-shadow-sm duration-300 hover:scale-99 '
            }
          >
            Copy to Clipboard
          </button>
        )}
        {copySuccess && <div style={{ color: 'green' }}>✔︎ Copied to Clipboard!</div>}
      </div>
    </div>
  )
}

// EmailGenerator_Result.propTypes = {
//   user: PropTypes.isRequired,
// }

export default EmailGenerator_Result
