import moment from "moment";

import { fetchExtension } from '../util/fetchExtension';

const baseUrl = 'https://api.adoptium.net/v3';

let releases = []

export async function getAssetsForVersion(version: any, releaseType: any, numBuilds: any, buildDate: Date) {
  let url = `${baseUrl}/assets/feature_releases/${version}/${releaseType}?vendor=eclipse`;
  if (numBuilds) {
    url += `&page_size=${numBuilds}`
  }
  if (buildDate) {
    url += `&before=${moment(buildDate).format('Y-MM-DD')}`
  }
  releases = []
  let   json      = await makeRequest('GET', url);
  const response  = JSON.parse(json);
  const data      = response;
  let   pkgsFound = []
  for (let i = 0 ; i < data.length ; i++) {
      pkgsFound.push(data[i]);
  }
  return renderReleases(pkgsFound);
}

async function makeRequest(method: string, url: RequestInfo): Promise<apiData> {
    const response = await fetch(url);
    const apiResult = await response.text();
    return apiResult
};

function renderReleases(pkgs) {
  pkgs.forEach((aRelease) => {
    const release = {
        release_name: aRelease.release_name,
        openjdk_version: aRelease.version_data.openjdk_version,
        release_link: aRelease.release_link,
        timestamp: aRelease.timestamp,
        platforms: {},
    };

    aRelease.binaries.forEach((aReleaseAsset: { os: any; architecture: any; image_type: string; package: { link: any; checksum: any; size: number; }; installer: { link: any; checksum: any; size: number; }; }) => {
        const platform = `${aReleaseAsset.os}-${aReleaseAsset.architecture}`
  
        // Skip this asset if its platform could not be matched (see the website's 'config.json')
        if (!platform) {
          return;
        }
  
        // Skip this asset if it's not a binary type we're interested in displaying
        const binary_type = aReleaseAsset.image_type.toUpperCase();
        if (binary_type == 'SOURCES') {
          release.source_url = aReleaseAsset.package.link;
        }
        if (!['INSTALLER', 'JDK', 'JRE'].includes(binary_type)) {
          return;
        }
  
        if (!release.platforms[platform]) {
          release.platforms[platform] = {
            assets: [],
          };
        }
  
        let binary_constructor = {
          os: aReleaseAsset.os,
          architecture: aReleaseAsset.architecture,
          type: binary_type,
          link: aReleaseAsset.package.link,
          checksum: aReleaseAsset.package.checksum,
          size: Math.floor(aReleaseAsset.package.size / 1000 / 1000),
          extension: fetchExtension(aReleaseAsset.package.link)
        };
  
        if (aReleaseAsset.installer) {
          binary_constructor.installer_link = aReleaseAsset.installer.link;
          binary_constructor.installer_checksum = aReleaseAsset.installer.checksum;
          binary_constructor.installer_size =  Math.floor(aReleaseAsset.installer.size / 1000 / 1000);
          binary_constructor.installer_extension = fetchExtension(aReleaseAsset.installer.link)
        }
  
        // Add the new binary to the release asset
        release.platforms[platform].assets.push(binary_constructor);
    });
    releases.push(release);
  })
  return releases
}
