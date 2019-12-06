export const getServices = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allServices"
    return await (await fetch(url)).json()
}

export const activateOldVersion = async (service, versionId) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/activateOldVersion"
    let result = await (await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            versionId: versionId,
            service: service
        }),
    })).json()
    console.log(result)
    return result
}

export const postNewVersion = async (serviceGroupPermissions, service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/newVersion"
    let result = await (await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            permissionsForGroup: serviceGroupPermissions[service],
            service: service
        }),
    })).json()
    console.log(result)
    return result
}

export const getActiveVersions = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/activeVersions"
    return await (await fetch(url)).json()
}

export const getAllVersions = async (service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allVersions?service=" + encodeURIComponent(service)
    return await (await fetch(url)).json()
}

export const getTimestamp = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/timestamp"
    return await (await fetch(url)).json()
}

export const getGroupsForService = async (service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/groupsForService?service=" + encodeURIComponent(service)
    return await (await fetch(url)).json()
}

export const getAllGroups = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allGroups"
    return await (await fetch(url)).json()
}

export const getPermissionsForGroup = async (group) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/servicePermissionsForGroup?group=" + encodeURIComponent(group)
    return await (await fetch(url)).json()
}