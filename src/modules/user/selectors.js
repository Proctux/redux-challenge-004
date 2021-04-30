export const getUserSelector = state => state.user

export const hasErrorSelector = state => !!state.user.error
