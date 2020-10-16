const ids = [
  12470,12472,12473,12474,12475,12477,12479,12566,12567 // ,15286,15325,15326
]

const dark = () => {
  new Darkmode()
}

const deleteCourses = (ids) => {
  if(ids.length){
    document.querySelectorAll('li.type_system ul li.type_course').forEach((li)=>{
      if(!ids.includes(Number(li.getElementsByTagName('a')[0].getAttribute('href').split('=').pop()))){
        li.remove()
      }
    })
  }
}

const deleteAdminMenu = () => {
  document.getElementById('inst32')?.remove()
}

const deleteCourseCategories = () => {
  document.getElementById('frontpage-category-names')?.remove()
}

window.addEventListener('load', main);