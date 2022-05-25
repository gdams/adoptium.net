const baseUrl = 'https://staging-marketplace-api.adoptium.net';
    
export async function getAllPkgsForVersion(
        version: number,
        os: string,
        architecture: string,
        package_type: string,
        checkboxRef: any,
    ): Promise<apiData> {
    let microsoftSelected = checkboxRef.current.vendorMicrosoft.checked;
    let temurinSelected = checkboxRef.current.vendorAdoptium.checked;
    let redhatSelected = checkboxRef.current.vendorRedHat.checked;
    let huaweiSelected = checkboxRef.current.vendorHuawei.checked;
    let zuluSelected = checkboxRef.current.vendorAzul.checked;
    let ibmSelected = checkboxRef.current.vendorIBM.checked;

    let params = '?'
    params += 'feature_version=' + version;

    if (os !== 'any' ) {
        if (os === 'alpine-linux') {
            params += '&os=alpine_linux'
        } else {
            params += ('&os=' + os)
        }
    }

    if (architecture !== 'any' ) {
        params += ('&architecture=' + architecture)
    }

    if (package_type === 'any') {
        params += '&image_type=jdk&image_type=jre'
    } else {
        params += ('&image_type=' + package_type)
    }

    if (temurinSelected) {
        params += '&vendor=adoptium'
    }

    if (redhatSelected) {
        params += '&vendor=redhat'
    }

    if (huaweiSelected) {
        params += '&vendor=huawei'
    }

    if (microsoftSelected) {
        params += ('&vendor=microsoft')
    }

    if (zuluSelected) {
        params += ('&vendor=azul')
    }

    if (ibmSelected) {
        params += ('&vendor=ibm')
    }

    let url = baseUrl + '/v1/assets/latestForVendors' + params;
    let json = await getPkgs(url);
    const data = JSON.parse(json);
    return data
}

async function getPkgs(url) {
    let response = await makeRequest("GET", url);
    return response;
}

async function makeRequest(method, url): Promise<apiData> {
    const response = await fetch(url);
    const apiResult = await response.text();
    return apiResult
};

export function getImageForDistribution(distribution: string) {
    switch(distribution) {
    case 'microsoft': return '/images/microsoft-logo.png';
    case 'temurin': return '/images/adoptium-logo.png';
    case 'redhat': return '/images/redhat.svg';
    case 'bisheng': return '/images/huawei.svg';
    case 'zulu': return '/images/azul-logo.png';
    case 'semeru_certified': return '/images/ibm-logo.png';
    default: return '';
    }
}
