import {useMemo} from "react";

export const useSortedUsers = (users, sort) => {
    return useMemo(() => {
        if (sort === "name") {
            return [...users].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else if (sort === "age") {
            return [...users].sort((a, b) => b[sort] - a[sort])
        }
        return users
    }, [users, sort])
}

export const useUsers = (users, sort, query) => {
    const sortedUsers = useSortedUsers(users, sort)
    return useMemo(() => {
        return sortedUsers.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedUsers])
}