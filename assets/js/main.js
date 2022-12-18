const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
})

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#front"]').tab('show') // Select tab by name
$('#myTab a[href="#back"]').tab('show') // Select tab by name
$('#myTab a[href="#ferramentas"]').tab('show') // Select tab by name
$('#myTab a[href="#conhecimento"]').tab('show') // Select tab by name
