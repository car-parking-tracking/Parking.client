export const replaceAddress = (address: string): string => {
  return address.replace('город Москва, ', '').replace('дом', '').replace(', строение ', 'c').replace('переулок', 'пер.').replace('улица', 'ул.')
}
