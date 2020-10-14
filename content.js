const ids = [

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

const main = () => {
  deleteCourses(ids)
  deleteAdminMenu()
  deleteCourseCategories()
  dark()
}

window.addEventListener('load', main);
