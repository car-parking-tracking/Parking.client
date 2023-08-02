const getFirstLetterInUpperCase = (srt: string): string => srt[0].toUpperCase()

export const getInitials = (fullName: string): string => {
  const [name, lastName] = fullName.split(' ')
  return getFirstLetterInUpperCase(name) + getFirstLetterInUpperCase(lastName)
}
