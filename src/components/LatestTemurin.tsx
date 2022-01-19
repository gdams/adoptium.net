import React, { MutableRefObject, useRef } from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArchive,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import { detectOS, UserOS } from '../util/detectOS';
import { fetchLatestForOS, useOnScreen } from '../hooks';
import { defaultVersion } from '../util/defaults'

let userOSName
let userOSAPIName

const LatestTemurin = (): JSX.Element => {

  const userOS = detectOS();
  switch (userOS) {
    case UserOS.MAC:
      userOSName = 'macOS'
      userOSAPIName = 'mac'
      break;
    case UserOS.LINUX:
    case UserOS.UNIX:
      userOSName = 'Linux'
      userOSAPIName = 'linux'
      break;
    case UserOS.WIN:
      userOSName = 'Windows'
      userOSAPIName = 'windows'
      break;    
    default:
      break;
  }
  
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref as MutableRefObject<Element>, true);
  const binary = fetchLatestForOS(isVisible, defaultVersion, userOSAPIName);

    return (
        <div ref={ref} className="container">
            {binary ? (
              <h2 className="fw-light mt-3">Download Temurin for {userOSName} x64</h2>
            ) :
              <h2 className="fw-light mt-3">Download Temurin</h2>
            }
            <div className="btn-group-vertical col-6 mx-auto">
                {binary ? (
                  <>
                    <a href={`/download?link=${binary.link}`} className="btn btn-lg btn-primary mt-3 py-3">
                        <FontAwesomeIcon icon={faDownload} size="1x" style={{ marginRight: '.3em' }} /> Latest release
                        <br/>
                        <span style={{ fontSize: '.6em'}} className="font-weight-light">{binary.release_name}</span>
                    </a>
                    <Link to="/temurin/releases" className="btn btn-secondary mt-3">
                        Other platforms <FontAwesomeIcon icon={faArrowCircleRight} size="1x" style={{ marginLeft: '.3em' }} />
                    </Link>
                  </>
                ) :
                  <Link to="/temurin/releases" className="btn btn-lg btn-primary mt-3 py-3">
                      <FontAwesomeIcon icon={faDownload} size="1x" style={{ marginRight: '.3em' }} /> Latest releases
                  </Link>
                }
                <Link to="/temurin/archive" className="btn btn-secondary mt-3">
                    Release archive <FontAwesomeIcon icon={faArchive} size="1x" style={{ marginLeft: '.3em' }} />
                </Link>
            </div>
        </div>
    );
};

export default LatestTemurin;