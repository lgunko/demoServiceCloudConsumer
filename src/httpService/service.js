
export const getServices = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allServices"
    return await (await fetch(url)).json()
}

export const getAllGroups = async () => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allGroups"
    return await (await fetch(url)).json()
}

export const getGroupsForService = async (service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/groupsForService?service=" + encodeURIComponent(service)
    return await (await fetch(url)).json()
}

export const getPermissionsForService = async (service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/permissionsForService?service=" + encodeURIComponent(service)
    return await (await fetch(url)).json()
}

export const getPermissionsForGroup = async (group) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/servicePermissionsForGroup?group=" + encodeURIComponent(group)
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
    //await setPermissionForGroup(serviceGroupPermissions)
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

/*
export const getServices = async () => {

    const url = `http://localhost:8081/query`;
    const query = `{listServices}`
    let response = (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: query,
        }),
    })).json()).data.listServices
    return [...new Set(response)].sort().reverse()
}

export const getAllGroups = async () => {

    const url = `http://localhost:8081/query`;
    const query = `{listGroups}`
    let response = (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: query,
        }),
    })).json()).data.listGroups
    return [...new Set(response)]
}

export const getGroupsForService = async (service) => {

    const url = `http://localhost:8081/query`;
    const query = `{listGroupsForService(service:"` + service + `")}`
    let response = (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: query,
        }),
    })).json()).data.listGroupsForService
    return [...new Set(response)]
}

export const getPermissionsForGroup = async (group) => {

    const url = `http://localhost:8081/query`;
    const query = `{getPermissionsForGroup(group:"` + group + `"){
        service,
        permission
      }}`
    let response = (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: query,
        }),
    })).json()).data.getPermissionsForGroup
    return [...new Set(response)]
}

export const setPermissionForGroup = async (serviceGroupPermissions) => {

    let toSendPerGroup = {}

    Object.keys(serviceGroupPermissions).map(service => {
        Object.keys(serviceGroupPermissions[service]).map(group => {
            toSendPerGroup[group] ? toSendPerGroup[group].push({ service: service, permission: serviceGroupPermissions[service][group] }) : toSendPerGroup[group] = [{ service: service, permission: serviceGroupPermissions[service][group] }]
        })
    })

    console.log(toSendPerGroup)

    Object.keys(toSendPerGroup).map(groupName => {
        toSendPerGroup[groupName].permissions = []
        let permArray = toSendPerGroup[groupName]
        console.log(permArray)
        permArray.map(pemServ => {
            console.log(pemServ)
            console.log(pemServ.service)
            pemServ.permission.map(permName => { toSendPerGroup[groupName].permissions.push({ permission: permName, service: pemServ.service }) })
        })
        //toSendPerGroup[groupName].permissions = permArray.map(permissionName => {return {service: toSendPerGroup[groupName].service, permission:permissionName}})
        console.log(toSendPerGroup)
    })

    Object.keys(toSendPerGroup).map(async groupName => {
        console.log(groupName)
        console.log(toSendPerGroup[groupName].permissions)
        await setGroup(groupName, toSendPerGroup[groupName].permissions)
    })

}


const setGroup = async (groupName, permissions) => {
    const url = `http://localhost:8081/query`;
    let mutation = `mutation{setGroup(groupName:"` + groupName + `",
        permissions:` +
        JSON.stringify(permissions)
        + `)}`

    while (mutation.includes(`"permission"`)) {
        mutation = mutation.replace(`"permission"`, `permission`).replace(`"service"`, `service`)
    }
    console.log(mutation)
    let response = (await (await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            query: mutation,
        }),
    })).json())
}
*/