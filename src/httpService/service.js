export async function getServices() {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/allServices"
    return await (await fetch(url)).json()
}

export const getGroupsForService = async (service) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/groupsForService?service=" + encodeURIComponent(service)
    return await (await fetch(url)).json()
}

export const getPermissionsForGroup = async (group) => {
    let url = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/servicePermissionsForGroup?group=" + encodeURIComponent(group)
    return await (await fetch(url)).json()
}