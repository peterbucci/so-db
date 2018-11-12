
export const skills = [{
  id: 1,
  name: 'Plasma Cyclone',
  element: 'lightning',
  hits: 9,
  sp: 45,
  stat: 'int',
  scaling: 450,
  contentType: 'skill'
}]
export const characters = [{
  id: 1,
  name: 'Myuria',
  role: 'Invoker',
  weapon: 'Staff',
  rating: 9.0,
  iconUrl: '',
  skills: [1].map(id => skills.find(skill => id === skill.id)),
  contentType: 'character'
}, {
  id: 2,
  name: 'Vampire Victor',
  role: '',
  contentType: 'character'
}]
export const weapons = []