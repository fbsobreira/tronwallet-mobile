import getContactsStore from '../store/contacts'

export const getContactsFromStore = async () => {
  const store = await getContactsStore()

  return store
    .objects('Contact')
    .sorted('name')
    .map(item => Object.assign({}, item))
}

export const getAddressesFromStore = async () => {
  const contacts = await getContactsFromStore()
  return contacts.map(contact => contact.address)
}

export const getAliasFromStore = async () => {
  const contacts = await getContactsFromStore()
  return contacts.map(contact => contact.alias)
}
export const resetContactsData = async () => {
  const contacts = await getContactsStore()
  const contactsList = contacts.objects('Contact')
  contacts.write(() => contacts.delete(contactsList))
}
