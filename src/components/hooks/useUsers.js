import {useMemo} from "react";

export const useSortedUsers = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if (sort) {
            return [...users].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return users
    }, [users, sort])

    return sortedUsers
}

export const useUsers = (users, sort, query) => {
    const sortedUsers = useSortedUsers(users, sort)
    const filteredUsers = useMemo(() => {
        return sortedUsers.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedUsers])
    return filteredUsers
}